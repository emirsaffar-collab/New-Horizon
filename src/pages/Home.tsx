import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, Wind, Sun, Anchor, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const content = {
    en: {
      seoTitle: "New Horizon Villas | Luxury Vacation Rental in Kea, Greece",
      seoDesc: "Experience the closest Cycladic secret to Athens. New Horizon Villas offers a sanctuary of stone and sea in Fotimari, Kea. Book your direct stay today.",
      heroTitle: "New Horizon Villas",
      heroSubtitle: "Sanctuary of Stone & Sea",
      heroDesc: "The closest Cycladic secret to Athens. A retreat of silence, oak forests, and endless Aegean blue.",
      cta: "Check Availability",
      ctaBook: "Book Now",
      highlights: {
        view: "Panoramic Aegean Views",
        nature: "Ancient Oak Forests",
        design: "Traditional Xerolithia Stone",
        privacy: "Absolute Seclusion"
      },
      uspTitle: "The Undiscovered Cyclades",
      uspText: "Kea (Tzia) is an island of secrets. Only one hour from Lavrio port, it remains untouched by mass tourism. Here, the rhythm slows down. The wind speaks through the oak trees, and the stone 'kathikies' stand as timeless guardians of the landscape.",
      locationTeaser: "Perched in Fotimari",
      locationText: "High above the Aegean, where the sky meets the sea. A place to disconnect from the noise and reconnect with the horizon.",
      reviews: "What our guests say",
      review1: "A masterpiece of silence. The view left us breathless.",
      reviewAuthor1: "Elena & Marc, Zurich"
    },
    el: {
      seoTitle: "New Horizon Villas | Πολυτελής Ενοικίαση στην Κέα",
      seoDesc: "Ζήστε το κοντινότερο Κυκλαδίτικο μυστικό στην Αθήνα. Το New Horizon Villas προσφέρει ένα καταφύγιο πέτρας και θάλασσας στο Φωτημάρι της Κέας.",
      heroTitle: "New Horizon Villas",
      heroSubtitle: "Καταφύγιο Πέτρας & Θάλασσας",
      heroDesc: "Το κοντινότερο Κυκλαδίτικο μυστικό στην Αθήνα. Ένα καταφύγιο σιωπής, δρυοδασών και απέραντου γαλάζιου.",
      cta: "Έλεγχος Διαθεσιμότητας",
      ctaBook: "Κάντε Κράτηση",
      highlights: {
        view: "Πανοραμική Θέα Αιγαίου",
        nature: "Αρχαία Δρυοδάση",
        design: "Παραδοσιακή Ξερολιθιά",
        privacy: "Απόλυτη Ιδιωτικότητα"
      },
      uspTitle: "Οι Ανεξερεύνητες Κυκλάδες",
      uspText: "Η Κέα (Τζιά) είναι ένα νησί γεμάτο μυστικά. Μόλις μία ώρα από το λιμάνι του Λαυρίου, παραμένει ανέγγιχτη από τον μαζικό τουρισμό. Εδώ, ο ρυθμός επιβραδύνεται. Ο άνεμος μιλάει μέσα από τις βελανιδιές και οι πέτρινες 'καθικιές' στέκουν ως διαχρονικοί φύλακες του τοπίου.",
      locationTeaser: "Σκαρφαλωμένο στο Φωτημάρι",
      locationText: "Ψηλά πάνω από το Αιγαίο, εκεί που ο ουρανός συναντά τη θάλασσα. Ένα μέρος για να αποσυνδεθείτε από το θόρυβο και να επανασυνδεθείτε με τον ορίζοντα.",
      reviews: "Τι λένε οι επισκέπτες μας",
      review1: "Ένα αριστούργημα σιωπής. Η θέα μας άφησε άφωνους.",
      reviewAuthor1: "Έλενα & Μαρκ, Ζυρίχη"
    }
  };

  const c = language === 'en' ? content.en : content.el;

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VacationRental",
            "name": "New Horizon Villas",
            "description": c.seoDesc,
            "url": "https://newhorizonvillas.gr",
            "image": [
              "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80",
              "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=80"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fotimari, Kea",
              "addressRegion": "Cyclades",
              "addressCountry": "GR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.662572,
              "longitude": 24.329075
            },
            "priceRange": "$$$",
            "telephone": "+30 210 000 0000",
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Panoramic Aegean Views",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Free Wi-Fi",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Air Conditioning",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Free Private Parking",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Private Entrance",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Fully Equipped Kitchen",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Pet Friendly",
                "value": true
              }
            ],
            "numberOfRooms": 3,
            "occupancy": {
              "@type": "QuantitativeValue",
              "value": 6,
              "unitCode": "C62"
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder - using a high quality nature/sea image */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
                alt="Luxury Mediterranean coastline at sunset" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-4 font-medium"
          >
            {c.heroSubtitle}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight"
          >
            {c.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed px-2 sm:px-0"
          >
            {c.heroDesc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <Link 
              to="/book" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#E2725B] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#c55b45] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-h-[48px]"
            >
              {c.cta}
            </Link>
            <Link 
              to="/book" 
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all duration-300 transform hover:-translate-y-1 min-h-[48px]"
            >
              {c.ctaBook}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-stone-100 divide-x divide-y md:divide-y-0 divide-stone-100">
            <div className="flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500">
              <Sun className="w-8 h-8 md:w-8 md:h-8 text-[#E2725B] flex-shrink-0" strokeWidth={1} />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-400 font-bold text-center leading-tight">{c.highlights.view}</span>
            </div>
            <div className="flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500">
              <Wind className="w-8 h-8 md:w-8 md:h-8 text-[#556B2F] flex-shrink-0" strokeWidth={1} />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-400 font-bold text-center leading-tight">{c.highlights.nature}</span>
            </div>
            <div className="flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500">
              <Anchor className="w-8 h-8 md:w-8 md:h-8 text-[#004C98] flex-shrink-0" strokeWidth={1} />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-400 font-bold text-center leading-tight">{c.highlights.design}</span>
            </div>
            <div className="flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500">
              <MapPin className="w-8 h-8 md:w-8 md:h-8 text-stone-300 flex-shrink-0" strokeWidth={1} />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-400 font-bold text-center leading-tight">{c.highlights.privacy}</span>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2 w-full">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-auto">
                <img 
                  src="https://picsum.photos/seed/stone_house_greece/800/1000" 
                  alt="Traditional Stone Architecture" 
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#556B2F]/10 -z-10 rounded-full blur-2xl"></div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 md:space-y-8">
              <span className="text-[#E2725B] text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold block mb-2">
                {language === 'en' ? 'The Essence' : 'Η Ουσία'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 leading-tight">
                {c.uspTitle}
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
                {c.uspText}
              </p>
              <Link to="/explore" className="inline-flex items-center text-[#004C98] uppercase tracking-widest text-sm font-medium hover:text-[#003366] transition-colors group">
                {language === 'en' ? 'Explore Kea' : 'Εξερευνήστε την Κέα'} 
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="relative py-20 md:py-32 bg-[#004C98] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
            src="https://picsum.photos/seed/aegean_sea_texture/1920/1080" 
            alt="Sea Texture" 
            className="w-full h-full object-cover mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="block text-[#E2725B] text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-widest mb-4 font-bold">{c.locationTeaser}</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl mb-6 md:mb-8 leading-tight px-2 sm:px-0">{c.locationText}</h2>
          <Link to="/location" className="inline-block border border-white/30 px-6 md:px-8 py-3 text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-[#004C98] transition-all duration-300">
            {language === 'en' ? 'View Location' : 'Δείτε την Τοποθεσία'}
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center space-x-1 mb-8 md:mb-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 text-[#E2725B] fill-current" />
            ))}
          </div>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-800 italic mb-8 md:mb-10 leading-relaxed tracking-tight px-4">
            "{c.review1}"
          </blockquote>
          <cite className="not-italic text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-stone-400 font-bold block">
            — {c.reviewAuthor1}
          </cite>
        </div>
      </section>
    </div>
  );
}
