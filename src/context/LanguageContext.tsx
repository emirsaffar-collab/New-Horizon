import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.explore': 'Explore Kea',
    'nav.location': 'Location',
    'nav.book': 'Book Now',
    'footer.ama': 'AMA: 00000000000',
    'footer.climate_fee': 'Climate Crisis Resilience Fee (€10-€15/night) applicable.',
    'footer.rights': 'All rights reserved.',
    'hero.title': 'New Horizon Villas',
    'hero.subtitle': 'Sanctuary of Stone & Sea',
    'hero.cta': 'Check Availability',
    'hero.scroll': 'Discover More',
    'usp.title': 'The Closest Cycladic Secret',
    'usp.desc': 'Just one hour from Athens, yet a world away.',
    'location.title': 'Secluded Sanctuary',
    'location.subtitle': 'Fotimari, Kea',
    'location.suv': 'The final 1.5km requires a vehicle with higher clearance (SUV/4x4 recommended). This unpaved path is your gateway to absolute silence.',
    'contact.whatsapp': 'Contact via WhatsApp',
  },
  el: {
    'nav.home': 'Αρχική',
    'nav.explore': 'Εξερευνήστε την Τζιά',
    'nav.location': 'Τοποθεσία',
    'nav.book': 'Κράτηση',
    'footer.ama': 'ΑΜΑ: 00000000000',
    'footer.climate_fee': 'Τέλος Ανθεκτικότητας στην Κλιματική Κρίση (€10-€15/βράδυ).',
    'footer.rights': 'Με επιφύλαξη παντός δικαιώματος.',
    'hero.title': 'New Horizon Villas',
    'hero.subtitle': 'Καταφύγιο Πέτρας & Θάλασσας',
    'hero.cta': 'Έλεγχος Διαθεσιμότητας',
    'hero.scroll': 'Ανακαλύψτε Περισσότερα',
    'usp.title': 'Το Κρυμμένο Μυστικό των Κυκλάδων',
    'usp.desc': 'Μόλις μία ώρα από την Αθήνα, κι όμως ένας άλλος κόσμος.',
    'location.title': 'Απομονωμένο Καταφύγιο',
    'location.subtitle': 'Φωτημάρι, Κέα',
    'location.suv': 'Τα τελευταία 1,5 χλμ απαιτούν όχημα με ύψος (συνιστάται SUV/4x4). Αυτός ο χωματόδρομος είναι η πύλη σας προς την απόλυτη ησυχία.',
    'contact.whatsapp': 'Επικοινωνία μέσω WhatsApp',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'el') ? saved : 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  }, []);

  const t = useCallback((key: string) => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
