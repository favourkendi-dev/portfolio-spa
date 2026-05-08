import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext(null);

const STORAGE_KEY = 'portfolio_theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

function getInitialTheme() {
  try {
    const storedTheme = localStorage.getItem(STORAGE_KEY);

    if (storedTheme === LIGHT_THEME || storedTheme === DARK_THEME) {
      return storedTheme;
    }

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    return prefersDark ? DARK_THEME : LIGHT_THEME;
  } catch (error) {
    console.error('Theme initialization error:', error);
    return LIGHT_THEME;
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.classList.toggle('dark', theme === DARK_THEME);
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      applyTheme(theme);
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      console.error('Theme persistence error:', error);
    } finally {
      setLoading(false);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) =>
      previousTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    );
  }, []);

  const setLightMode = useCallback(() => {
    setTheme(LIGHT_THEME);
  }, []);

  const setDarkMode = useCallback(() => {
    setTheme(DARK_THEME);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      loading,
      isDarkMode: theme === DARK_THEME,
      toggleTheme,
      setLightMode,
      setDarkMode,
    }),
    [theme, loading, toggleTheme, setLightMode, setDarkMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {!loading && children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };