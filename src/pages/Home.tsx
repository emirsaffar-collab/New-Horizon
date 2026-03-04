import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, Star, Wind, Sun, Anchor, MapPin, Wifi, Thermometer, Tv, ChefHat, Car, Eye, Utensils, PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "30%"]);

  const content = {
    en: {
      seoTitle: "New Horizon Villas | Luxury Vacation Rental in Kea, Greece",
      seoDesc: "Experience the closest Cycladic secret to Athens. New Horizon Villas offers a sanctuary of stone and sea in Fotimari, Kea. Book your direct stay today.",
      heroTitle: "New Horizon Villas",
      heroSubtitle: "Sanctuary of Stone & Sea",
      heroDesc: "The closest Cycladic secret to Athens. A retreat of silence, oak forests, and endless Aegean blue.",
      heroPriceLine: "From €380 / night · Sleeps up to 6 · Direct Booking Saves up to 15%",
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
      amenitiesTitle: "Everything You Need, Nothing You Don't",
      amenitiesSubtitle: "Included in Every Stay",
      amenityCategories: [
        {
          title: "Comfort",
          items: [
            { icon: "thermometer", label: "Air Conditioning (All Bedrooms)" },
            { icon: "wifi", label: "High-Speed Wi-Fi" },
            { icon: "tv", label: "Smart TV" },
            { icon: "bed", label: "Premium Linen & Towels" }
          ]
        },
        {
          title: "Kitchen",
          items: [
            { icon: "chef", label: "Fully Equipped Kitchen" },
            { icon: "utensils", label: "Nespresso Machine" },
            { icon: "utensils", label: "Dishwasher" },
            { icon: "utensils", label: "Outdoor BBQ Grill" }
          ]
        },
        {
          title: "Outdoors",
          items: [
            { icon: "eye", label: "Private Panoramic Terrace" },
            { icon: "utensils", label: "Outdoor Dining Area" },
            { icon: "car", label: "Private Parking (2 vehicles)" },
            { icon: "eye", label: "Panoramic Aegean Views" }
          ]
        },
        {
          title: "Extras",
          items: [
            { icon: "utensils", label: "Local Welcome Hamper" },
            { icon: "paw", label: "Pet Friendly" },
            { icon: "utensils", label: "Baby Cot (on request)" },
            { icon: "utensils", label: "Flexible Arrival / Departure" }
          ]
        }
      ],
      locationTeaser: "Perched in Fotimari",
      locationText: "High above the Aegean, where the sky meets the sea. A place to disconnect from the noise and reconnect with the horizon.",
      hostTitle: "Your Hosts",
      hostSubtitle: "The Story Behind New Horizon",
      hostCopy: "New Horizon Villas was born from a conviction: that the most extraordinary experiences are found just beyond the obvious. We discovered Fotimari on a June afternoon when the sea was the colour of a winter sky. We built slowly, sourcing the xerolithia stone from the island itself, restoring rather than replacing. We hope you find here what we found — a genuine horizon.",
      hostSignature: "— The Founders, New Horizon Villas",
      hostContact: "We personally respond to every enquiry",
      reviewsTitle: "Voices from the Villa",
      reviewsAggregate: "4.97 out of 5 · Based on 47 reviews across Airbnb & Booking.com",
      testimonials: [
        {
          quote: "A masterpiece of silence. The view left us breathless. Waking up to the Aegean on all sides, with no sound except the wind in the oak trees — this is what we'd been searching for.",
          author: "Elena & Marc",
          location: "Zurich",
          stay: "August 2024"
        },
        {
          quote: "Nothing in Mykonos or Santorini comes close to this kind of peace. The stone walls, the oak forest at dawn, the Aegean at sunset — we're already planning to return.",
          author: "James & Sophie",
          location: "London",
          stay: "June 2024"
        },
        {
          quote: "Arriving via the dirt road felt like crossing a threshold into another world. The villa itself exceeded every expectation — the terrace at night under the stars was unforgettable.",
          author: "François",
          location: "Paris",
          stay: "September 2024"
        },
        {
          quote: "We've stayed at many luxury villas in Greece. New Horizon is different — the seclusion is real. No one told us about Kea. We're keeping this secret.",
          author: "Marco & Valentina",
          location: "Milan",
          stay: "July 2024"
        }
      ],
      platformRatings: [
        { name: "Airbnb", score: "★ 4.97 / 5" },
        { name: "Booking.com", score: "9.6 / 10" }
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "How far is Kea (Tzia) from Athens?",
          a: "Kea is just one hour by ferry from Lavrio port, which is approximately 50 km from central Athens. New Horizon Villas is 3 km from Korissia, the island's main port."
        },
        {
          q: "What type of vehicle do I need to reach the villa?",
          a: "The final 1.5 km to the villa is an unpaved dirt road. We strongly recommend renting a vehicle with higher clearance — an SUV, Jeep, or 4×4. Small city cars are not suitable."
        },
        {
          q: "How many guests can stay at New Horizon Villas?",
          a: "New Horizon Villas accommodates up to 6 guests across 3 bedrooms."
        },
        {
          q: "Can I book directly without using Airbnb or Booking.com?",
          a: "Yes. Direct booking is available and comes with the best rate guarantee. Contact us at stay@newhorizonvillas.gr or via WhatsApp. The villa is also listed on Airbnb and Booking.com."
        },
        {
          q: "What amenities are included at the villa?",
          a: "New Horizon Villas is fully equipped for a seamless stay: private terrace with panoramic Aegean views, fully equipped kitchen (fridge, oven, Nespresso machine, dishwasher), air conditioning in all bedrooms, high-speed Wi-Fi, outdoor dining area, BBQ grill, private parking, Smart TV, premium linen and towels, and a complimentary welcome box of local Kean products on arrival."
        },
        {
          q: "Is there a private pool?",
          a: "New Horizon Villas does not have a private pool. In its place, the villa offers an expansive private terrace and direct proximity to the pristine waters of Gialiskari Beach (2 km away), which we consider one of the Aegean's finest natural swimming pools."
        },
        {
          q: "What is the minimum stay requirement?",
          a: "We require a minimum of 2 nights. During peak summer season (July–August) and Greek national holidays, a 4-night minimum applies."
        },
        {
          q: "What is the cancellation policy?",
          a: "Free cancellation up to 30 days before check-in for a full refund. Cancellations 14–30 days prior receive a 50% refund. Cancellations within 14 days of check-in are non-refundable. We recommend travel insurance for all guests."
        },
        {
          q: "Is the villa pet-friendly?",
          a: "Yes. New Horizon Villas warmly welcomes well-behaved dogs and cats. Please let us know in advance so we can prepare accordingly. A refundable pet deposit of €100 applies."
        },
        {
          q: "What is the best time of year to visit Kea?",
          a: "Kea is exceptional from late April through October. May–June and September–October offer the ideal combination: warm swimming weather (24–28°C), no crowds, and lush green landscape. July–August is peak season — the Aegean is at its most vivid blue, but book well in advance as availability is very limited."
        },
        {
          q: "Can the villa accommodate a wedding or special event?",
          a: "The terrace and grounds of New Horizon Villas provide a breathtaking setting for intimate gatherings of up to 20 guests. We partner with local caterers, florists, and music professionals on Kea. Contact us at stay@newhorizonvillas.gr to discuss your event."
        },
        {
          q: "What is the Climate Crisis Resilience Fee?",
          a: "The Climate Crisis Resilience Fee (€10–€15 per night) is a mandatory charge required by Greek law, applicable to all short-term rental properties in Greece."
        }
      ]
    },
    el: {
      seoTitle: "New Horizon Villas | Πολυτελής Ενοικίαση στην Κέα",
      seoDesc: "Ζήστε το κοντινότερο Κυκλαδίτικο μυστικό στην Αθήνα. Το New Horizon Villas προσφέρει ένα καταφύγιο πέτρας και θάλασσας στο Φωτημάρι της Κέας.",
      heroTitle: "New Horizon Villas",
      heroSubtitle: "Καταφύγιο Πέτρας & Θάλασσας",
      heroDesc: "Το κοντινότερο Κυκλαδίτικο μυστικό στην Αθήνα. Ένα καταφύγιο σιωπής, δρυοδασών και απέραντου γαλάζιου.",
      heroPriceLine: "Από €380 / διανυκτέρευση · Έως 6 επισκέπτες · Απευθείας κράτηση έως -15%",
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
      amenitiesTitle: "Ό,τι Χρειάζεστε, Τίποτα Παραπάνω",
      amenitiesSubtitle: "Συμπεριλαμβάνεται σε Κάθε Διαμονή",
      amenityCategories: [
        {
          title: "Άνεση",
          items: [
            { icon: "thermometer", label: "Κλιματισμός (Όλα τα Υπνοδωμάτια)" },
            { icon: "wifi", label: "Υψηλής Ταχύτητας Wi-Fi" },
            { icon: "tv", label: "Smart TV" },
            { icon: "bed", label: "Premium Κλινοσκεπάσματα & Πετσέτες" }
          ]
        },
        {
          title: "Κουζίνα",
          items: [
            { icon: "chef", label: "Πλήρως Εξοπλισμένη Κουζίνα" },
            { icon: "utensils", label: "Μηχανή Nespresso" },
            { icon: "utensils", label: "Πλυντήριο Πιάτων" },
            { icon: "utensils", label: "Υπαίθριο BBQ" }
          ]
        },
        {
          title: "Υπαίθριοι Χώροι",
          items: [
            { icon: "eye", label: "Ιδιωτική Πανοραμική Βεράντα" },
            { icon: "utensils", label: "Υπαίθρια Τραπεζαρία" },
            { icon: "car", label: "Ιδιωτικό Πάρκινγκ (2 αυτοκίνητα)" },
            { icon: "eye", label: "Πανοραμική Θέα Αιγαίου" }
          ]
        },
        {
          title: "Extras",
          items: [
            { icon: "utensils", label: "Καλάθι Καλωσορίσματος με Τοπικά Προϊόντα" },
            { icon: "paw", label: "Φιλικό προς Κατοικίδια" },
            { icon: "utensils", label: "Κούνια Μωρού (κατόπιν αιτήματος)" },
            { icon: "utensils", label: "Ευέλικτη Άφιξη / Αναχώρηση" }
          ]
        }
      ],
      locationTeaser: "Σκαρφαλωμένο στο Φωτημάρι",
      locationText: "Ψηλά πάνω από το Αιγαίο, εκεί που ο ουρανός συναντά τη θάλασσα. Ένα μέρος για να αποσυνδεθείτε από το θόρυβο και να επανασυνδεθείτε με τον ορίζοντα.",
      hostTitle: "Οι Οικοδεσπότες σας",
      hostSubtitle: "Η Ιστορία Πίσω από το New Horizon",
      hostCopy: "Το New Horizon Villas γεννήθηκε από μια πεποίθηση: ότι οι πιο εκπληκτικές εμπειρίες βρίσκονται ακριβώς πέρα από το προφανές. Ανακαλύψαμε το Φωτημάρι ένα απόγευμα Ιουνίου, όταν η θάλασσα είχε το χρώμα χειμερινού ουρανού. Χτίσαμε αργά, με ξερολιθιά από το ίδιο το νησί, αποκαθιστώντας αντί να αντικαθιστούμε. Ελπίζουμε να βρείτε εδώ αυτό που βρήκαμε εμείς — έναν αυθεντικό ορίζοντα.",
      hostSignature: "— Οι Ιδρυτές, New Horizon Villas",
      hostContact: "Απαντάμε προσωπικά σε κάθε ερώτημα",
      reviewsTitle: "Φωνές από τη Βίλα",
      reviewsAggregate: "4.97 από 5 · Βασισμένο σε 47 αξιολογήσεις στο Airbnb & Booking.com",
      testimonials: [
        {
          quote: "Ένα αριστούργημα σιωπής. Η θέα μας άφησε άφωνους. Να ξυπνάς με το Αιγαίο από παντού, με μόνο ήχο τον άνεμο στις βελανιδιές — αυτό αναζητούσαμε.",
          author: "Έλενα & Μαρκ",
          location: "Ζυρίχη",
          stay: "Αύγουστος 2024"
        },
        {
          quote: "Τίποτα στη Μύκονο ή Σαντορίνη δεν πλησιάζει αυτή την ηρεμία. Οι πέτρινοι τοίχοι, το δάσος δρυός τα χαράματα, το Αιγαίο στο ηλιοβασίλεμα — ήδη σχεδιάζουμε να επιστρέψουμε.",
          author: "Τζέιμς & Σόφι",
          location: "Λονδίνο",
          stay: "Ιούνιος 2024"
        },
        {
          quote: "Η άφιξη μέσω του χωματόδρομου ήταν σαν να περνάς ένα κατώφλι σε άλλον κόσμο. Η βίλα ξεπέρασε κάθε προσδοκία — η βεράντα τη νύχτα κάτω από τα αστέρια ήταν αξέχαστη.",
          author: "Φρανσουά",
          location: "Παρίσι",
          stay: "Σεπτέμβριος 2024"
        },
        {
          quote: "Έχουμε μείνει σε πολλές πολυτελείς βίλες στην Ελλάδα. Το New Horizon είναι διαφορετικό — η απομόνωση είναι αληθινή. Κανείς δεν μας είπε για την Κέα. Κρατάμε αυτό το μυστικό.",
          author: "Μάρκο & Βαλεντίνα",
          location: "Μιλάνο",
          stay: "Ιούλιος 2024"
        }
      ],
      platformRatings: [
        { name: "Airbnb", score: "★ 4.97 / 5" },
        { name: "Booking.com", score: "9.6 / 10" }
      ],
      faqTitle: "Συχνές Ερωτήσεις",
      faqs: [
        {
          q: "Πόσο μακριά είναι η Κέα (Τζιά) από την Αθήνα;",
          a: "Η Κέα απέχει μόλις μία ώρα με πλοίο από το λιμάνι του Λαυρίου, το οποίο βρίσκεται περίπου 50 χλμ. από το κέντρο της Αθήνας. Το New Horizon Villas βρίσκεται 3 χλμ. από την Κορησσία, το κύριο λιμάνι του νησιού."
        },
        {
          q: "Τι είδους όχημα χρειάζομαι για να φτάσω στη βίλα;",
          a: "Τα τελευταία 1,5 χλμ. προς τη βίλα είναι χωματόδρομος. Συνιστούμε ανεπιφύλακτα την ενοικίαση οχήματος με μεγαλύτερο ύψος — SUV, Jeep ή 4×4. Τα μικρά αυτοκίνητα πόλης δεν είναι κατάλληλα."
        },
        {
          q: "Πόσοι επισκέπτες μπορούν να φιλοξενηθούν στο New Horizon Villas;",
          a: "Το New Horizon Villas φιλοξενεί έως 6 επισκέπτες σε 3 υπνοδωμάτια."
        },
        {
          q: "Μπορώ να κάνω απευθείας κράτηση χωρίς Airbnb ή Booking.com;",
          a: "Ναι. Η απευθείας κράτηση είναι διαθέσιμη και συνοδεύεται από εγγύηση καλύτερης τιμής. Επικοινωνήστε μαζί μας στο stay@newhorizonvillas.gr ή μέσω WhatsApp. Η βίλα είναι επίσης καταχωρισμένη στο Airbnb και το Booking.com."
        },
        {
          q: "Ποιες παροχές περιλαμβάνονται στη βίλα;",
          a: "Το New Horizon Villas είναι πλήρως εξοπλισμένο: ιδιωτική βεράντα με πανοραμική θέα Αιγαίου, πλήρως εξοπλισμένη κουζίνα (ψυγείο, φούρνος, μηχανή Nespresso, πλυντήριο πιάτων), κλιματισμός σε όλα τα υπνοδωμάτια, υψηλής ταχύτητας Wi-Fi, υπαίθρια τραπεζαρία, BBQ, ιδιωτικό πάρκινγκ, Smart TV, premium κλινοσκεπάσματα και πετσέτες, και δωρεάν καλάθι καλωσορίσματος με τοπικά προϊόντα Κέας."
        },
        {
          q: "Υπάρχει ιδιωτική πισίνα;",
          a: "Το New Horizon Villas δεν διαθέτει ιδιωτική πισίνα. Στη θέση της, η βίλα προσφέρει μια ευρύχωρη ιδιωτική βεράντα και άμεση εγγύτητα με τα παρθένα νερά της παραλίας Γιαλισκάρι (2 χλμ.), που θεωρούμε μία από τις καλύτερες φυσικές πισίνες του Αιγαίου."
        },
        {
          q: "Ποια είναι η ελάχιστη διάρκεια παραμονής;",
          a: "Απαιτούμε ελάχιστη παραμονή 2 διανυκτερεύσεων. Κατά την περίοδο αιχμής (Ιούλιος–Αύγουστος) και ελληνικές εθνικές αργίες, ισχύει ελάχιστη παραμονή 4 διανυκτερεύσεων."
        },
        {
          q: "Ποια είναι η πολιτική ακύρωσης;",
          a: "Δωρεάν ακύρωση έως 30 ημέρες πριν από την άφιξη με πλήρη επιστροφή. Ακυρώσεις 14–30 ημέρες πριν λαμβάνουν επιστροφή 50%. Ακυρώσεις εντός 14 ημερών από την άφιξη δεν επιστρέφονται. Συνιστούμε ταξιδιωτική ασφάλεια σε όλους τους επισκέπτες."
        },
        {
          q: "Είναι φιλικό προς κατοικίδια;",
          a: "Ναι. Το New Horizon Villas καλωσορίζει σκύλους και γάτες. Παρακαλούμε ενημερώστε μας εκ των προτέρων για να προετοιμαστούμε ανάλογα. Ισχύει επιστρεπτέα εγγύηση κατοικίδιου €100."
        },
        {
          q: "Ποια είναι η καλύτερη εποχή για να επισκεφθώ την Κέα;",
          a: "Η Κέα είναι εκπληκτική από τα τέλη Απριλίου έως τον Οκτώβριο. Μάιος–Ιούνιος και Σεπτέμβριος–Οκτώβριος προσφέρουν τον ιδανικό συνδυασμό: ζεστός καιρός για κολύμπι (24–28°C), χωρίς πλήθη και με καταπράσινο τοπίο. Ιούλιος–Αύγουστος είναι η κορυφαία σεζόν — κάντε κράτηση πολύ νωρίς καθώς η διαθεσιμότητα είναι πολύ περιορισμένη."
        },
        {
          q: "Μπορεί η βίλα να φιλοξενήσει γαμήλια εκδήλωση ή ειδική συνάντηση;",
          a: "Η βεράντα και ο χώρος του New Horizon Villas προσφέρουν ένα εντυπωσιακό σκηνικό για οικείες συγκεντρώσεις έως 20 ατόμων. Συνεργαζόμαστε με τοπικούς γαστρονόμους, ανθοπώλες και μουσικούς στην Κέα. Επικοινωνήστε μαζί μας στο stay@newhorizonvillas.gr για να συζητήσουμε την εκδήλωσή σας."
        },
        {
          q: "Τι είναι το Τέλος Ανθεκτικότητας στην Κλιματική Κρίση;",
          a: "Το Τέλος Ανθεκτικότητας στην Κλιματική Κρίση (€10–€15 ανά διανυκτέρευση) είναι υποχρεωτική χρέωση που ορίζεται από την ελληνική νομοθεσία για όλα τα βραχυπρόθεσμα ενοίκια στην Ελλάδα."
        }
      ]
    }
  };

  const c = language === 'en' ? content.en : content.el;

  const AmenityIcon = ({ icon }: { icon: string }) => {
    const cls = "w-4 h-4 text-[#556B2F] flex-shrink-0 mt-0.5";
    if (icon === 'wifi') return <Wifi className={cls} strokeWidth={1.5} aria-hidden="true" />;
    if (icon === 'thermometer') return <Thermometer className={cls} strokeWidth={1.5} aria-hidden="true" />;
    if (icon === 'tv') return <Tv className={cls} strokeWidth={1.5} aria-hidden="true" />;
    if (icon === 'chef') return <ChefHat className={cls} strokeWidth={1.5} aria-hidden="true" />;
    if (icon === 'car') return <Car className={cls} strokeWidth={1.5} aria-hidden="true" />;
    if (icon === 'eye') return <Eye className={cls} strokeWidth={1.5} aria-hidden="true" />;
    if (icon === 'paw') return <PawPrint className={cls} strokeWidth={1.5} aria-hidden="true" />;
    return <Utensils className={cls} strokeWidth={1.5} aria-hidden="true" />;
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
        <link rel="canonical" href="https://emirsaffar-collab.github.io/New-Horizon/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emirsaffar-collab.github.io/New-Horizon/" />
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
            "@type": "VacationRental",
            "name": "New Horizon Villas",
            "description": c.seoDesc,
            "url": "https://emirsaffar-collab.github.io/New-Horizon/",
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
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.97",
              "reviewCount": "47",
              "bestRating": "5",
              "worstRating": "1"
            },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Panoramic Aegean Views", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Free Private Parking", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Private Entrance", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Fully Equipped Kitchen", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true }
            ],
            "numberOfRooms": 3,
            "occupancy": {
              "@type": "QuantitativeValue",
              "value": 6,
              "unitCode": "C62"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "New Horizon Villas",
            "url": "https://emirsaffar-collab.github.io/New-Horizon/",
            "email": "stay@newhorizonvillas.gr",
            "logo": "https://emirsaffar-collab.github.io/New-Horizon/favicon.svg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fotimari, Kea",
              "addressRegion": "Cyclades",
              "addressCountry": "GR"
            },
            "areaServed": "GR"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": c.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
                srcSet="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=640&q=80 640w,
                        https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1280&q=80 1280w,
                        https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80 1920w"
                sizes="100vw"
                alt="New Horizon Villas luxury Mediterranean property with panoramic Aegean Sea views at sunset in Kea, Greece"
                width={1920}
                height={1280}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                fetchPriority="high"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-white/60 text-[11px] uppercase tracking-widest mt-6"
          >
            {c.heroPriceLine}
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-stone-100 divide-x divide-y md:divide-y-0 divide-stone-100">
            <div className="flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500">
              <Sun className="w-8 h-8 md:w-8 md:h-8 text-[#E2725B] flex-shrink-0" strokeWidth={1} aria-hidden="true" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-400 font-bold text-center leading-tight">{c.highlights.view}</span>
            </div>
            <div className="flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500">
              <Wind className="w-8 h-8 md:w-8 md:h-8 text-[#556B2F] flex-shrink-0" strokeWidth={1} aria-hidden="true" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-400 font-bold text-center leading-tight">{c.highlights.nature}</span>
            </div>
            <div className="flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500">
              <Anchor className="w-8 h-8 md:w-8 md:h-8 text-[#004C98] flex-shrink-0" strokeWidth={1} aria-hidden="true" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-400 font-bold text-center leading-tight">{c.highlights.design}</span>
            </div>
            <div className="flex flex-col items-center space-y-3 md:space-y-4 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500">
              <MapPin className="w-8 h-8 md:w-8 md:h-8 text-stone-300 flex-shrink-0" strokeWidth={1} aria-hidden="true" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-400 font-bold text-center leading-tight">{c.highlights.privacy}</span>
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
                  alt="Traditional xerolithia stone architecture characteristic of New Horizon Villas in Kea, Cyclades"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
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
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#E2725B] text-xs uppercase tracking-[0.4em] font-bold block mb-4">
              {c.amenitiesSubtitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800">
              {c.amenitiesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {c.amenityCategories.map((cat, ci) => (
              <div key={ci} className="border border-stone-100 p-6 rounded-sm">
                <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-5">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2.5">
                      <AmenityIcon icon={item.icon} />
                      <span className="text-sm text-stone-600 leading-snug">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="relative py-20 md:py-32 bg-[#004C98] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img
            src="https://picsum.photos/seed/aegean_sea_texture/1920/1080"
            alt="Aegean Sea water texture background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover mix-blend-overlay"
            referrerPolicy="no-referrer"
            loading="lazy"
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

      {/* Host Story Section */}
      <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2 space-y-6 md:space-y-8 order-2 md:order-1">
              <span className="text-[#E2725B] text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold block">
                {c.hostSubtitle}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 leading-tight">
                {c.hostTitle}
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
                {c.hostCopy}
              </p>
              <p className="font-serif text-stone-500 italic text-base">{c.hostSignature}</p>
              <a
                href="mailto:stay@newhorizonvillas.gr"
                className="inline-flex items-center text-[#004C98] text-sm hover:text-[#003366] transition-colors"
              >
                {c.hostContact} →
              </a>
            </div>
            <div className="md:w-1/2 w-full order-1 md:order-2">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto">
                <img
                  src="https://picsum.photos/seed/greek_villa_owners/800/1000"
                  alt="New Horizon Villas founders and property"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#E2725B]/10 -z-10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-4">{c.reviewsTitle}</h2>
            <div className="flex justify-center items-center space-x-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-[#E2725B] fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="text-xs uppercase tracking-widest text-stone-400">{c.reviewsAggregate}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.testimonials.map((t, i) => (
              <div key={i} className="bg-stone-50 border border-stone-100 p-6 rounded-sm flex flex-col">
                <div className="flex space-x-0.5 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-3 h-3 text-[#E2725B] fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="font-serif text-stone-700 italic leading-relaxed text-sm flex-grow mb-5">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-stone-200 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-600">{t.author}</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">{t.location} · {t.stay}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Platform Badges */}
          <div className="flex items-center justify-center space-x-8 mt-12 pt-12 border-t border-stone-100">
            {c.platformRatings.map((p, i) => (
              <div key={i} className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{p.name}</p>
                <p className="text-sm font-medium text-stone-600">{p.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-stone-50" aria-label={c.faqTitle}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-800 text-center mb-10 md:mb-12">
            {c.faqTitle}
          </h2>
          <div className="space-y-2">
            {c.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-stone-100 rounded-sm overflow-hidden">
                <summary className="flex items-center justify-between px-5 md:px-6 py-4 md:py-5 cursor-pointer list-none font-medium text-stone-800 hover:text-[#004C98] transition-colors text-sm md:text-base">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-2xl text-stone-300 group-open:rotate-45 transition-transform duration-200 select-none leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="px-5 md:px-6 pb-5 text-stone-600 text-sm md:text-base leading-relaxed font-light border-t border-stone-50 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
