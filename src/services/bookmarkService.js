import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';

export function subscribeToBookmarks(userId, onNext, onError) {
  const bookmarksQuery = query(
    collection(db, 'bookmarks'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  return onSnapshot(bookmarksQuery, onNext, onError);
}

export async function addBookmark(userId, projectId) {
  const bookmarkRef = await addDoc(collection(db, 'bookmarks'), {
    userId,
    projectId,
    createdAt: Timestamp.now(),
  });
  return bookmarkRef.id;
}

export async function removeBookmark(bookmarkDocId) {
  await deleteDoc(doc(db, 'bookmarks', bookmarkDocId));
}
