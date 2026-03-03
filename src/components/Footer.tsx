import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CreditCard } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Contact */}
          <div>
            <h3 className="text-white font-serif text-xl tracking-wider mb-4">NEW HORIZON VILLAS</h3>
            <p className="mb-2 text-sm">Fotimari, Kea Island</p>
            <p className="mb-2 text-sm">Cyclades, Greece</p>
            <a href="mailto:stay@newhorizonvillas.gr" className="hover:text-white transition-colors text-sm">stay@newhorizonvillas.gr</a>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-6 opacity-50">Legal Compliance</h4>
            <p className="mb-2 font-mono text-xs md:text-[10px] text-stone-500 tracking-tighter">{t('footer.ama')}</p>
            <p className="text-xs md:text-[11px] leading-relaxed max-w-xs text-stone-500 italic">{t('footer.climate_fee')}</p>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-white text-xs md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-6 opacity-50">Secure Booking</h4>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-4 h-4 text-[#556B2F]" strokeWidth={1.5} />
                <span className="text-xs md:text-[10px] uppercase tracking-widest">SSL Secured Connection</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="w-4 h-4 text-[#556B2F]" strokeWidth={1.5} />
                <span className="text-xs md:text-[10px] uppercase tracking-widest">Verified Payment Gateway</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-xs space-y-4 md:space-y-0">
          <p>&copy; {currentYear} New Horizon Villas. {t('footer.rights')}</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
