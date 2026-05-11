import { lazy, Suspense } from 'react';
import {
createBrowserRouter,
isRouteErrorResponse,
Link,
useRouteError,
Navigate,
Outlet,
} from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const AddProjectPage = lazy(() => import('./pages/AddProjectPage'));
const BookmarksPage = lazy(() => import('./pages/BookmarksPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage'));
const EditProjectPage = lazy(() => import('./pages/EditProjectPage'));

const baseUrl = import.meta.env.BASE_URL || '/';
const basename = baseUrl !== '/' ? baseUrl.replace(/\/$/, '') : '/';

function LoadingFallback() {
return (
<main role="status" aria-live="polite" className="flex min-h-screen items-center justify-center bg-slate-50 px-4" >
<p className="text-base font-medium text-slate-700">Loading...</p>
</main>
);
}

function ErrorPage() {
const error = useRouteError();
const message = isRouteErrorResponse(error)
? error.statusText || 'Route failed to load'
: error?.message || 'An unexpected error occurred';

return (
<main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
<div className="w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg">
<h1 className="text-3xl font-semibold text-red-700">Something went wrong</h1>
<p className="mt-4 text-sm text-slate-600">{message}</p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<Link to="/" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700" >
Return home
</Link>
<button
type="button"
onClick={() => window.location.reload()}
className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
>
Reload page
</button>
</div>
</div>
</main>
);
}

function HomePageWrapper() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <LoadingFallback />;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <HomePage />;
}

const router = createBrowserRouter([
{
path: '/',
element: <Suspense fallback={<LoadingFallback />}><Outlet /></Suspense>,
errorElement: <ErrorPage />,
children: [
{
index: true,
element: <HomePageWrapper />,
},
{
path: 'login',
element: <LoginPage />,
},
{
path: 'register',
element: <RegisterPage />,
},
{
path: 'projects/:id',
element: <ProjectDetailsPage />,
},
{
path: 'projects/:id/edit',
element: <EditProjectPage />,
},
{
element: <ProtectedRoute />,
children: [
{
path: 'projects/add',
element: <AddProjectPage />,
},
{
path: 'added-projects',
element: <ProjectPage />,
},
{
path: 'bookmarks',
element: <BookmarksPage />,
},
],
},
],
},
],
{
  basename,
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

export default router;