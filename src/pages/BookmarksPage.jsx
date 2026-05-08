import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import ProjectList from '../components/ProjectList';
import SearchBar, { useSearchFilter } from '../components/SearchBar';
import useProjects from '../hooks/useProjects';
import { useBookmarks } from '../context/BookmarkContext';

function BookmarksPage() {
  const { projects, loading, error, deleteProject } = useProjects();
  const { currentUser } = useAuth();
  const { bookmarkedIds, toggleBookmark } = useBookmarks();
  const { query, setQuery, filteredData } = useSearchFilter(projects, [
    'title',
    'description',
  ]);

  const bookmarkedProjects = filteredData.filter((project) =>
    bookmarkedIds.includes(project.id)
  );

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            My Bookmarks
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Your saved projects
          </p>
        </div>

        <div className="mb-8">
          <SearchBar
            query={query}
            setQuery={setQuery}
            placeholder="Search your bookmarks"
          />
        </div>

        {error && (
          <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <p className="text-sm text-red-800 dark:text-red-400">
              {error}
            </p>
          </div>
        )}

        <ProjectList
          projects={bookmarkedProjects}
          loading={loading}
          onBookmark={toggleBookmark}
          onDelete={handleDelete}
          currentUserId={currentUser?.uid}
          bookmarkedIds={bookmarkedIds}
        />
      </main>
    </div>
  );
}

export default BookmarksPage;