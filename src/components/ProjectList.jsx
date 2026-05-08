import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

function ProjectList({ projects, onBookmark, onDelete, bookmarkedIds, currentUser }) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="region" aria-label="Projects grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onBookmark={onBookmark}
          onDelete={onDelete}
          isBookmarked={bookmarkedIds?.includes(project.id)}
          isOwner={currentUser?.uid === project.userId}
        />
      ))}
    </section>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  bookmarkedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentUser: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

export default ProjectList;
