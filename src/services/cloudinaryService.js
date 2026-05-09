/**
 * Cloudinary Upload Service
 * Handles direct frontend uploads to Cloudinary
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

if (!CLOUD_NAME || !UPLOAD_PRESET) {
  throw new Error('Cloudinary configuration missing. Please check environment variables.');
}

/**
 * Uploads an image file directly to Cloudinary
 * @param {File} file - The image file to upload
 * @returns {Promise<string>} - The secure URL of the uploaded image
 */
export async function uploadImageToCloudinary(file) {
  // Validate file
  if (!file) {
    throw new Error('No file selected.');
  }

  if (!(file instanceof File)) {
    throw new Error('Invalid file selected.');
  }

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Only JPG, PNG, and WEBP images are supported.');
  }

  // Validate file size (5MB strict limit)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    throw new Error(`Image size exceeds 5MB limit. Your image is ${(file.size / 1024 / 1024).toFixed(1)}MB.`);
  }

  // Prepare form data
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Upload failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.secure_url) {
      throw new Error('Upload succeeded but no image URL received.');
    }

    return data.secure_url;
  } catch (error) {
    // Handle network errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your connection and try again.');
    }

    // Handle Cloudinary-specific errors
    if (error.message.includes('Upload failed')) {
      throw new Error('Image upload failed. Please try again.');
    }

    // Re-throw validation errors
    if (error.message.includes('Only JPG') || error.message.includes('5MB')) {
      throw error;
    }

    // Generic error
    throw new Error('Image upload failed. Please try again.');
  }
}