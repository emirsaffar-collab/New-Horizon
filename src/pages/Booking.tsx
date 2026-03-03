import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function Booking() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      seoTitle: "Book Your Stay | New Horizon Villas Kea",
      seoDesc: "Book directly with New Horizon Villas for the best rates. Secure your luxury vacation rental in Kea, Greece.",
      title: "Secure Your Stay",
      subtitle: "Direct Booking Best Rate Guarantee",
      intro: "Book directly with us to receive the best rates, a personalized welcome guide, and flexible cancellation policies.",
      widgetPlaceholder: "Booking Widget Loading...",
      contactTitle: "Questions?",
      contactText: "Prefer to chat before booking? Reach out to us directly via WhatsApp for immediate assistance.",
      whatsappBtn: "Chat on WhatsApp"
    },
    el: {
      seoTitle: "Κάντε Κράτηση | New Horizon Villas Κέα",
      seoDesc: "Κάντε κράτηση απευθείας στο New Horizon Villas για τις καλύτερες τιμές. Εξασφαλίστε την πολυτελή διαμονή σας στην Κέα.",
      title: "Κάντε Κράτηση",
      subtitle: "Εγγύηση Καλύτερης Τιμής με Απευθείας Κράτηση",
      intro: "Κάντε κράτηση απευθείας μαζί μας για να λάβετε τις καλύτερες τιμές, έναν εξατομικευμένο οδηγό καλωσορίσματος και ευέλικτες πολιτικές ακύρωσης.",
      widgetPlaceholder: "Φόρτωση Widget Κράτησης...",
      contactTitle: "Ερωτήσεις;",
      contactText: "Προτιμάτε να μιλήσουμε πριν την κράτηση; Επικοινωνήστε μαζί μας απευθείας μέσω WhatsApp.",
      whatsappBtn: "Συνομιλία στο WhatsApp"
    }
  };

  const c = language === 'en' ? content.en : content.el;

  return (
    <div className="bg-white min-h-screen py-24">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl text-stone-800 mb-6"
        >
          {c.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#E2725B] uppercase tracking-[0.3em] text-[10px] font-bold mb-8"
        >
          {c.subtitle}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-stone-600 max-w-2xl mx-auto leading-relaxed font-light text-lg"
        >
          {c.intro}
        </motion.p>
      </div>

      {/* Booking Widget Placeholder */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-stone-50 border-2 border-dashed border-stone-200 rounded-lg h-96 flex flex-col items-center justify-center text-stone-400">
          <Calendar className="w-12 h-12 mb-4 opacity-50" />
          <span className="text-lg font-medium">{c.widgetPlaceholder}</span>
          <span className="text-xs mt-2">(Smoobu / Lodgify Integration)</span>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-[#004C98] text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl mb-4">{c.contactTitle}</h2>
          <p className="text-white/80 mb-8 leading-relaxed">{c.contactText}</p>
          <a 
            href="https://wa.me/306900000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-[#20bd5a] transition-colors font-medium shadow-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {c.whatsappBtn}
          </a>
        </div>
      </div>
    </div>
  );
}
