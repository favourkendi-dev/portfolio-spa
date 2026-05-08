import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { useBookmarks } from '../context/BookmarkContext';
import { getProjectById, deleteProject } from '../services/projectService';

function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getProjectById(id);
        setProject(data);
      } catch (fetchError) {
        setError(fetchError.message || 'Failed to load project');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProject();
    }
  }, [id]);

  const handleDelete = async () => {
    if (!project?.id) return;

    try {
      await deleteProject(project.id);
      toast.success('Project deleted successfully');
      navigate('/');
    } catch (deleteError) {
      toast.error(deleteError.message || 'Failed to delete project');
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

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-12">
          <div className="w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg dark:border-red-800 dark:bg-slate-800">
            <h1 className="text-3xl font-semibold text-red-700 dark:text-red-400">
              Project Not Found
            </h1>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              {error}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Return home
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-12">
          <div className="w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg dark:border-red-800 dark:bg-slate-800">
            <h1 className="text-3xl font-semibold text-red-700 dark:text-red-400">
              Project Not Found
            </h1>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              The project you're looking for doesn't exist.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Return home
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const formattedDate = new Date(project.createdAt).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const isOwner = currentUser?.uid === project.userId;
  const bookmarked = isBookmarked(project.id);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleBookmark(project.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                bookmarked
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {bookmarked ? (
                <>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Bookmarked
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Bookmark
                </>
              )}
            </button>
            {isOwner && (
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </button>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
          <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Created on {formattedDate}
              </p>
            </div>
            <div className="prose prose-slate max-w-none dark:prose-invert">
              <p className="text-slate-700 dark:text-slate-300">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetailsPage;