import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from './AuthContext';
import {
  addBookmark as addBookmarkDocument,
  removeBookmark as removeBookmarkDocument,
  subscribeToBookmarks,
} from '../services/bookmarkService';

const BookmarkContext = createContext(null);

function BookmarkProvider({ children }) {
  const { currentUser, loading: authLoading } = useAuth();
  const [bookmarkDocIdsByProjectId, setBookmarkDocIdsByProjectId] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) {
      return undefined;
    }

    if (!currentUser) {
      setBookmarkDocIdsByProjectId({});
      setLoading(false);
      return undefined;
    }

    setLoading(true);

    const unsubscribe = subscribeToBookmarks(
      currentUser.uid,
      (snapshot) => {
        const documentMap = {};

        snapshot.docs.forEach((doc) => {
          const projectId = doc.data()?.projectId;
          if (projectId) {
            documentMap[projectId] = doc.id;
          }
        });

        setBookmarkDocIdsByProjectId(documentMap);
        setLoading(false);
      },
      (error) => {
        console.error('Bookmark snapshot error:', error);
        setBookmarkDocIdsByProjectId({});
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [authLoading, currentUser]);

  const addBookmark = useCallback(
    async (projectId) => {
      if (!currentUser) {
        return;
      }

      if (bookmarkDocIdsByProjectId[projectId]) {
        return;
      }

      try {
        const documentId = await addBookmarkDocument(currentUser.uid, projectId);
        setBookmarkDocIdsByProjectId((prev) => ({
          ...prev,
          [projectId]: documentId,
        }));
      } catch (error) {
        console.error('Failed to add bookmark:', error);
      }
    },
    [currentUser, bookmarkDocIdsByProjectId]
  );

  const removeBookmark = useCallback(
    async (projectId) => {
      const documentId = bookmarkDocIdsByProjectId[projectId];
      if (!currentUser || !documentId) {
        return;
      }

      try {
        await removeBookmarkDocument(documentId);
        setBookmarkDocIdsByProjectId((prev) => {
          const next = { ...prev };
          delete next[projectId];
          return next;
        });
      } catch (error) {
        console.error('Failed to remove bookmark:', error);
      }
    },
    [currentUser, bookmarkDocIdsByProjectId]
  );

  const toggleBookmark = useCallback(
    (projectId) => {
      if (bookmarkDocIdsByProjectId[projectId]) {
        removeBookmark(projectId);
      } else {
        addBookmark(projectId);
      }
    },
    [bookmarkDocIdsByProjectId, addBookmark, removeBookmark]
  );

  const isBookmarked = useCallback(
    (projectId) => Boolean(bookmarkDocIdsByProjectId[projectId]),
    [bookmarkDocIdsByProjectId]
  );

  const bookmarkedIds = useMemo(
    () => Object.keys(bookmarkDocIdsByProjectId),
    [bookmarkDocIdsByProjectId]
  );

  const value = useMemo(
    () => ({
      bookmarkedIds,
      loading,
      addBookmark,
      removeBookmark,
      toggleBookmark,
      isBookmarked,
    }),
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
