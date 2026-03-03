import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
