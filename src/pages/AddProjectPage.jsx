import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Timestamp } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import FileUpload from '../components/FileUpload';
import { useAuth } from '../context/AuthContext';
import { createProjectWithImage } from '../services/projectService';
import { uploadImageToCloudinary } from '../services/cloudinaryService';
import useProjects from '../hooks/useProjects';

function AddProjectPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { addProject } = useProjects();

  const [formData, setFormData] = useState({ title: '', description: '', url: '', imagePath: '' });
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.title.trim()) {
      validationErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      validationErrors.description = 'Description is required';
    }

    if (formData.url && formData.url.trim()) {
      try {
        new URL(formData.url.trim());
      } catch {
        validationErrors.url = 'Please enter a valid URL';
      }
    }

    if (!imageFile) {
      validationErrors.image = 'Project image is required';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));

    if (errors[name]) {
      setErrors((previousErrors) => ({ ...previousErrors, [name]: '' }));
    }
  };

  const handleFileChange = (selectedFile) => {
    setImageFile(selectedFile);
    if (errors.image) {
      setErrors((previousErrors) => ({ ...previousErrors, image: '' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!currentUser) {
      toast.error('Please sign in to create a project.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      // Upload image to Cloudinary
      toast.loading('Uploading image...');
      const imageUrl = await uploadImageToCloudinary(imageFile);

      // Save project to Firestore with Cloudinary URL
      const projectId = await createProjectWithImage({
        userId: currentUser.uid,
        ownerEmail: currentUser.email,
        title: formData.title.trim(),
        description: formData.description.trim(),
        url: formData.url.trim() || null,
        imageUrl,
      });

      // Add to local state for immediate UI update
      addProject({
        id: projectId,
        userId: currentUser.uid,
        ownerEmail: currentUser.email,
        title: formData.title.trim(),
        description: formData.description.trim(),
        url: formData.url.trim() || null,
        imageUrl,
        createdAt: Timestamp.now(),
      });

      toast.dismiss();
      toast.success('Project created successfully!');

      // Reset form completely
      setFormData({ title: '', description: '', url: '' });
      setImageFile(null);
      setErrors({});

      // Navigate after brief delay to let success toast show
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      toast.dismiss();
      const errorMessage = error.message || 'Unable to create project. Please try again.';
      toast.error(errorMessage);
      setErrors((previousErrors) => ({
        ...previousErrors,
        submit: errorMessage,
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Create New Project
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Share your creative work with the community
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <ProjectForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
          >
            <FileUpload
              file={imageFile}
              onFileChange={handleFileChange}
              onValidationError={(message) => setErrors((previousErrors) => ({ ...previousErrors, image: message }))}
              error={errors.image}
              disabled={submitting}
            />
            <div>
              <label htmlFor="imagePath" className="mb-2 block font-medium text-gray-900 dark:text-white">
                Optional Manual Image Path
              </label>
              <input
                id="imagePath"
                name="imagePath"
                type="text"
                value={formData.imagePath}
                onChange={handleChange}
                placeholder="/uploads/your-image.jpg"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:ring-indigo-900"
                aria-invalid={Boolean(errors.image)}
                aria-describedby={errors.image ? 'image-error' : undefined}
              />
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Optional. If your image already exists in the uploads folder, enter its path starting with <span className="font-mono">/uploads/</span> (e.g., <span className="font-mono">/uploads/my-project.jpg</span>).
              </p>
              {errors.image && (
                <p id="image-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.image}
                </p>
              )}
            </div>
          </ProjectForm>
        </div>
      </main>
    </div>
  );
}

export default AddProjectPage;