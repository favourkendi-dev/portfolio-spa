import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '../services/firebase';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [cooldownUntil, setCooldownUntil] = useState(null);

  const register = useCallback(async (email, password) => {
    if (cooldownUntil && Date.now() < cooldownUntil) {
      throw new Error('Too many attempts. Please wait before trying again.');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setFailedAttempts(0);
      setCooldownUntil(null);
      return userCredential.user;
    } catch (error) {
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 4) {
        setCooldownUntil(Date.now() + 30000); // 30 seconds cooldown
      }
      throw new Error(error.message || 'Registration failed');
    }
  }, [failedAttempts, cooldownUntil]);

  const login = useCallback(async (email, password) => {
    if (cooldownUntil && Date.now() < cooldownUntil) {
      throw new Error('Too many attempts. Please wait before trying again.');
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setFailedAttempts(0);
      setCooldownUntil(null);
      return userCredential.user;
    } catch (error) {
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 4) {
        setCooldownUntil(Date.now() + 30000); // 30 seconds cooldown
      }
      throw new Error(error.message || 'Login failed');
    }
  }, [failedAttempts, cooldownUntil]);

  const loginWithGoogle = useCallback(async () => {
    if (cooldownUntil && Date.now() < cooldownUntil) {
      throw new Error('Too many attempts. Please wait before trying again.');
    }

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setFailedAttempts(0);
      setCooldownUntil(null);
      return userCredential.user;
    } catch (error) {
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 4) {
        setCooldownUntil(Date.now() + 30000); // 30 seconds cooldown
      }
      throw new Error(error.message || 'Google sign-in failed');
    }
  }, [failedAttempts, cooldownUntil]);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(error.message || 'Logout failed');
    }
  }, []);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setAuthError(
        'Firebase configuration is missing. Please provide all required environment variables.'
      );
      setLoading(false);
      return undefined;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      },
      () => {
        setCurrentUser(null);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      currentUser,
      loading,
      register,
      login,
      logout,
      loginWithGoogle,
    }),
    [currentUser, loading, register, login, logout, loginWithGoogle]
  );

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-900">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">
            Loading...
          </p>
        </div>
      </main>
    );
  }

  if (authError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-900">
        <div className="w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg dark:border-red-800 dark:bg-slate-800">
          <h1 className="text-3xl font-semibold text-red-700 dark:text-red-400">
            Configuration Error
          </h1>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            {authError}
          </p>
        </div>
      </main>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };