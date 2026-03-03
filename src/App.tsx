import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Location from './pages/Location';
import Booking from './pages/Booking';

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
        element: <Explore />,
      },
      {
        path: "location",
        element: <Location />,
      },
      {
        path: "book",
        element: <Booking />,
      },
    ],
  },
]);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
