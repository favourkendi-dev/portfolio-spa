/**
 * Cloudinary Upload Service
 * Handles direct frontend image uploads to Cloudinary
 * Returns secure_url for Firestore storage
 */

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
  throw new Error(
    'Cloudinary configuration missing. ' +
    'Please set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in .env'
  );
}

const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

/**
 * Upload image file directly to Cloudinary
 * @param {File} file - Image file to upload
 * @returns {Promise<string>} - Secure URL from Cloudinary
 * @throws {Error} - User-safe error messages
 */
export async function uploadImageToCloudinary(file) {
  if (!file) {
    throw new Error('No image file selected.');
  }

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Image must be JPG, PNG, or WEBP format.');
  }

  // Validate file size (5MB strict limit)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error(
      `Image size exceeds 5MB limit. Your image is ${(file.size / 1024 / 1024).toFixed(1)}MB.`
    );
  }

  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'portfolio'); // Organize uploads in portfolio folder

    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error?.message || 'Image upload failed';
      throw new Error(errorMessage);
    }

    const data = await response.json();

    // Validate Cloudinary response
    if (!data.secure_url) {
      throw new Error('Image upload failed. Invalid response from server.');
    }

    return data.secure_url;
  } catch (error) {
    // Handle network errors
    if (error instanceof TypeError) {
      throw new Error('Network error during image upload. Please check your connection and try again.');
    }

    // Re-throw user-safe errors
    if (error.message && !error.message.includes('JPG') && !error.message.includes('5MB')) {
      throw new Error('Image upload failed. Please try again.');
    }

    throw error;
  }
}

export default {
  uploadImageToCloudinary,
};
