import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, ShieldCheck, Tag, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function Booking() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    guests: '2',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      seoTitle: "Book Your Stay | New Horizon Villas Kea",
      seoDesc: "Book directly with New Horizon Villas for the best rates. Secure your luxury vacation rental in Kea, Greece.",
      title: "Secure Your Stay",
      subtitle: "Direct Booking Best Rate Guarantee",
      intro: "Book directly with us to receive the best rates, a personalized welcome guide, and flexible cancellation policies.",
      priceFrom: "From €380 / night",
      priceSub: "Best rate guaranteed · Save up to 15% vs. Airbnb & Booking.com",
      ratedText: "Rated 4.97 / 5 on Airbnb · 9.6 / 10 on Booking.com",
      scarcityNote: "Only 1 property · Limited dates available this summer. Remaining July & August weeks are receiving active enquiries.",
      arrivalNote: "A note before you book: the final 1.5 km to New Horizon Villas is an unpaved path through the oak forest, requiring an SUV or 4×4. We ask you to embrace this — it is the threshold between the world and true silence.",
      formTitle: "Request Your Dates",
      responseNote: "We respond within 4 hours. No payment required — we'll send a secure payment link after confirming availability.",
      checkin: "Check-In",
      checkout: "Check-Out",
      guests: "Number of Guests",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "WhatsApp / Phone",
      messagePlaceholder: "Special requests or questions (optional)",
      submitBtn: "Send Booking Request",
      successTitle: "Request Sent!",
      successMsg: "Thank you — we'll confirm availability and reach out within 4 hours.",
      benefits: [
        { icon: "tag", label: "Best Rate Guarantee", desc: "Save up to 15% vs. OTA platforms" },
        { icon: "shield", label: "Flexible Cancellation", desc: "Free cancellation up to 30 days prior" },
        { icon: "clock", label: "4-Hour Response", desc: "Personal host reply every time" }
      ],
      contactTitle: "Prefer to Chat?",
      contactText: "Reach out to us directly via WhatsApp for immediate assistance.",
      whatsappBtn: "Chat on WhatsApp"
    },
    el: {
      seoTitle: "Κάντε Κράτηση | New Horizon Villas Κέα",
      seoDesc: "Κάντε κράτηση απευθείας στο New Horizon Villas για τις καλύτερες τιμές. Εξασφαλίστε την πολυτελή διαμονή σας στην Κέα.",
      title: "Κάντε Κράτηση",
      subtitle: "Εγγύηση Καλύτερης Τιμής με Απευθείας Κράτηση",
      intro: "Κάντε κράτηση απευθείας μαζί μας για να λάβετε τις καλύτερες τιμές, έναν εξατομικευμένο οδηγό καλωσορίσματος και ευέλικτες πολιτικές ακύρωσης.",
      priceFrom: "Από €380 / διανυκτέρευση",
      priceSub: "Εγγύηση καλύτερης τιμής · Εξοικονόμηση έως 15% έναντι Airbnb & Booking.com",
      ratedText: "Βαθμολογία 4.97 / 5 στο Airbnb · 9.6 / 10 στο Booking.com",
      scarcityNote: "Μόνο 1 κατάλυμα · Περιορισμένες ημερομηνίες διαθέσιμες αυτό το καλοκαίρι. Οι εναπομείνασες εβδομάδες Ιουλίου & Αυγούστου δέχονται ενεργά αιτήματα.",
      arrivalNote: "Μια σημείωση πριν κάνετε κράτηση: τα τελευταία 1,5 χλμ. προς τις New Horizon Villas είναι ένας χωματόδρομος μέσα από δάσος βελανιδιάς, που απαιτεί SUV ή 4×4. Σας ζητούμε να το αγκαλιάσετε αυτό — είναι το κατώφλι ανάμεσα στον κόσμο και στην αληθινή σιωπή.",
      formTitle: "Ζητήστε τις Ημερομηνίες σας",
      responseNote: "Απαντάμε εντός 4 ωρών. Δεν απαιτείται πληρωμή — θα σας στείλουμε ασφαλή σύνδεσμο πληρωμής αφού επιβεβαιώσουμε τη διαθεσιμότητα.",
      checkin: "Άφιξη",
      checkout: "Αναχώρηση",
      guests: "Αριθμός Επισκεπτών",
      firstName: "Όνομα",
      lastName: "Επώνυμο",
      email: "Διεύθυνση Email",
      phone: "WhatsApp / Τηλέφωνο",
      messagePlaceholder: "Ειδικές απαιτήσεις ή ερωτήσεις (προαιρετικό)",
      submitBtn: "Αποστολή Αιτήματος Κράτησης",
      successTitle: "Το Αίτημα Εστάλη!",
      successMsg: "Ευχαριστούμε — θα επιβεβαιώσουμε τη διαθεσιμότητα και θα επικοινωνήσουμε εντός 4 ωρών.",
      benefits: [
        { icon: "tag", label: "Εγγύηση Καλύτερης Τιμής", desc: "Εξοικονόμηση έως 15% έναντι πλατφορμών" },
        { icon: "shield", label: "Ευέλικτη Ακύρωση", desc: "Δωρεάν ακύρωση έως 30 ημέρες πριν" },
        { icon: "clock", label: "Απάντηση σε 4 Ώρες", desc: "Προσωπική απάντηση κάθε φορά" }
      ],
      contactTitle: "Προτιμάτε να Μιλήσουμε;",
      contactText: "Επικοινωνήστε μαζί μας απευθείας μέσω WhatsApp για άμεση βοήθεια.",
      whatsappBtn: "Συνομιλία στο WhatsApp"
    }
  };

  const c = language === 'en' ? content.en : content.el;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking Request — ${formData.checkin} to ${formData.checkout} (${formData.guests} guests)`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone}\n\nCheck-In: ${formData.checkin}\nCheck-Out: ${formData.checkout}\nGuests: ${formData.guests}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:stay@newhorizonvillas.gr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const BenefitIcon = ({ icon }: { icon: string }) => {
    if (icon === 'tag') return <Tag className="w-5 h-5 text-[#E2725B]" strokeWidth={1.5} aria-hidden="true" />;
    if (icon === 'shield') return <ShieldCheck className="w-5 h-5 text-[#556B2F]" strokeWidth={1.5} aria-hidden="true" />;
    return <Clock className="w-5 h-5 text-[#004C98]" strokeWidth={1.5} aria-hidden="true" />;
  };

  return (
    <div className="bg-white min-h-screen py-20 md:py-24">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
        <link rel="canonical" href="https://emirsaffar-collab.github.io/New-Horizon/book" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emirsaffar-collab.github.io/New-Horizon/book" />
        <meta property="og:title" content={c.seoTitle} />
        <meta property="og:description" content={c.seoDesc} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.seoTitle} />
        <meta name="twitter:description" content={c.seoDesc} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" />

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
                "name": language === 'en' ? "Book" : "Κράτηση",
                "item": "https://emirsaffar-collab.github.io/New-Horizon/book"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-6"
        >
          {c.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#E2725B] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-[11px] font-bold mb-6"
        >
          {c.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-stone-600 max-w-2xl mx-auto leading-relaxed font-light text-base sm:text-lg px-2 sm:px-0"
        >
          {c.intro}
        </motion.p>
      </div>

      {/* Pricing & Rating Strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
      >
        <div className="bg-stone-50 border border-stone-200 rounded-sm p-5 text-center">
          <p className="font-serif text-2xl sm:text-3xl text-stone-800 mb-1">{c.priceFrom}</p>
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">{c.priceSub}</p>
          <p className="text-[11px] text-stone-400 uppercase tracking-wider">{c.ratedText}</p>
        </div>
      </motion.div>

      {/* Benefits Strip */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {c.benefits.map((b, i) => (
            <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-stone-100 rounded-sm">
              <BenefitIcon icon={b.icon} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-700">{b.label}</p>
                <p className="text-xs text-stone-500 mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scarcity Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="border-l-4 border-[#E2725B] bg-stone-50 px-5 py-4">
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{c.scarcityNote}</p>
        </div>
      </div>

      {/* Arrival Note */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="border-l-4 border-[#556B2F] px-5 py-4">
          <p className="font-serif text-sm sm:text-base text-stone-600 italic leading-relaxed">{c.arrivalNote}</p>
        </div>
      </div>

      {/* Direct Inquiry Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <h2 className="font-serif text-xl sm:text-2xl text-stone-800 mb-2 text-center">{c.formTitle}</h2>
        <p className="text-xs text-stone-400 text-center mb-8 uppercase tracking-widest">{c.responseNote}</p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-stone-50 border border-stone-200 rounded-sm p-10 text-center"
          >
            <p className="font-serif text-2xl text-stone-800 mb-3">{c.successTitle}</p>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm mx-auto">{c.successMsg}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-stone-50 border border-stone-200 rounded-sm p-6 sm:p-8">
            {/* Dates + Guests Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-1.5" htmlFor="checkin">{c.checkin}</label>
                <input
                  id="checkin"
                  name="checkin"
                  type="date"
                  required
                  value={formData.checkin}
                  onChange={handleChange}
                  className="w-full border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-[#004C98] transition-colors rounded-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-1.5" htmlFor="checkout">{c.checkout}</label>
                <input
                  id="checkout"
                  name="checkout"
                  type="date"
                  required
                  value={formData.checkout}
                  onChange={handleChange}
                  className="w-full border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-[#004C98] transition-colors rounded-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-1.5" htmlFor="guests">{c.guests}</label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-[#004C98] transition-colors rounded-sm"
                >
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>

            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-1.5" htmlFor="firstName">{c.firstName}</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-[#004C98] transition-colors rounded-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-1.5" htmlFor="lastName">{c.lastName}</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-[#004C98] transition-colors rounded-sm"
                />
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-1.5" htmlFor="email">{c.email}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-[#004C98] transition-colors rounded-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-1.5" htmlFor="phone">{c.phone}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-[#004C98] transition-colors rounded-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-stone-500 mb-1.5" htmlFor="message">
                {c.messagePlaceholder}
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-[#004C98] transition-colors rounded-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E2725B] text-white py-4 text-sm uppercase tracking-widest font-medium hover:bg-[#c55b45] transition-colors rounded-sm min-h-[48px]"
            >
              {c.submitBtn}
            </button>
          </form>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-[#004C98] text-white py-12 md:py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl mb-4">{c.contactTitle}</h2>
          <p className="text-white/80 mb-8 leading-relaxed text-sm md:text-base px-2 sm:px-0">{c.contactText}</p>
          <a
            href="https://wa.me/306900000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us via WhatsApp for booking assistance"
            className="inline-flex items-center bg-[#25D366] text-white px-6 md:px-8 py-3 rounded-full hover:bg-[#20bd5a] transition-colors font-medium shadow-lg text-sm md:text-base min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
            {c.whatsappBtn}
          </a>
        </div>
      </div>
    </div>
  );
}
