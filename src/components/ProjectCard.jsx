import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiBookmark, FiEdit } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';

function ProjectCard({
  project,
  onBookmark,
  onDelete,
  isBookmarked = false,
  isOwner = false,
}) {
  const {
    id,
    title,
    description,
    image,
    imageUrl,
    createdAt,
    userId,
    ownerEmail,
    category,
  } = project;

  const rawDate = createdAt && typeof createdAt === 'object' && typeof createdAt.toDate === 'function'
    ? createdAt.toDate()
    : createdAt && !isNaN(new Date(createdAt).getTime())
    ? new Date(createdAt)
    : new Date();

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(rawDate);

  const projectUrl = project.url || project.liveUrl || project.externalUrl || project.projectUrl;
  const badge = category || 'Showcase';
  const creator = ownerEmail || userId || 'Portfolio Showcase';
  const ariaLabel = projectUrl ? `Open ${title}` : `View details for ${title}`;

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
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
      {projectUrl ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="absolute inset-0 z-10"
        />
      ) : (
        <Link
          to={`/projects/${id}`}
          aria-label={ariaLabel}
          className="absolute inset-0 z-10"
        />
      )}

      <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={image || imageUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <span className="absolute left-4 top-4 z-20 inline-flex items-center rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-xl shadow-slate-950/20">
          {badge}
        </span>

        <button
          type="button"
          onClick={handleBookmark}
          aria-label={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
          aria-pressed={isBookmarked}
          title={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition duration-200 hover:scale-105 hover:bg-white dark:bg-slate-900 dark:text-slate-100"
          style={{ pointerEvents: 'auto' }}
        >
          {isBookmarked ? (
            <FaBookmark className="h-5 w-5 text-indigo-600" />
          ) : (
            <FiBookmark className="h-5 w-5" />
          )}
        </button>

        {isOwner && (
          <div className="absolute right-4 bottom-4 z-20 flex gap-2">
            <Link
              to={`/projects/${id}/edit`}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Edit ${title}`}
              className="inline-flex rounded-full bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition duration-200 hover:bg-indigo-700"
            >
              <FiEdit className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={handleDelete}
              aria-label={`Delete ${title}`}
              className="inline-flex rounded-full bg-red-600 px-3 py-2 text-xs font-semibold text-white transition duration-200 hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4 px-5 py-6">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Premium showcase
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-indigo-600 dark:text-white">
            {title}
          </h2>
          <p className="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
              {creator}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {formattedDate}
            </p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {badge}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
      PropTypes.object,
    ]).isRequired,
    userId: PropTypes.string,
    ownerEmail: PropTypes.string,
    category: PropTypes.string,
    url: PropTypes.string,
    liveUrl: PropTypes.string,
    externalUrl: PropTypes.string,
    projectUrl: PropTypes.string,
  }).isRequired,
  onBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  isBookmarked: PropTypes.bool,
  isOwner: PropTypes.bool,
};

export default ProjectCard;
