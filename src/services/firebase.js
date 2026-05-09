import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const rawFirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const normalizeValue = (value) => {
  if (typeof value !== 'string') {
    return '';
  }
  return value.trim();
};

const firebaseConfig = Object.fromEntries(
  Object.entries(rawFirebaseConfig).map(([key, value]) => [
    key,
    normalizeValue(value),
  ])
);

const invalidVars = Object.entries(firebaseConfig)
  .filter(([, value]) => !value || value === 'undefined' || value === 'null')
  .map(([key]) => key);

const isFirebaseConfigured = invalidVars.length === 0;

if (!isFirebaseConfigured) {
  throw new Error('Application configuration error. Please contact support.');
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set auth persistence to local to prevent token refresh issues
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.warn('Failed to set auth persistence:', error);
});

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export { app, auth, googleProvider, db, isFirebaseConfigured, firebaseConfig };