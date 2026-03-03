import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-800">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[60] focus:bg-[#004C98] focus:text-white focus:px-4 focus:py-3 focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <ScrollRestoration />
    </div>
  );
}
