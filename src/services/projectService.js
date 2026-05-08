import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import imageCompression from 'browser-image-compression';
import { storage, db } from './firebase';

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

function validateProjectImage(file) {
  if (!file) {
    throw new Error('Project image is required.');
  }

  if (!(file instanceof File)) {
    throw new Error('Invalid image file.');
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new Error('Project image must be a JPG, PNG, or WEBP file.');
  }

  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error('Project image must be 10MB or smaller.');
  }

  return true;
}

async function compressImage(file) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    throw new Error('Failed to compress image.');
  }
}

function buildStoragePath(userId, fileName) {
  const safeFileName = encodeURIComponent(fileName.trim().replace(/\s+/g, '-'));
  return `projects/${userId}/${Date.now()}-${safeFileName}`;
}

export async function uploadProjectImage(userId, file) {
  validateProjectImage(file);

  const compressedFile = await compressImage(file);

  const storagePath = buildStoragePath(userId, compressedFile.name);
  const storageRef = ref(storage, storagePath);

  try {
    await uploadBytes(storageRef, compressedFile);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  } catch (error) {
    throw new Error(error.message || 'Failed to upload project image.');
  }
}

export async function createProjectRecord(projectPayload) {
  try {
    const docRef = await addDoc(collection(db, 'projects'), projectPayload);
    return { id: docRef.id, ...projectPayload };
  } catch (error) {
    throw new Error(error.message || 'Failed to save project.');
  }
}

export async function getAllProjects() {
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch projects.');
  }
}

export async function getProjectById(id) {
  try {
    const docRef = doc(db, 'projects', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Project not found.');
    }
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch project.');
  }
}

export async function updateProject(id, payload) {
  try {
    const docRef = doc(db, 'projects', id);
    await updateDoc(docRef, payload);
    return { id, ...payload };
  } catch (error) {
    throw new Error(error.message || 'Failed to update project.');
  }
}

export async function deleteProject(id) {
  try {
    const docRef = doc(db, 'projects', id);
    await deleteDoc(docRef);
  } catch (error) {
    throw new Error(error.message || 'Failed to delete project.');
  }
}

export async function createProjectWithImage({ userId, title, description, file }) {
  if (!userId) {
    throw new Error('Authenticated user is required to create a project.');
  }

  if (!title?.trim()) {
    throw new Error('Project title is required.');
  }

  if (!description?.trim()) {
    throw new Error('Project description is required.');
  }

  const imageUrl = await uploadProjectImage(userId, file);

  const payload = {
    title: title.trim(),
    description: description.trim(),
    imageUrl,
    userId,
    createdAt: new Date().toISOString(),
  };

  return createProjectRecord(payload);
}