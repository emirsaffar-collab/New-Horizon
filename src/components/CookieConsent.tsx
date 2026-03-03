import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const content = {
    en: {
      title: "Cookie Notice",
      message: "We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. By clicking 'Accept', you consent to our use of cookies.",
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn more"
    },
    el: {
      title: "Ειδοποίηση Cookies",
      message: "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας, να αναλύσουμε την κυκλοφορία και να παρέχουμε εξατομικευμένο περιεχόμενο. Κάνοντας κλικ στο 'Αποδοχή', συναινείτε στη χρήση cookies.",
      accept: "Αποδοχή",
      decline: "Απόρριψη",
      learnMore: "Μάθετε περισσότερα"
    }
  };

  const c = language === 'en' ? content.en : content.el;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500" style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 16px)' }}>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl border-t-4 border-[#E2725B] p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <Cookie className="w-8 h-8 text-[#E2725B]" aria-hidden="true" />
          </div>
          
          <div className="flex-grow">
            <h3 className="font-serif text-xl text-stone-800 mb-2">{c.title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {c.message}{' '}
              <Link to="/privacy" className="text-[#004C98] hover:underline font-medium">
                {c.learnMore}
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptCookies}
              className="bg-[#E2725B] text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-[#c55b45] transition-colors whitespace-nowrap"
              aria-label="Accept cookies"
            >
              {c.accept}
            </button>
            <button
              onClick={declineCookies}
              className="border-2 border-stone-300 text-stone-700 px-6 py-3 text-sm uppercase tracking-wider hover:bg-stone-50 transition-colors whitespace-nowrap"
              aria-label="Decline cookies"
            >
              {c.decline}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
