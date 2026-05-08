import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const BookmarkContext = createContext(null);
const STORAGE_KEY = 'portfolio_bookmarks';

function BookmarkProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadBookmarks = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (!isMounted) return;

        if (stored) {
          const parsed = JSON.parse(stored);
          setBookmarkedIds(Array.isArray(parsed) ? parsed : []);
        } else {
          setBookmarkedIds([]);
        }
      } catch {
        setBookmarkedIds([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadBookmarks();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarkedIds));
      } catch {
        // Ignore storage errors in production.
      }
    }
  }, [bookmarkedIds, loading]);

  const addBookmark = useCallback((projectId) => {
    setBookmarkedIds((prev) => (prev.includes(projectId) ? prev : [...prev, projectId]));
  }, []);

  const removeBookmark = useCallback((projectId) => {
    setBookmarkedIds((prev) => prev.filter((id) => id !== projectId));
  }, []);

  const toggleBookmark = useCallback((projectId) => {
    setBookmarkedIds((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  }, []);

  const isBookmarked = useCallback(
    (projectId) => bookmarkedIds.includes(projectId),
    [bookmarkedIds]
  );

  const value = useMemo(
    () => ({ bookmarkedIds, loading, addBookmark, removeBookmark, toggleBookmark, isBookmarked }),
    [bookmarkedIds, loading, addBookmark, removeBookmark, toggleBookmark, isBookmarked]
  );

  return <BookmarkContext.Provider value={value}>{!loading && children}</BookmarkContext.Provider>;
}

function useBookmarks() {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error('useBookmarks must be used within BookmarkProvider');
  }

  return context;
}

BookmarkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BookmarkProvider, useBookmarks };
