import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'el' : 'en');
  };

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl text-stone-800 tracking-wider">
            NEW HORIZON
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-stone-600 hover:text-[#004C98] transition-colors text-sm uppercase tracking-widest font-medium">
              {t('nav.home')}
            </Link>
            <Link to="/explore" className="text-stone-600 hover:text-[#004C98] transition-colors text-sm uppercase tracking-widest font-medium">
              {t('nav.explore')}
            </Link>
            <Link to="/location" className="text-stone-600 hover:text-[#004C98] transition-colors text-sm uppercase tracking-widest font-medium">
              {t('nav.location')}
            </Link>
            <button onClick={toggleLanguage} className="flex items-center text-stone-600 hover:text-[#004C98] transition-colors">
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>
            <Link to="/book" className="bg-[#E2725B] text-white px-6 py-2 rounded-none hover:bg-[#c55b45] transition-colors text-sm uppercase tracking-widest font-medium">
              {t('nav.book')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLanguage} className="flex items-center text-stone-600">
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)} 
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex justify-end p-6">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-stone-400 hover:text-stone-800 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex-grow flex flex-col items-center justify-center space-y-8 px-6">
                {[
                  { to: "/", label: t('nav.home') },
                  { to: "/explore", label: t('nav.explore') },
                  { to: "/location", label: t('nav.location') }
                ].map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link 
                      to={item.to} 
                      onClick={() => setIsOpen(false)} 
                      className="text-stone-800 hover:text-[#004C98] text-2xl font-serif tracking-widest py-4 block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full pt-8"
                >
                  <Link 
                    to="/book" 
                    onClick={() => setIsOpen(false)} 
                    className="bg-[#E2725B] text-white py-5 w-full text-center block hover:bg-[#c55b45] text-sm uppercase tracking-[0.2em] font-bold shadow-lg"
                  >
                    {t('nav.book')}
                  </Link>
                </motion.div>
              </nav>

              <div className="p-8 border-t border-stone-100">
                <button 
                  onClick={toggleLanguage} 
                  className="flex items-center justify-center w-full space-x-3 text-stone-500 hover:text-stone-800 transition-colors py-4"
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-widest uppercase">
                    {language === 'en' ? 'Ελληνικά' : 'English'}
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
