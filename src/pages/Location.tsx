import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Info, Car, Navigation } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function Location() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      seoTitle: "Location & Arrival | New Horizon Villas Kea",
      seoDesc: "Located in Fotimari, Kea, New Horizon Villas offers seclusion and silence. Learn about our location, arrival guide, and vehicle recommendations.",
      title: "The Journey to Silence",
      subtitle: "Fotimari, Kea",
      intro: "Getting to New Horizon Villas is part of the experience. As you leave the port and ascend into the hills, the noise of the world fades away.",
      privacyTitle: "Exact Location & Privacy",
      privacyText: "To ensure the absolute privacy and security of our guests, we do not publish the exact street address (Fotimari has no street names).",
      privacyList: [
        "Detailed turn-by-turn video guide provided upon booking",
        "Precise GPS pins & what3words location",
        "Personal meet & greet at the port if requested"
      ],
      vehicleTitle: "The Final Mile: SUV Required",
      vehicleText: "The final 1.5km to the villa is an unpaved, traditional dirt road. This is not an inconvenience; it is a filter. It ensures that only those seeking true peace reach our doorstep.",
      vehicleWarning: "We strongly recommend renting a vehicle with higher clearance (SUV, Jeep, or 4x4). Small city cars are not suitable for the final approach.",
      ferryTitle: "Ferry Connection",
      ferryText: "Kea is accessible via a 1-hour ferry ride from Lavrio Port (just 30 mins from Athens Airport). Ferries run daily.",
      mapTitle: "General Area"
    },
    el: {
      seoTitle: "Τοποθεσία & Άφιξη | New Horizon Villas Κέα",
      seoDesc: "Βρισκόμενο στο Φωτημάρι της Κέας, το New Horizon Villas προσφέρει απομόνωση και ησυχία. Μάθετε για την τοποθεσία, τον οδηγό άφιξης και τις συστάσεις οχημάτων.",
      title: "Το Ταξίδι προς τη Σιωπή",
      subtitle: "Φωτημάρι, Κέα",
      intro: "Η διαδρομή προς το New Horizon Villas είναι μέρος της εμπειρίας. Καθώς αφήνετε το λιμάνι και ανεβαίνετε στους λόφους, ο θόρυβος του κόσμου σβήνει.",
      privacyTitle: "Ακριβής Τοποθεσία & Ιδιωτικότητα",
      privacyText: "Για να διασφαλίσουμε την απόλυτη ιδιωτικότητα και ασφάλεια των επισκεπτών μας, δεν δημοσιεύουμε την ακριβή διεύθυνση (το Φωτημάρι δεν έχει ονόματα δρόμων).",
      privacyList: [
        "Λεπτομερής βίντεο-οδηγός στροφή-προς-στροφή μετά την κράτηση",
        "Ακριβείς πινέζες GPS & τοποθεσία what3words",
        "Προσωπική υποδοχή στο λιμάνι αν ζητηθεί"
      ],
      vehicleTitle: "Το Τελευταίο Μίλι: Απαραίτητο SUV",
      vehicleText: "Τα τελευταία 1,5 χλμ προς τη βίλα είναι ένας χωματόδρομος. Αυτό δεν είναι ταλαιπωρία, είναι φίλτρο. Διασφαλίζει ότι μόνο όσοι αναζητούν πραγματική ηρεμία φτάνουν στο κατώφλι μας.",
      vehicleWarning: "Συνιστούμε ανεπιφύλακτα την ενοικίαση οχήματος με ύψος (SUV, Jeep ή 4x4). Τα μικρά αυτοκίνητα πόλης δεν είναι κατάλληλα για την τελική προσέγγιση.",
      ferryTitle: "Ακτοπλοϊκή Σύνδεση",
      ferryText: "Η Κέα είναι προσβάσιμη με πλοίο (1 ώρα) από το λιμάνι του Λαυρίου (μόλις 30 λεπτά από το Αεροδρόμιο Αθηνών). Δρομολόγια καθημερινά.",
      mapTitle: "Γενική Περιοχή"
    }
  };

  const c = language === 'en' ? content.en : content.el;

  return (
    <div className="bg-white min-h-screen pb-16 md:pb-20">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
        <link rel="canonical" href="https://emirsaffar-collab.github.io/New-Horizon/location" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emirsaffar-collab.github.io/New-Horizon/location" />
        <meta property="og:title" content={c.seoTitle} />
        <meta property="og:description" content={c.seoDesc} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.seoTitle} />
        <meta name="twitter:description" content={c.seoDesc} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "New Horizon Villas — Fotimari, Kea",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.662572,
              "longitude": 24.329075
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fotimari, Kea",
              "addressRegion": "Cyclades",
              "addressCountry": "GR"
            },
            "hasMap": "https://www.google.com/maps/place/37.662572,24.329075",
            "containedInPlace": {
              "@type": "Island",
              "name": "Kea (Tzia)",
              "containedInPlace": {
                "@type": "Country",
                "name": "Greece"
              }
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://emirsaffar-collab.github.io/New-Horizon/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": language === 'en' ? "Location" : "Τοποθεσία",
                "item": "https://emirsaffar-collab.github.io/New-Horizon/location"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Header */}
      <div className="bg-stone-100 py-16 md:py-24 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-6"
        >
          {c.title}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center text-[#E2725B] space-x-2"
        >
          <MapPin className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-[11px] font-bold">{c.subtitle}</span>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 md:p-8 lg:p-16 shadow-2xl rounded-sm border-t-4 border-[#004C98]"
        >
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8 md:mb-10 font-light">
            {c.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Privacy Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Navigation className="w-5 h-5 md:w-6 md:h-6 text-[#004C98]" aria-hidden="true" />
                <h3 className="font-serif text-lg md:text-xl text-stone-800">{c.privacyTitle}</h3>
              </div>
              <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                {c.privacyText}
              </p>
              <ul className="space-y-3">
                {c.privacyList.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-stone-600">
                    <span className="mr-2 text-[#E2725B]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vehicle Section */}
            <div className="bg-stone-50 p-5 md:p-6 rounded-lg border border-stone-100">
              <div className="flex items-center space-x-3 mb-4">
                <Car className="w-5 h-5 md:w-6 md:h-6 text-[#E2725B]" aria-hidden="true" />
                <h3 className="font-serif text-lg md:text-xl text-stone-800">{c.vehicleTitle}</h3>
              </div>
              <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                {c.vehicleText}
              </p>
              <div className="flex items-start bg-[#E2725B]/10 p-3 rounded text-sm text-[#c55b45]">
                <Info className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-medium">{c.vehicleWarning}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

        {/* Map Section */}
        <div className="mt-12 md:mt-16 px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-xl md:text-2xl text-stone-800 mb-6 text-center">{c.mapTitle}</h3>
          <div className="w-full h-64 md:h-96 bg-stone-200 rounded-sm overflow-hidden shadow-inner md:grayscale md:hover:grayscale-0 transition-all duration-500">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12648.78923456789!2d24.329075!3d37.662572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM5JzQ1LjMiTiAyNMKwMTknNDQuNyJF!5e0!3m2!1sen!2sgr!4v1620000000000!5m2!1sen!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Kea Location Map"
            ></iframe>
          </div>
          <p className="text-center text-[10px] sm:text-xs text-stone-500 mt-4 uppercase tracking-widest">
            Coordinates: 37.662572, 24.329075
          </p>
        </div>
    </div>
  );
}
