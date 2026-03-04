import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import Layout from './components/Layout';
import Home from './pages/Home';

const Explore = React.lazy(() => import('./pages/Explore'));
const Location = React.lazy(() => import('./pages/Location'));
const Booking = React.lazy(() => import('./pages/Booking'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function LazyPage({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-stone-300 border-t-[#E2725B] rounded-full animate-spin" /></div>}>
      {children}
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <LazyPage><Explore /></LazyPage>,
      },
      {
        path: "location",
        element: <LazyPage><Location /></LazyPage>,
      },
      {
        path: "book",
        element: <LazyPage><Booking /></LazyPage>,
      },
      {
        path: "privacy",
        element: <LazyPage><PrivacyPolicy /></LazyPage>,
      },
      {
        path: "terms",
        element: <LazyPage><TermsOfService /></LazyPage>,
      },
      {
        path: "*",
        element: <LazyPage><NotFound /></LazyPage>,
      },
    ],
  },
], {
  basename: '/New-Horizon',
});

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
