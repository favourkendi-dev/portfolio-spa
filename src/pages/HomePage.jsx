import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FiBookmark, FiArrowRight, FiFilter } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import SearchBar, { useSearchFilter } from '../components/SearchBar';
import DashboardClock from '../components/DashboardClock';
import useProjects from '../hooks/useProjects';
import { useBookmarks } from '../context/BookmarkContext';
import { useAuth } from '../context/AuthContext';

function LoadingSkeletons() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-slate-700 dark:to-slate-600" />
          <div className="space-y-4 p-4">
            <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-slate-700" />
            <div className="h-3 w-full rounded bg-gray-100 dark:bg-slate-700" />
            <div className="h-3 w-4/5 rounded bg-gray-100 dark:bg-slate-700" />
            <div className="flex gap-2">
              <div className="h-3 w-1/4 rounded-full bg-gray-100 dark:bg-slate-700" />
              <div className="h-3 w-1/4 rounded-full bg-gray-100 dark:bg-slate-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-16 px-6 dark:border-slate-600 dark:bg-slate-800">
      <div className="text-center">
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">No projects found</p>
        <p className="mt-2 text-gray-600 dark:text-slate-300">
          Try adjusting your search or filters to find what you&apos;re looking for
        </p>
        <Link
          to="/projects/add"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2 font-medium text-white transition-all duration-200 hover:bg-indigo-700 dark:hover:bg-indigo-700"
        >
          Create Your First Project
          <FiArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  isBookmarked,
  onBookmark,
  onDelete,
  isOwner,
}) {
  const formattedDate = new Date(project.createdAt).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  );

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    onBookmark(project.id);
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this project?')) {
      onDelete(project.id);
    }
  };

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-indigo-200 dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-700 dark:to-slate-600">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-10" />
        <button
          type="button"
          onClick={handleBookmarkClick}
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-sm transition-all duration-200 hover:scale-110 dark:bg-slate-700 dark:text-white"
          aria-label={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
        >
          {isBookmarked ? (
            <FaBookmark className="h-4 w-4 text-indigo-600" />
          ) : (
            <FiBookmark className="h-4 w-4 text-gray-600 dark:text-slate-300" />
          )}
        </button>
        {isOwner && (
          <button
            type="button"
            onClick={handleDeleteClick}
            className="absolute right-3 bottom-3 rounded-full bg-red-600 p-2 text-white shadow-sm transition-all duration-200 hover:bg-red-700 hover:scale-110"
            aria-label="Delete project"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-slate-300 line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-slate-400">
            {formattedDate}
          </span>
          <div className="flex items-center gap-1">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="text-xs text-gray-500 dark:text-slate-400">
              Creator
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  onBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isOwner: PropTypes.bool.isRequired,
};

function HomePage() {
  const { currentUser } = useAuth();
  const { projects, loading, error, deleteProject } = useProjects();
  const { bookmarkedIds, toggleBookmark } = useBookmarks();
  const { query, setQuery, filteredData } = useSearchFilter(projects, [
    'title',
    'description',
  ]);

  const categories = useMemo(() => {
    const cats = new Set();
    projects.forEach((project) => {
      if (project.category) {
        cats.add(project.category);
      }
    });
    return ['all', ...Array.from(cats)];
  }, [projects]);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredByCategory = useMemo(() => {
    if (selectedCategory === 'all') {
      return filteredData;
    }
    return filteredData.filter((p) => p.category === selectedCategory);
  }, [filteredData, selectedCategory]);

  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId);
      toast.success('Project deleted successfully');
    } catch (deleteError) {
      toast.error(deleteError.message || 'Failed to delete project');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {currentUser ? (
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Welcome back!
                </h1>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Discover amazing projects from the community
                </p>
              </div>
              <DashboardClock />
            </div>
          </div>
        ) : (
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 p-8 text-white shadow-lg">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold leading-tight">
                Showcase Your Creative Work
              </h1>
              <p className="mt-4 text-xl font-light text-indigo-100">
                Join our community of creators and share your projects with the world
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-lg border border-white px-8 py-3 font-semibold text-white transition hover:bg-indigo-100 hover:text-indigo-600"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar query={query} setQuery={setQuery} />
          <div className="flex items-center gap-2">
            <FiFilter className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:ring-indigo-900"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <p className="text-sm text-red-800 dark:text-red-400">
              {error}
            </p>
          </div>
        )}

        {loading ? (
          <LoadingSkeletons />
        ) : filteredByCategory.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredByCategory.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isBookmarked={bookmarkedIds.includes(project.id)}
                onBookmark={toggleBookmark}
                onDelete={handleDelete}
                isOwner={currentUser?.uid === project.userId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;