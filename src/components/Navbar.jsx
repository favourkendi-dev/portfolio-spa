import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FiMenu, FiX, FiLogOut, FiPlus, FiBookmark, FiMoon, FiSun } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      closeMenu();
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getInitials = () => {
    if (currentUser?.email) {
      return currentUser.email.charAt(0).toUpperCase();
    }
    return '?';
  };

  const authenticatedLinks = [
    { path: '/', label: 'Home', icon: null },
    { path: '/projects/add', label: 'Add Project', icon: FiPlus },
    { path: '/bookmarks', label: 'Bookmarks', icon: FiBookmark },
  ];

  const unauthenticatedLinks = [
    { path: '/', label: 'Home' },
    { path: '/login', label: 'Sign In' },
    { path: '/register', label: 'Sign Up' },
  ];

  const navigationLinks = currentUser ? authenticatedLinks : unauthenticatedLinks;

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-lg border-b border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-700">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-2xl font-bold transition-colors duration-200 hover:text-indigo-600"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold">
            P
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 md:hidden dark:hover:bg-slate-800"
        >
          {isMenuOpen ? (
            <FiX className="h-6 w-6 text-gray-700 dark:text-slate-300" />
          ) : (
            <FiMenu className="h-6 w-6 text-gray-700 dark:text-slate-300" />
          )}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive: routeIsActive }) => `
                  flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
                  ${isActive(link.path) || routeIsActive
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-slate-800 dark:text-indigo-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }
                `}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {link.label}
              </NavLink>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-slate-800"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <FiSun className="h-5 w-5 text-yellow-500" />
            ) : (
              <FiMoon className="h-5 w-5 text-slate-600" />
            )}
          </button>

          {currentUser ? (
            <>
              <div className="flex items-center gap-3 border-l border-gray-200 pl-3 dark:border-slate-700">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-sm font-semibold text-white">
                  {getInitials()}
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-gray-900 dark:text-slate-100">
                    {currentUser.email?.split('@')[0]}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Creator</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-100 dark:bg-slate-800 dark:text-red-400 dark:hover:bg-slate-700"
                aria-label="Logout"
              >
                <FiLogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:from-indigo-700 hover:to-purple-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-white bg-opacity-95 backdrop-blur-sm md:hidden dark:border-slate-700 dark:bg-slate-900"
        >
          <div className="space-y-1 px-4 py-4">
            {navigationLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive: routeIsActive }) => `
                    flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200
                    ${isActive(link.path) || routeIsActive
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-slate-800 dark:text-indigo-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    }
                  `}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  {link.label}
                </NavLink>
              );
            })}

            <button
              type="button"
              onClick={toggleTheme}
              className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <>
                  <FiSun className="h-5 w-5 text-yellow-500" />
                  Light Mode
                </>
              ) : (
                <>
                  <FiMoon className="h-5 w-5 text-slate-600" />
                  Dark Mode
                </>
              )}
            </button>
          </div>

          {currentUser ? (
            <div className="border-t border-gray-200 px-4 py-4 space-y-3 dark:border-slate-700">
              <div className="flex items-center gap-3 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-base font-semibold text-white">
                  {getInitials()}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-slate-100">
                    {currentUser.email?.split('@')[0]}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">{currentUser.email}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-3 font-medium text-red-600 transition-all duration-200 hover:bg-red-100 dark:bg-slate-800 dark:text-red-400 dark:hover:bg-slate-700"
              >
                <FiLogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          ) : (
            <div className="border-t border-gray-200 px-4 py-4 space-y-3 dark:border-slate-700">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block w-full rounded-lg px-4 py-3 text-center font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 border border-gray-200 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="block w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center font-medium text-white transition-all duration-200 hover:shadow-lg hover:from-indigo-700 hover:to-purple-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
