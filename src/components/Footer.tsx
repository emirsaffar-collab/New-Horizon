import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CreditCard, Mail } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const emailContent = {
    en: {
      emailTitle: "Before You Decide",
      emailSubtitle: "A Private Look at Kea",
      emailBody: "Let us send you a curated guide to the island — the beaches only locals know, the restaurant with the best octopus in the Cyclades, and the trail to ancient Karthea. No sales. Just the island.",
      emailPlaceholder: "Your email address",
      emailBtn: "Send Me the Guide",
      emailDisclaimer: "No spam. One welcome email, then occasional seasonal updates only.",
      followLabel: "Follow Our Story"
    },
    el: {
      emailTitle: "Πριν Αποφασίσετε",
      emailSubtitle: "Μια Ιδιωτική Ματιά στην Κέα",
      emailBody: "Αφήστε μας να σας στείλουμε έναν επιλεγμένο οδηγό του νησιού — οι παραλίες που ξέρουν μόνο οι ντόπιοι, το εστιατόριο με το καλύτερο χταπόδι στις Κυκλάδες και το μονοπάτι προς την αρχαία Καρθαία. Χωρίς διαφημίσεις. Απλά το νησί.",
      emailPlaceholder: "Η διεύθυνση email σας",
      emailBtn: "Στείλτε μου τον Οδηγό",
      emailDisclaimer: "Χωρίς spam. Ένα email καλωσορίσματος, μετά σποραδικές εποχιακές ενημερώσεις.",
      followLabel: "Ακολουθήστε την Ιστορία μας"
    }
  };

  const ec = language === 'en' ? emailContent.en : emailContent.el;

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector<HTMLInputElement>('input[type="email"]');
    if (emailInput) {
      const subject = encodeURIComponent('Kea Island Guide Request — New Horizon Villas');
      const body = encodeURIComponent(`Please send me the Kea insider guide.\n\nEmail: ${emailInput.value}`);
      window.location.href = `mailto:stay@newhorizonvillas.gr?subject=${subject}&body=${body}`;
    }
  };

  return (
    <>
      {/* Email Capture Band */}
      <section className="bg-[#004C98] text-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block text-[#E2725B] text-xs uppercase tracking-[0.4em] font-bold mb-4">{ec.emailSubtitle}</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4">{ec.emailTitle}</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-light">{ec.emailBody}</p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <input
              type="email"
              required
              placeholder={ec.emailPlaceholder}
              aria-label={ec.emailPlaceholder}
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors rounded-sm"
            />
            <button
              type="submit"
              className="bg-[#E2725B] text-white px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#c55b45] transition-colors whitespace-nowrap rounded-sm min-h-[48px]"
            >
              {ec.emailBtn}
            </button>
          </form>
          <p className="text-white/40 text-[11px] uppercase tracking-wider">{ec.emailDisclaimer}</p>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand & Contact */}
            <div>
              <h3 className="text-white font-serif text-xl tracking-wider mb-4">NEW HORIZON VILLAS</h3>
              <p className="mb-2 text-sm">Fotimari, Kea Island</p>
              <p className="mb-2 text-sm">Cyclades, Greece</p>
              <a href="mailto:stay@newhorizonvillas.gr" className="hover:text-white transition-colors text-sm flex items-center gap-2 mb-4">
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                stay@newhorizonvillas.gr
              </a>
              {/* Social Links */}
              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-widest text-stone-500 mb-3">{ec.followLabel}</p>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://instagram.com/newhorizonvillas"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="New Horizon Villas on Instagram"
                    className="text-stone-500 hover:text-white transition-colors text-xs uppercase tracking-wider border border-stone-700 px-3 py-1.5 hover:border-stone-500"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/newhorizonvillas"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="New Horizon Villas on Facebook"
                    className="text-stone-500 hover:text-white transition-colors text-xs uppercase tracking-wider border border-stone-700 px-3 py-1.5 hover:border-stone-500"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-6 opacity-50">Legal Compliance</h4>
              <p className="mb-2 font-mono text-[11px] md:text-xs text-stone-500 tracking-tighter">{t('footer.ama')}</p>
              <p className="text-xs md:text-[11px] leading-relaxed max-w-xs text-stone-500 italic">{t('footer.climate_fee')}</p>
            </div>

            {/* Trust */}
            <div>
              <h4 className="text-white text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-6 opacity-50">Secure Booking</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-4 h-4 text-[#556B2F]" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[11px] md:text-xs uppercase tracking-widest">SSL Secured Connection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-4 h-4 text-[#556B2F]" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[11px] md:text-xs uppercase tracking-widest">Verified Payment Gateway</span>
                </div>
                {/* OTA Badges */}
                <div className="pt-3 mt-1 border-t border-stone-800">
                  <p className="text-[11px] uppercase tracking-widest text-stone-500 mb-3">Also on</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-[11px] font-medium text-stone-400 border border-stone-700 px-2 py-1">★ 4.97 Airbnb</span>
                    <span className="text-[11px] font-medium text-stone-400 border border-stone-700 px-2 py-1">9.6 Booking.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-xs space-y-4 md:space-y-0">
            <p>&copy; {currentYear} New Horizon Villas. {t('footer.rights')}</p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
