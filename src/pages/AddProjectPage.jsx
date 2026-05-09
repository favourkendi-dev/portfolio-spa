import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import FileUpload from '../components/FileUpload';
import { useAuth } from '../context/AuthContext';
import { createProjectWithImage } from '../services/projectService';

function AddProjectPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [formData, setFormData] = useState({ title: '', description: '', url: '' });
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

    if (imageFile && !/^image\/(jpeg|png|webp)$/.test(imageFile.type)) {
      validationErrors.image = 'Allowed file types: JPG, PNG, WEBP';
    }

    if (imageFile && imageFile.size > 10 * 1024 * 1024) {
      validationErrors.image = 'Image must be 10MB or smaller';
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

  const handleValidationError = (message) => {
    setErrors((previousErrors) => ({ ...previousErrors, image: message }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!currentUser) {
      toast.error('You must be signed in to create a project.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      await createProjectWithImage({
        userId: currentUser.uid,
        title: formData.title.trim(),
        description: formData.description.trim(),
        url: formData.url.trim() || null,
        file: imageFile,
      });

      toast.success('Project created successfully');
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'Failed to create project');
      setErrors((previousErrors) => ({
        ...previousErrors,
        submit: error.message || 'Failed to create project',
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
              onValidationError={handleValidationError}
              error={errors.image}
              disabled={submitting}
            />
          </ProjectForm>
        </div>
      </main>
    </div>
  );
}

export default AddProjectPage;