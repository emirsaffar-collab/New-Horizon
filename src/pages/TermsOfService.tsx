import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  const { language } = useLanguage();

  const content = {
    en: {
      seoTitle: "Terms of Service | New Horizon Villas",
      seoDesc: "Terms of Service for New Horizon Villas. Read our booking terms, cancellation policies, and guest responsibilities.",
      title: "Terms of Service",
      lastUpdated: "Last Updated: March 3, 2026",
      sections: [
        {
          title: "1. Booking and Reservations",
          content: "All bookings are subject to availability and confirmation. A deposit is required to secure your reservation. Full payment is due 30 days before arrival. Direct bookings through our website receive the best rate guarantee."
        },
        {
          title: "2. Cancellation Policy",
          content: "Cancellations made more than 30 days before arrival receive a full refund minus a 10% processing fee. Cancellations made 15-30 days before arrival receive a 50% refund. Cancellations made less than 15 days before arrival are non-refundable. We recommend travel insurance."
        },
        {
          title: "3. Check-in and Check-out",
          content: "Check-in time is from 15:00 onwards. Check-out time is by 11:00. Early check-in or late check-out may be available upon request and subject to additional fees. Please notify us of your estimated arrival time."
        },
        {
          title: "4. Guest Responsibilities",
          content: "Guests are responsible for any damage to the property beyond normal wear and tear. Smoking is not permitted inside the villa. Parties or events require prior approval. Maximum occupancy must be respected. Guests must comply with local noise ordinances and respect the privacy of neighbors."
        },
        {
          title: "5. Payment and Fees",
          content: "All prices are in Euros (€) unless otherwise stated. A refundable security deposit may be required. Additional charges may apply for extra cleaning, late checkout, or damages. Greek Climate Resilience Fee (€10-€15 per night) is collected separately as required by law."
        },
        {
          title: "6. Property Access",
          content: "The final 1.5km to the property is via an unpaved road. An SUV or 4x4 vehicle is strongly recommended. We are not responsible for vehicle damage. Detailed directions are provided upon booking confirmation."
        },
        {
          title: "7. Liability",
          content: "New Horizon Villas is not liable for accidents, injuries, or loss of personal property during your stay. Guests use the property and facilities at their own risk. We recommend comprehensive travel and health insurance."
        },
        {
          title: "8. Force Majeure",
          content: "We are not liable for failure to perform our obligations due to circumstances beyond our control, including natural disasters, government restrictions, or public health emergencies."
        },
        {
          title: "9. Modification of Terms",
          content: "We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of modified terms."
        },
        {
          title: "10. Contact",
          content: "For questions regarding these terms, contact us at stay@newhorizonvillas.gr"
        }
      ]
    },
    el: {
      seoTitle: "Όροι Χρήσης | New Horizon Villas",
      seoDesc: "Όροι Χρήσης για το New Horizon Villas. Διαβάστε τους όρους κράτησης, πολιτικές ακύρωσης και υποχρεώσεις επισκεπτών.",
      title: "Όροι Χρήσης",
      lastUpdated: "Τελευταία Ενημέρωση: 3 Μαρτίου 2026",
      sections: [
        {
          title: "1. Κράτηση και Επιβεβαίωση",
          content: "Όλες οι κρατήσεις υπόκεινται σε διαθεσιμότητα και επιβεβαίωση. Απαιτείται προκαταβολή για την εξασφάλιση της κράτησης. Η πλήρης πληρωμή οφείλεται 30 ημέρες πριν από την άφιξη. Οι άμεσες κρατήσεις μέσω του ιστότοπού μας λαμβάνουν εγγύηση καλύτερης τιμής."
        },
        {
          title: "2. Πολιτική Ακύρωσης",
          content: "Ακυρώσεις άνω των 30 ημερών πριν την άφιξη λαμβάνουν πλήρη επιστροφή χρημάτων μείον 10% προμήθεια επεξεργασίας. Ακυρώσεις 15-30 ημέρες πριν την άφιξη λαμβάνουν επιστροφή 50%. Ακυρώσεις κάτω των 15 ημερών δεν επιστρέφονται. Συνιστούμε ταξιδιωτική ασφάλεια."
        },
        {
          title: "3. Check-in και Check-out",
          content: "Ώρα check-in από 15:00 και μετά. Ώρα check-out έως 11:00. Πρώιμο check-in ή όψιμο check-out διατίθεται κατόπιν αιτήματος με πρόσθετη χρέωση. Παρακαλούμε ενημερώστε μας για την εκτιμώμενη ώρα άφιξής σας."
        },
        {
          title: "4. Υποχρεώσεις Επισκεπτών",
          content: "Οι επισκέπτες είναι υπεύθυνοι για τυχόν ζημιές στην ιδιοκτησία πέραν της κανονικής φθοράς. Το κάπνισμα δεν επιτρέπεται εντός της βίλας. Πάρτι ή εκδηλώσεις απαιτούν προηγούμενη έγκριση. Η μέγιστη χωρητικότητα πρέπει να τηρείται. Οι επισκέπτες πρέπει να συμμορφώνονται με τους τοπικούς κανονισμούς θορύβου."
        },
        {
          title: "5. Πληρωμή και Τέλη",
          content: "Όλες οι τιμές είναι σε Ευρώ (€). Μπορεί να απαιτηθεί επιστρεπτέα εγγύηση. Πρόσθετες χρεώσεις μπορεί να ισχύουν για επιπλέον καθαρισμό, όψιμο check-out ή ζημιές. Τέλος Κλιματικής Ανθεκτικότητας (€10-€15 ανά διανυκτέρευση) εισπράττεται ξεχωριστά όπως απαιτείται από το νόμο."
        },
        {
          title: "6. Πρόσβαση στην Ιδιοκτησία",
          content: "Τα τελευταία 1,5 χλμ προς την ιδιοκτησία είναι μέσω χωματόδρομου. Συνιστάται ανεπιφύλακτα όχημα SUV ή 4x4. Δεν ευθυνόμαστε για ζημιές οχημάτων. Λεπτομερείς οδηγίες παρέχονται με την επιβεβαίωση κράτησης."
        },
        {
          title: "7. Ευθύνη",
          content: "Το New Horizon Villas δεν ευθύνεται για ατυχήματα, τραυματισμούς ή απώλεια προσωπικών αντικειμένων κατά τη διάρκεια της διαμονής σας. Οι επισκέπτες χρησιμοποιούν την ιδιοκτησία με δική τους ευθύνη. Συνιστούμε ολοκληρωμένη ταξιδιωτική και υγειονομική ασφάλιση."
        },
        {
          title: "8. Ανωτέρα Βία",
          content: "Δεν ευθυνόμαστε για αδυναμία εκπλήρωσης των υποχρεώσεών μας λόγω περιστάσεων πέραν του ελέγχου μας, συμπεριλαμβανομένων φυσικών καταστροφών, κυβερνητικών περιορισμών ή επειγουσών καταστάσεων δημόσιας υγείας."
        },
        {
          title: "9. Τροποποίηση Όρων",
          content: "Διατηρούμε το δικαίωμα τροποποίησης αυτών των όρων ανά πάσα στιγμή. Οι αλλαγές θα δημοσιεύονται σε αυτή τη σελίδα με ενημερωμένη ημερομηνία. Η συνεχιζόμενη χρήση των υπηρεσιών μας συνιστά αποδοχή των τροποποιημένων όρων."
        },
        {
          title: "10. Επικοινωνία",
          content: "Για ερωτήσεις σχετικά με αυτούς τους όρους, επικοινωνήστε μαζί μας στο stay@newhorizonvillas.gr"
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
        <link rel="canonical" href="https://emirsaffar-collab.github.io/New-Horizon/terms" />
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
            <div key={idx} className="border-l-4 border-[#004C98] pl-6">
              <h2 className="font-serif text-xl text-stone-800 mb-3">{section.title}</h2>
              <p className="text-stone-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
