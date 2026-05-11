import { useEffect, useState } from 'react';
import { collection, orderBy, query, where, onSnapshot } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { useAuth } from '../context/AuthContext';
import { useBookmarks } from '../context/BookmarkContext';
import { db } from '../services/firebase';

function ProjectsPage() {
  const { currentUser } = useAuth();
  const { toggleBookmark, isBookmarked } = useBookmarks();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    const projectsQuery = query(
      collection(db, 'projects'),
      where('userId', '==', currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(
      projectsQuery,
      (snapshot) => {
        const fetchedProjects = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        setProjects(fetchedProjects);
        setLoading(false);
      },
      (error) => {
        setError(error.message || 'Failed to load projects');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  const handleDelete = (projectId) => {
    setProjects((previousProjects) =>
      previousProjects.filter((project) => project.id !== projectId)
    );
  };

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-2xl font-semibold">My Projects</h1>

        {loading && (
          <section
            role="status"
            aria-live="polite"
            className="py-12 text-center"
          >
            Loading projects...
          </section>
        )}

        {!loading && error && (
          <section
            role="alert"
            className="py-12 text-center"
          >
            {error}
          </section>
        )}

        {!loading && !error && projects.length === 0 && (
          <section className="py-12 text-center">
            No projects found.
          </section>
        )}

        {!loading && !error && projects.length > 0 && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  project={project}
                  onBookmark={toggleBookmark}
                  onDelete={handleDelete}
                  isBookmarked={isBookmarked(project.id)}
                  isOwner
                />

                <p className="mt-2 text-sm text-gray-500">
                  {project.createdAt?.toDate
                    ? project.createdAt.toDate().toLocaleDateString()
                    : ''}
                </p>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
}

export default ProjectsPage;