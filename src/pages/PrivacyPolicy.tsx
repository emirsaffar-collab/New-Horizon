import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    en: {
      seoTitle: "Privacy Policy | New Horizon Villas",
      seoDesc: "Privacy Policy for New Horizon Villas. Learn how we collect, use, and protect your personal information.",
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 3, 2026",
      sections: [
        {
          title: "1. Information We Collect",
          content: "We collect information you provide when making a booking or inquiry, including your name, email address, phone number, and payment details. We also collect information about your use of our website through cookies and analytics."
        },
        {
          title: "2. How We Use Your Information",
          content: "We use your information to process bookings, communicate with you about your reservation, improve our services, and send you relevant updates (with your consent). We never sell your personal information to third parties."
        },
        {
          title: "3. Data Security",
          content: "We implement appropriate technical and organizational security measures to protect your personal information. All payment transactions are processed through secure, encrypted connections."
        },
        {
          title: "4. Cookies",
          content: "Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings."
        },
        {
          title: "5. Your Rights",
          content: "Under GDPR and applicable data protection laws, you have the right to access, correct, or delete your personal data. You may also object to processing or request data portability. Contact us to exercise these rights."
        },
        {
          title: "6. Third-Party Services",
          content: "We use third-party services such as Google Maps, payment processors, and booking platforms. These services have their own privacy policies."
        },
        {
          title: "7. Contact Us",
          content: "For privacy-related inquiries, please contact us at stay@newhorizonvillas.gr"
        }
      ]
    },
    el: {
      seoTitle: "Πολιτική Απορρήτου | New Horizon Villas",
      seoDesc: "Πολιτική Απορρήτου για το New Horizon Villas. Μάθετε πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα.",
      title: "Πολιτική Απορρήτου",
      lastUpdated: "Τελευταία Ενημέρωση: 3 Μαρτίου 2026",
      sections: [
        {
          title: "1. Πληροφορίες που Συλλέγουμε",
          content: "Συλλέγουμε πληροφορίες που παρέχετε κατά την κράτηση ή το αίτημα, συμπεριλαμβανομένου του ονόματος, email, τηλεφώνου και στοιχείων πληρωμής. Επίσης συλλέγουμε πληροφορίες για τη χρήση του ιστότοπου μέσω cookies."
        },
        {
          title: "2. Πώς Χρησιμοποιούμε τις Πληροφορίες σας",
          content: "Χρησιμοποιούμε τις πληροφορίες σας για να επεξεργαστούμε κρατήσεις, να επικοινωνήσουμε για την κράτησή σας, να βελτιώσουμε τις υπηρεσίες μας και να σας στείλουμε σχετικές ενημερώσεις (με τη συγκατάθεσή σας). Δεν πουλάμε ποτέ τα προσωπικά σας δεδομένα."
        },
        {
          title: "3. Ασφάλεια Δεδομένων",
          content: "Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα ασφαλείας για την προστασία των προσωπικών σας πληροφοριών. Όλες οι συναλλαγές πληρωμών επεξεργάζονται μέσω ασφαλών, κρυπτογραφημένων συνδέσεων."
        },
        {
          title: "4. Cookies",
          content: "Ο ιστότοπός μας χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας περιήγησης και την ανάλυση της κυκλοφορίας. Μπορείτε να ελέγξετε τις προτιμήσεις cookies μέσω των ρυθμίσεων του προγράμματος περιήγησης."
        },
        {
          title: "5. Τα Δικαιώματά σας",
          content: "Σύμφωνα με το GDPR και τους ισχύοντες νόμους προστασίας δεδομένων, έχετε το δικαίωμα πρόσβασης, διόρθωσης ή διαγραφής των προσωπικών σας δεδομένων. Επικοινωνήστε μαζί μας για να ασκήσετε αυτά τα δικαιώματα."
        },
        {
          title: "6. Υπηρεσίες Τρίτων",
          content: "Χρησιμοποιούμε υπηρεσίες τρίτων όπως Google Maps, επεξεργαστές πληρωμών και πλατφόρμες κρατήσεων. Αυτές οι υπηρεσίες έχουν τις δικές τους πολιτικές απορρήτου."
        },
        {
          title: "7. Επικοινωνήστε Μαζί Μας",
          content: "Για ερωτήσεις σχετικά με το απόρρητο, επικοινωνήστε μαζί μας στο stay@newhorizonvillas.gr"
        }
      ]
    }
  };

  const c = language === 'en' ? content.en : content.el;

  return (
    <div className="bg-white min-h-screen py-20 md:py-24">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
        <link rel="canonical" href="https://emirsaffar-collab.github.io/New-Horizon/privacy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-[#004C98] text-sm mb-8 hover:text-[#003366]">
          ← {language === 'en' ? 'Back to Home' : 'Πίσω στην Αρχική'}
        </Link>
        
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-4">
          {c.title}
        </h1>
        <p className="text-sm text-stone-500 mb-12">{c.lastUpdated}</p>

        <div className="space-y-8">
          {c.sections.map((section, idx) => (
            <div key={idx} className="border-l-4 border-[#E2725B] pl-6">
              <h2 className="font-serif text-xl text-stone-800 mb-3">{section.title}</h2>
              <p className="text-stone-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
