import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Home as HomeIcon, MapPin } from 'lucide-react';

export default function NotFound() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "404 - Page Not Found",
      heading: "Lost in the Aegean?",
      subtitle: "This page seems to have drifted away like a boat at sea",
      description: "The page you're looking for doesn't exist or has been moved. Let us guide you back to familiar shores.",
      homeButton: "Return Home",
      exploreButton: "Explore Kea"
    },
    el: {
      title: "404 - Η Σελίδα Δεν Βρέθηκε",
      heading: "Χαθήκατε στο Αιγαίο;",
      subtitle: "Αυτή η σελίδα φαίνεται να έχει παρασυρθεί σαν βάρκα στη θάλασσα",
      description: "Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί. Ας σας οδηγήσουμε πίσω σε γνώριμες ακτές.",
      homeButton: "Επιστροφή στην Αρχική",
      exploreButton: "Εξερευνήστε την Κέα"
    }
  };

  const c = language === 'en' ? content.en : content.el;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#004C98] to-[#556B2F] flex items-center justify-center px-4">
      <Helmet>
        <title>{c.title}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="max-w-2xl mx-auto text-center text-white">
        <h1 className="font-serif text-8xl md:text-9xl mb-6 text-white/90">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">{c.heading}</h2>
        <p className="text-lg md:text-xl text-white/80 mb-4 italic">{c.subtitle}</p>
        <p className="text-base text-white/70 mb-12 leading-relaxed max-w-xl mx-auto">
          {c.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="inline-flex items-center bg-white text-[#004C98] px-8 py-4 text-sm uppercase tracking-widest hover:bg-stone-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-h-[48px]"
          >
            <HomeIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            {c.homeButton}
          </Link>
          <Link 
            to="/explore" 
            className="inline-flex items-center border-2 border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-[#004C98] transition-all duration-300 transform hover:-translate-y-1 min-h-[48px]"
          >
            <MapPin className="w-5 h-5 mr-2" aria-hidden="true" />
            {c.exploreButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
