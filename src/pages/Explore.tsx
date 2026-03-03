import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Map, Coffee, Waves, Clock, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function Explore() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      seoTitle: "Explore Kea (Tzia) | Beaches, Dining & Hiking",
      seoDesc: "Discover the secrets of Kea (Tzia). From the ancient oak forests to the crystal clear waters of Gialiskari and the nightlife of Vourkari.",
      title: "Explore Kea",
      subtitle: "The Cyclades’ Best-Kept Secret",
      intro: "Just one hour by ferry from the Athenian mainland, Kea (or Tzia) offers a uniquely authentic Greek experience. Unlike the arid landscapes of its famous neighbors, Kea is a lush sanctuary defined by ancient oak forests, terraced olive groves, and traditional stone kathikies. Here, luxury is found in absolute peace, pristine nature, and unhurried rhythms.",
      sections: [
        {
          title: "Sun & Sea: Our Coastal Gems",
          intro: "Kea’s deeply folded coastline hides dozens of pristine beaches, ranging from fully organized sandy bays to wild, secluded coves.",
          items: [
            { 
              name: "Gialiskari (Γιαλισκάρι)", 
              desc: "The closest beach to your villa. A stunning Blue Flag bay where eucalyptus and pine trees stretch almost to the water's edge, offering natural shade. Perfect for a relaxed afternoon at the Eora Seaside Restaurant.",
              amenities: ["Parking", "Wi-Fi", "Pet-friendly"]
            },
            { 
              name: "Otzias (Οτζιάς)", 
              desc: "A deeply protected, circular bay with shallow waters. It is completely shielded from the northern Meltemi winds, making it the island's premier destination for families.",
              amenities: ["Parking", "Pet-friendly"]
            },
            { 
              name: "Koundouros (Κούνδουρος)", 
              desc: "The cosmopolitan heart of Kea's beach scene. Crystal-clear turquoise water, premium sunbeds, and water sports at neighboring Koundouraki.",
              amenities: ["Parking", "Wi-Fi", "Air Conditioning"]
            },
            { 
              name: "Xyla & Spathi (Ξύλα & Σπαθί)", 
              desc: "For those seeking absolute isolation. Reached via dirt roads, these wild beaches reward travelers with deep golden sand and unrivaled privacy.",
              amenities: ["Pet-friendly"]
            }
          ]
        },
        {
          title: "Gastronomy: From Dockside to Hilltop",
          intro: "Kea's culinary scene is a sophisticated fusion of traditional Cycladic flavors and modern Mediterranean technique.",
          items: [
            { 
              name: "Philippos Grill & Tavern (Fotimari)", 
              desc: "Located right in our neighborhood, this local institution is famous for its slow-roasted piglet (gourounopoulo) and charcoal-grilled lamb chops.",
              amenities: ["Wi-Fi", "Parking", "Pet-friendly", "Air Conditioning"]
            },
            { 
              name: "Aristos (Vourkari)", 
              desc: "Set on the cosmopolitan marina, this is the island's premier spot for fresh fish soup and exquisite lobster spaghetti.",
              amenities: ["Wi-Fi", "Pet-friendly", "Air Conditioning"]
            },
            { 
              name: "I Strofi tou Mimi (Vourkari)", 
              desc: "Experience the ultimate island dinner where the tables are set so close to the water's edge that the Aegean literally laps at your feet.",
              amenities: ["Wi-Fi", "Pet-friendly"]
            },
            { 
              name: "To Steki (Ioulida)", 
              desc: "Nestled in the car-free capital, offering deeply traditional, rustic dishes like local rabbit and stuffed peppers (gemista).",
              amenities: ["Wi-Fi", "Air Conditioning"]
            }
          ]
        },
        {
          title: "Culture & Adventure",
          intro: "Beyond the beaches, Kea is a playground for hikers, history enthusiasts, and advanced divers.",
          items: [
            { name: "The Ancient Trails (Τα Αρχαία Μονοπάτια)", desc: "Explore 81 km of marked, stone-paved ancient pathways. Trails range from easy family strolls to challenging treks; Route 1 (Ioulida to Karthea) is a moderate 2-hour hike through lush oak forests." },
            { name: "Ancient Karthea (Αρχαία Καρθαία)", desc: "One of Kea's four ancient city-states, flourishing from the Geometric period until the early Byzantine era. Reached only by foot or boat, this site features Doric temples of Apollo and Athena perched above a pristine double beach." },
            { name: "The Lion of Kea (Ο Λέων της Τζιας)", desc: "A colossal, enigmatic lion carved into the bedrock around 600 BC, accessible via a short, scenic walk from the capital, Ioulida." },
            { name: "World-Class Diving (Καταδύσεις Παγκόσμιας Κλάσης)", desc: "A marine museum. The HMHS Britannic (Titanic's sister ship) at 120m is strictly for elite technical divers, while the SS Burdigala (70m) and the paddle-steamer Patris (28m) offer accessible options for various certification levels." }
          ]
        }
      ],
      logisticsTitle: "Quick Logistics from New Horizon Villas",
      logisticsHeaders: ["Destination", "Distance", "Highlight"],
      logisticsItems: [
        { dest: "Vourkari Marina", dist: "1 km", feat: "Cosmopolitan dining, yachting, cocktails" },
        { dest: "Gialiskari Beach", dist: "2 km", feat: "Blue Flag, pine trees, seaside dining" },
        { dest: "Korissia (Port)", dist: "3 km", feat: "Ferry access, bakeries, supermarkets" },
        { dest: "Otzias Beach", dist: "5 km", feat: "Wind-protected, shallow water, family-friendly" },
        { dest: "Ioulida (Chora)", dist: "6 km", feat: "Historic capital, ancient pathways, traditional tavernas" }
      ]
    },
    el: {
      seoTitle: "Εξερευνήστε την Κέα (Τζιά) | Παραλίες, Φαγητό & Πεζοπορία",
      seoDesc: "Ανακαλύψτε τα μυστικά της Κέας (Τζιά). Από τα αρχαία δρυοδάση μέχρι τα κρυστάλλινα νερά στο Γιαλισκάρι και τη νυχτερινή ζωή στο Βουρκάρι.",
      title: "Ανακαλύψτε την Κέα (Τζια)",
      subtitle: "Το Καλύτερα Κρυμμένο Μυστικό των Κυκλάδων",
      intro: "Μόλις μία ώρα με το πλοίο από την Αττική, η Κέα (ή Τζια) προσφέρει μια μοναδικά αυθεντική ελληνική εμπειρία. Σε αντίθεση με τα άνυδρα τοπία των διάσημων γειτόνων της, η Τζια είναι ένα καταπράσινο καταφύγιο που χαρακτηρίζεται από αρχαία δάση βελανιδιάς, ελαιώνες και παραδοσιακές πέτρινες καθοικιές. Εδώ, η πολυτέλεια κρύβεται στην απόλυτη γαλήνη, την παρθένα φύση και τους χαλαρούς ρυθμούς.",
      sections: [
        {
          title: "Ήλιος & Θάλασσα: Τα Διαμάντια της Ακτογραμμής μας",
          intro: "Η δαντελωτή ακτογραμμή της Κέας κρύβει δεκάδες παρθένες παραλίες, από πλήρως οργανωμένους αμμώδεις κόλπους μέχρι άγριους, απομονωμένους ορμίσκους.",
          items: [
            { 
              name: "Γιαλισκάρι (Gialiskari)", 
              desc: "Η πλησιέστερη παραλία στη βίλα σας. Ένας εκπληκτικός κόλπος με Γαλάζια Σημαία, όπου ευκάλυπτοι και πεύκα φτάνουν σχεδόν μέχρι το κύμα, προσφέροντας φυσική σκιά. Ιδανικό για ένα χαλαρό απόγευμα στο Eora Seaside Restaurant.",
              amenities: ["Πάρκινγκ", "Wi-Fi", "Φιλικό προς κατοικίδια"]
            },
            { 
              name: "Οτζιάς (Otzias)", 
              desc: "Ένας καλά προστατευμένος, κυκλικός κόλπος με ρηχά νερά. Είναι πλήρως θωρακισμένος από τα μελτέμια, καθιστώντας τον τον κορυφαίο προορισμό του νησιού για οικογένειες.",
              amenities: ["Πάρκινγκ", "Φιλικό προς κατοικίδια"]
            },
            { 
              name: "Κούνδουρος (Koundouros)", 
              desc: "Η κοσμοπολίτικη καρδιά της Κέας. Κρυστάλλινα τιρκουάζ νερά, premium ξαπλώστρες και θαλάσσια σπορ στο γειτονικό Κουνδουράκι.",
              amenities: ["Πάρκινγκ", "Wi-Fi", "Κλιματισμός"]
            },
            { 
              name: "Ξύλα & Σπαθί (Xyla & Spathi)", 
              desc: "Για όσους αναζητούν την απόλυτη απομόνωση. Προσβάσιμες μέσω χωματόδρομων, αυτές οι άγριες παραλίες ανταμείβουν τους ταξιδιώτες με βαθιά χρυσή άμμο και απαράμιλλη ιδιωτικότητα.",
              amenities: ["Φιλικό προς κατοικίδια"]
            }
          ]
        },
        {
          title: "Γαστρονομία: Από το Λιμάνι ως τη Χώρα",
          intro: "Η γαστρονομική σκηνή της Τζιας είναι μια εκλεπτυσμένη μίξη παραδοσιακών κυκλαδίτικων γεύσεων και σύγχρονων μεσογειακών τεχνικών.",
          items: [
            { 
              name: "Philippos Grill & Tavern (Φωτημάρι)", 
              desc: "Βρίσκεται ακριβώς στη γειτονιά μας, αυτό το τοπικό εστιατόριο είναι διάσημο για το σιγοψημένο γουρουνόπουλο και τα παϊδάκια στα κάρβουνα.",
              amenities: ["Wi-Fi", "Πάρκινγκ", "Φιλικό προς κατοικίδια", "Κλιματισμός"]
            },
            { 
              name: "Αρίστος (Βουρκάρι)", 
              desc: "Στην κοσμοπολίτικη μαρίνα, αυτό είναι το κορυφαίο σημείο του νησιού για φρέσκια ψαρόσουπα και εξαιρετική αστακομακαρονάδα.",
              amenities: ["Wi-Fi", "Φιλικό προς κατοικίδια", "Κλιματισμός"]
            },
            { 
              name: "Η Στροφή του Μίμη (Βουρκάρι)", 
              desc: "Ζήστε το απόλυτο νησιώτικο δείπνο, όπου τα τραπέζια είναι στημένα τόσο κοντά στο κύμα που το Αιγαίο κυριολεκτικά αγγίζει τα πόδια σας.",
              amenities: ["Wi-Fi", "Φιλικό προς κατοικίδια"]
            },
            { 
              name: "Το Στέκι (Ιουλίδα)", 
              desc: "Στην πρωτεύουσα χωρίς αυτοκίνητα, προσφέρει παραδοσιακά, χωριάτικα πιάτα όπως τοπικό κουνέλι και γεμιστά.",
              amenities: ["Wi-Fi", "Κλιματισμός"]
            }
          ]
        },
        {
          title: "Πολιτισμός & Περιπέτεια",
          intro: "Πέρα από τις παραλίες, η Κέα είναι ένας παράδεισος για πεζοπόρους, λάτρεις της ιστορίας και έμπειρους δύτες.",
          items: [
            { name: "Τα Αρχαία Μονοπάτια (The Ancient Trails)", desc: "Εξερευνήστε 81 χλμ. σηματοδοτημένων, λιθόστρωτων αρχαίων μονοπατιών. Οι διαδρομές κυμαίνονται από εύκολους οικογενειακούς περιπάτους έως απαιτητικές πεζοπορίες. Η Διαδρομή 1 (Ιουλίδα προς Καρθαία) είναι μια μέτρια πεζοπορία 2 ωρών μέσα από δάση βελανιδιάς." },
            { name: "Αρχαία Καρθαία (Ancient Karthea)", desc: "Μία από τις τέσσερις αρχαίες πόλεις-κράτη της Κέας, που ήκμασε από τη Γεωμετρική περίοδο έως την πρώιμη βυζαντινή εποχή. Προσβάσιμη μόνο με τα πόδια ή με σκάφος, διαθέτει δωρικούς ναούς του Απόλλωνα και της Αθηνάς πάνω από μια παρθένα διπλή παραλία." },
            { name: "Ο Λέων της Τζιας (The Lion of Kea)", desc: "Ένα κολοσσιαίο, αινιγματικό λιοντάρι σκαλισμένο στο βράχο γύρω στο 600 π.Χ., προσβάσιμο μέσω μιας σύντομης, γραφικής διαδρομής από την πρωτεύουσα, Ιουλίδα." },
            { name: "Καταδύσεις Παγκόσμιας Κλάσης (World-Class Diving)", desc: "Ένα θαλάσσιο μουσείο. Το HMHS Britannic (αδελφό πλοίο του Τιτανικού) στα 120μ είναι αυστηρά για ελίτ τεχνικούς δύτες, ενώ το SS Burdigala (70μ) και το τροχήλατο ατμόπλοιο Πατρίς (28μ) προσφέρουν επιλογές για διάφορα επίπεδα πιστοποίησης." }
          ]
        }
      ],
      logisticsTitle: "Χιλιομετρικές Αποστάσεις από τις New Horizon Villas",
      logisticsHeaders: ["Προορισμός", "Απόσταση", "Κύριο Χαρακτηριστικό"],
      logisticsItems: [
        { dest: "Μαρίνα Βουρκάρι", dist: "1 km", feat: "Κοσμοπολίτικο φαγητό, σκάφη, κοκτέιλ" },
        { dest: "Παραλία Γιαλισκάρι", dist: "2 km", feat: "Γαλάζια Σημαία, πεύκα, φαγητό δίπλα στο κύμα" },
        { dest: "Κορησσία (Λιμάνι)", dist: "3 km", feat: "Πρόσβαση με πλοίο, φούρνοι, σούπερ μάρκετ" },
        { dest: "Παραλία Οτζιάς", dist: "5 km", feat: "Προστατευμένη από τον άνεμο, ρηχά νερά, ιδανική για οικογένειες" },
        { dest: "Ιουλίδα (Χώρα)", dist: "6 km", feat: "Ιστορική πρωτεύουσα, αρχαία μονοπάτια, παραδοσιακές ταβέρνες" }
      ]
    }
  };

  const c = language === 'en' ? content.en : content.el;

  const sectionIcons = [
    <Waves key="waves" className="w-6 h-6 text-[#004C98]" aria-hidden="true" />,
    <Coffee key="coffee" className="w-6 h-6 text-[#E2725B]" aria-hidden="true" />,
    <Map key="map" className="w-6 h-6 text-[#556B2F]" aria-hidden="true" />,
  ];

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
        <link rel="canonical" href="https://emirsaffar-collab.github.io/New-Horizon/explore" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emirsaffar-collab.github.io/New-Horizon/explore" />
        <meta property="og:title" content={c.seoTitle} />
        <meta property="og:description" content={c.seoDesc} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.seoTitle} />
        <meta name="twitter:description" content={c.seoDesc} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80" />
        
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
                "name": language === 'en' ? "Explore Kea" : "Εξερευνήστε την Κέα",
                "item": "https://emirsaffar-collab.github.io/New-Horizon/explore"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": c.sections.flatMap((section, sIdx) => 
              section.items.map((item, iIdx) => ({
                "@type": "ListItem",
                "position": sIdx * 10 + iIdx + 1,
                "item": {
                  "@type": sIdx === 0 ? "Beach" : sIdx === 1 ? "Restaurant" : "Place",
                  "name": item.name,
                  "description": item.desc,
                  "amenityFeature": item.amenities?.map(a => ({
                    "@type": "LocationFeatureSpecification",
                    "name": a,
                    "value": true
                  }))
                }
              }))
            )
          })}
        </script>
      </Helmet>
      
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=80" 
            alt="Beautiful Kea island coastline in the Cyclades, Greece, showcasing pristine beaches and crystal-clear Aegean waters" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-6"
          >
            {c.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#E2725B] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm font-bold mb-8"
          >
            {c.subtitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto text-white/90 leading-relaxed font-light text-lg sm:text-xl md:text-2xl italic px-2 sm:px-0"
          >
            {c.intro}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 space-y-16 md:space-y-24">
        {c.sections.map((section, idx) => (
          <div key={idx} className="space-y-8 md:space-y-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 md:p-4 bg-white rounded-full shadow-sm border border-stone-100">
                {sectionIcons[idx]}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-800 px-4">{section.title}</h2>
              <p className="max-w-2xl text-stone-500 font-light text-sm sm:text-base px-4">{section.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {section.items.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white p-5 md:p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border-t border-stone-50"
                >
                  <div className="aspect-[4/3] mb-4 md:mb-6 overflow-hidden rounded-sm bg-stone-100">
                    <motion.img 
                      initial={{ opacity: 0, scale: 1.1 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      src={`https://picsum.photos/seed/${item.name.split('(')[0].trim().toLowerCase().replace(/\s+/g, '_')}/600/450`} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-serif text-base md:text-lg text-stone-800 mb-3 group-hover:text-[#004C98] transition-colors leading-snug">{item.name}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light mb-4">{item.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
                    <div className="flex flex-wrap gap-2">
                      {item.amenities && item.amenities.map((amenity, aIdx) => (
                        <span key={aIdx} className="text-[11px] sm:text-xs uppercase tracking-widest px-2 py-1 bg-stone-50 text-stone-400 border border-stone-100 rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-0 sm:space-x-1 ml-2">
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          const text = `${item.name} - ${item.desc}`;
                          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
                        }}
                        className="p-2.5 text-stone-300 hover:text-[#004C98] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                        title="Share on Facebook"
                      >
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          const text = `${item.name} - ${item.desc}`;
                          window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                        }}
                        className="p-2.5 text-stone-300 hover:text-[#004C98] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                        title="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          const text = `${item.name}: ${item.desc}`;
                          window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                        }}
                        className="p-2.5 text-stone-300 hover:text-[#004C98] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                        title="Share on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Logistics Table */}
        <div className="bg-white p-6 md:p-8 lg:p-12 rounded-sm shadow-sm border border-stone-100 mb-16">
          <div className="flex items-center space-x-4 mb-8 md:mb-10 border-b border-stone-100 pb-6">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#004C98]" />
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-stone-800">{c.logisticsTitle}</h2>
          </div>
          
          {/* Mobile View: Card Layout */}
          <div className="md:hidden space-y-4" role="list">
            {c.logisticsItems.map((item, i) => (
              <div key={i} className="p-4 border border-stone-100 rounded bg-stone-50" role="listitem">
                <div className="font-medium text-stone-800 mb-2">{item.dest}</div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-stone-400">Distance</span>
                  <span className="text-[#E2725B] font-mono text-sm">{item.dist}</span>
                </div>
                <div className="text-stone-600 text-sm font-light italic pt-2 border-t border-stone-200">{item.feat}</div>
              </div>
            ))}
          </div>
          
          {/* Desktop View: Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  {c.logisticsHeaders.map((header, i) => (
                    <th key={i} className="py-4 px-4 text-xs uppercase tracking-widest text-stone-400 font-bold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.logisticsItems.map((item, i) => (
                  <tr key={i} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                    <td className="py-5 px-4 font-medium text-stone-800">{item.dest}</td>
                    <td className="py-5 px-4 text-[#E2725B] font-mono text-sm">{item.dist}</td>
                    <td className="py-5 px-4 text-stone-600 text-sm font-light italic">{item.feat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
