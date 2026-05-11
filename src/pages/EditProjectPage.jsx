import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import FileUpload from '../components/FileUpload';
import { useAuth } from '../context/AuthContext';
import { getProjectById, updateProject } from '../services/projectService';
import { uploadImageToCloudinary } from '../services/cloudinaryService';

function EditProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [formData, setFormData] = useState({ title: '', description: '', url: '', imagePath: '' });
  const [imageFile, setImageFile] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const project = await getProjectById(id);
        if (project.userId !== currentUser?.uid) {
          toast.error('You do not have permission to edit this project');
          navigate('/added-projects');
          return;
        }
        setFormData({
          title: project.title || '',
          description: project.description || '',
          url: project.url || '',
          imagePath: '',
        });
        setExistingImageUrl(project.image || project.imageUrl || '');
      } catch (error) {
        toast.error('Failed to load project');
        navigate('/added-projects');
      } finally {
        setLoading(false);
      }
    };

    if (id && currentUser) {
      loadProject();
    }
  }, [id, currentUser, navigate]);

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

    if (!imageFile && !existingImageUrl) {
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
      toast.error('Please sign in to edit a project.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      let imageUrl = existingImageUrl;

      if (imageFile) {
        // Upload new image to Cloudinary
        toast.loading('Uploading image...');
        imageUrl = await uploadImageToCloudinary(imageFile);
      }

      // Update project
      const updatePayload = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        image: imageUrl,
        updatedAt: new Date().toISOString(), // Keep as string for now, but will change to Timestamp
      };

      if (formData.url.trim()) {
        updatePayload.url = formData.url.trim();
      }

      await updateProject(id, updatePayload);

      toast.dismiss();
      toast.success('Project updated successfully!');

      // Navigate after brief delay
      setTimeout(() => navigate('/added-projects'), 1500);
    } catch (error) {
      toast.dismiss();
      const errorMessage = error.message || 'Unable to update project. Please try again.';
      toast.error(errorMessage);
      setErrors((previousErrors) => ({
        ...previousErrors,
        submit: errorMessage,
      }));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
            <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">
              Loading project...
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Edit Project
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Update your project details
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
              existingImageUrl={existingImageUrl}
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

export default EditProjectPage;