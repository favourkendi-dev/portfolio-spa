import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiBookmark } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';

function ProjectCard({
  project,
  onBookmark,
  onDelete,
  isBookmarked,
  isOwner,
}) {
  const {
    id,
    title,
    description,
    imageUrl,
    createdAt,
    userId,
  } = project;

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof onBookmark === 'function') {
      onBookmark(id);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof onDelete === 'function' && window.confirm('Are you sure you want to delete this project?')) {
      onDelete(id);
    }
  };

  return (
    <Link
      to={`/projects/${id}`}
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-indigo-200"
      aria-label={`View ${title} project details`}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-10" />

        <button
          type="button"
          onClick={handleBookmark}
          className="absolute top-3 right-3 rounded-full bg-white bg-opacity-90 p-2 shadow-md transition-all duration-200 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          aria-pressed={isBookmarked}
        >
          {isBookmarked ? (
            <FaBookmark className="h-4 w-4 text-indigo-600" />
          ) : (
            <FiBookmark className="h-4 w-4 text-gray-600" />
          )}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
          {title}
        </h2>

        <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-600">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
            <div className="text-xs">
              <p className="font-medium text-gray-900">
                {userId || 'Creator'}
              </p>
              <p className="text-gray-500">{formattedDate}</p>
            </div>
          </div>

          {isOwner && (
            <button
              type="button"
              onClick={handleDelete}
              className="rounded px-2 py-1 text-xs font-medium text-red-600 transition-colors duration-200 hover:bg-red-50"
              aria-label={`Delete ${title} project`}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    userId: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  isBookmarked: PropTypes.bool,
  isOwner: PropTypes.bool,
};

ProjectCard.defaultProps = {
  onDelete: null,
  isBookmarked: false,
  isOwner: false,
};

export default ProjectCard;