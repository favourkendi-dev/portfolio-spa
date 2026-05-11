import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

const FIRESTORE_ERROR_MESSAGES = {
  'permission-denied': 'Unable to access project data. Please refresh and try again or sign in with the authorized account.',
  'unauthenticated': 'Your session has expired. Please sign in again.',
};

function getFriendlyFirestoreError(error, fallback) {
  const message = error?.message?.toString() || '';
  const code = error?.code?.toString()?.toLowerCase?.() || '';

  if (code && FIRESTORE_ERROR_MESSAGES[code]) {
    return FIRESTORE_ERROR_MESSAGES[code];
  }

  if (/missing or insufficient permissions/i.test(message)) {
    return FIRESTORE_ERROR_MESSAGES['permission-denied'];
  }

  if (/auth\/unauthenticated|unauthenticated/i.test(message)) {
    return FIRESTORE_ERROR_MESSAGES['unauthenticated'];
  }

  return message || fallback;
}

function wrapFirestoreError(error, fallback) {
  return new Error(getFriendlyFirestoreError(error, fallback));
}

export async function createProjectRecord(projectPayload) {
  try {
    // Verify payload has required fields
    if (!projectPayload.title || !projectPayload.description || !projectPayload.image || !projectPayload.userId) {
      throw new Error('Invalid project data. Please ensure all required fields are filled.');
    }
    const docRef = await addDoc(collection(db, 'projects'), projectPayload);
    return { id: docRef.id, ...projectPayload };
  } catch (error) {
    throw wrapFirestoreError(error, 'Unable to save project. Please try again.');
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
    throw wrapFirestoreError(error, 'Failed to fetch projects.');
  }
}

export async function getProjectById(id) {
  if (!id || typeof id !== 'string') {
    throw new Error('Invalid project identifier.');
  }

  try {
    const docRef = doc(db, 'projects', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    throw new Error('Project not found.');
  } catch (error) {
    if (error.message === 'Project not found.') {
      throw error;
    }
    throw wrapFirestoreError(error, 'Failed to fetch project.');
  }
}

export async function updateProject(id, payload) {
  try {
    const docRef = doc(db, 'projects', id);
    await updateDoc(docRef, payload);
    return { id, ...payload };
  } catch (error) {
    throw wrapFirestoreError(error, 'Failed to update project.');
  }
}

export async function deleteProject(id) {
  try {
    const docRef = doc(db, 'projects', id);
    await deleteDoc(docRef);
  } catch (error) {
    throw wrapFirestoreError(error, 'Failed to delete project.');
  }
}

export async function createProjectWithImage({ userId, title, description, url, imageUrl }) {
  // Validate authentication
  if (!userId) {
    throw new Error('Your session has expired. Please sign in to create a project.');
  }

  // Validate title
  if (!title?.trim()) {
    throw new Error('Project title is required.');
  }

  if (title.trim().length > 200) {
    throw new Error('Project title must be 200 characters or less.');
  }

  // Validate description
  if (!description?.trim()) {
    throw new Error('Project description is required.');
  }

  if (description.trim().length > 2000) {
    throw new Error('Project description must be 2000 characters or less.');
  }

  // Validate image URL (from Cloudinary upload)
  if (!imageUrl || !imageUrl.trim()) {
    throw new Error('Project image is required.');
  }

  try {
    new URL(imageUrl.trim());
  } catch {
    throw new Error('Invalid image URL.');
  }

  // Validate URL if provided
  if (url && url.trim()) {
    try {
      new URL(url.trim());
    } catch {
      throw new Error('Invalid project URL. Please provide a valid HTTP or HTTPS URL.');
    }
  }

  const payload = {
    title: title.trim(),
    description: description.trim(),
    image: imageUrl.trim(),
    userId,
    createdAt: new Date().toISOString(),
  };

  if (url && url.trim()) {
    payload.url = url.trim();
  }

  try {
    return await createProjectRecord(payload);
  } catch (error) {
    // Handle Firestore permission errors
    if (error.code === 'permission-denied' || error.message?.includes('permission')) {
      throw new Error('Unable to create project. Your account may not have permission. Please try again or contact support.');
    }
    // Handle auth errors
    if (error.code === 'unauthenticated' || error.message?.includes('unauthenticated')) {
      throw new Error('Your session has expired. Please sign in again.');
    }
    // Handle generic failures
    if (error.message && !error.message.includes('Invalid') && !error.message.includes('required')) {
      throw new Error('Unable to create project. Please try again.');
    }
    throw error;
  }
}