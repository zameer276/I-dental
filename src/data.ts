import { Service, Testimonial, FAQItem, GalleryItem } from './types';

export const CLINIC_INFO = {
  name: "i Smile Dental Care",
  tagline: "Your Smile, Our Passion",
  taglineHindi: "आपका मुस्कुराता चेहरा, हमारी प्रतिबद्धता",
  address: "Shop No.- 105, 1st Floor, Heritage Paremeshwar Clinic, Near BIT Extension, Opp. Doctor Usha Rani Gali, Lalpur, Ranchi, Jharkhand 834001",
  landmark: "Near BIT Extension, Opp. Doctor Usha Rani Gali",
  phone: "+91 90318 40505",
  whatsapp: "+91 90318 40505",
  email: "ismiledentalranchi@gmail.com",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.1385412499114!2d85.34015!3d23.37415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e13cd52fa9f7%3A0xe7a5c7df7c6b45a2!2si%20Smile%20Dental%20Care!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin",
  hours: [
    { days: "Monday - Saturday", time: "10:00 AM - 08:30 PM" },
    { days: "Sunday", time: "10:00 AM - 02:00 PM (Prior Appointment Only)" }
  ],
  emergencyPhone: "+91 90318 40505",
  googleRating: 4.9,
  googleReviewsCount: 247,
  stats: [
    { label: "Happy Patients", number: "10,000+" },
    { label: "Success Rate", number: "99.2%" },
    { label: "Experienced Doctors", number: "15+ Years" },
    { label: "Treatments Done", number: "15,000+" }
  ],
  keywords: [
    "Best Dental Clinic in Lalpur Ranchi",
    "Dentist in Lalpur Ranchi",
    "Dental Clinic Ranchi",
    "Root Canal Treatment Ranchi",
    "Dental Implants Ranchi",
    "Teeth Whitening Ranchi"
  ]
};

export const SERVICES: Service[] = [
  {
    id: "implants",
    title: "Dental Implants",
    titleHindi: "डेंटल इम्प्लांट (कृत्रिम दांत)",
    description: "Permanent, incredibly realistic replacements for missing teeth that look, feel, and function just like your natural teeth.",
    iconName: "FileHeart",
    details: [
      "Single and multiple tooth restoration",
      "Full arch implant-supported dentures",
      "Advanced bone grafting facilities",
      "Premium titanium implants with lifetime guarantee",
      "Painless, highly computerized surgical precision"
    ],
    duration: "1-2 Hours (Per Session)",
    costEstimate: "Premium options available"
  },
  {
    id: "rct",
    title: "Root Canal Treatment (RCT)",
    titleHindi: "रूट कैनाल ट्रीटमेंट",
    description: "Painless, single-sitting root canal treatment utilizing advanced rotary systems to save your severely decayed or painful tooth.",
    iconName: "ShieldCheck",
    details: [
      "Single-sitting RCT with rotary technology",
      "Digital computerized apex locators",
      "Incredibly gentle and completely painless experience",
      "Saves damaged and infected teeth from extraction",
      "Durable post and core building"
    ],
    duration: "45 - 60 Minutes",
    costEstimate: "Affordable rates"
  },
  {
    id: "whitening",
    title: "Teeth Whitening & Bleaching",
    titleHindi: "दांत चमकाना व पीलापन हटाना",
    description: "Get a dazzling, radiant smile with our safe, fast laser-guided whitening that removes stubborn food, caffeine and tobacco stains.",
    iconName: "Sparkles",
    details: [
      "Up to 8 shades lighter teeth in just 1 hour",
      "Safe and pain-free clinic whitening procedures",
      "Laser-activated technology for longevity",
      "Custom take-home whitening trays provided",
      "Zero enamel damage guaranteed"
    ],
    duration: "45 Minutes",
    costEstimate: "Instant Transformation"
  },
  {
    id: "braces",
    title: "Braces & Invisible Aligners",
    titleHindi: "टेढ़े-मेढ़े दांतों के लिए क्लिप / अलाइनर",
    description: "Perfectly align crooked, crowded or spaced teeth with our modern ceramic, metallic braces, or premium transparent aligners (Invisalign).",
    iconName: "Milestone",
    details: [
      "Clear, invisible aligners for adults & teens",
      "Modern ceramic (tooth-colored) braces",
      "Traditional robust metal braces",
      "Shortest active treatment plans with advanced tracking",
      "3D digital smile simulation before beginning"
    ],
    duration: "Varies as per patient goal",
    costEstimate: "Flexible EMI Plans"
  },
  {
    id: "makeover",
    title: "Smile Makeover",
    titleHindi: "मुस्कान बदलाव (कॉस्मेटिक सर्जरी)",
    description: "Transform your confidence with porcelain veneers, cosmetic composite bonding, and dental contouring tailored to your facial aesthetics.",
    iconName: "Smile",
    details: [
      "Ultra-thin premium porcelain veneers",
      "Direct composite resin bonding to fix chips & gaps",
      "Gingival contouring for gummy smiles",
      "Digital Smile Design (DSD) to preview your new look",
      "Completed in as little as two sessions"
    ],
    duration: "2 Sessions",
    costEstimate: "Custom designs"
  },
  {
    id: "crowns",
    title: "Dental Crowns & Bridges",
    titleHindi: "दांतों पर क्राउन और ब्रिज",
    description: "Reinforce and restore damaged or missing teeth with highly durable, natural-looking Zirconia, ceramic, or metal-porcelain crowns.",
    iconName: "Crown",
    details: [
      "Metal-free full ceramic & Zirconia crowns",
      "High strength bridges to replace gaps",
      "Computer-aided manufacturing (CAD/CAM) precision",
      "Matches the exact shade of neighboring teeth",
      "Comes with written quality warranty cards"
    ],
    duration: "2-3 Days Labs Turnaround",
    costEstimate: "Warranty certified"
  },
  {
    id: "extraction",
    title: "Tooth Extraction & Wisdom Teeth",
    titleHindi: "दांत निकालना व अक्कल दाढ़ सर्जरी",
    description: "Completely painless extraction of severely broken or impacted wisdom teeth under professional local anesthesia.",
    iconName: "Scissors",
    details: [
      "Atraumatic standard tooth extraction",
      "Surgical removal of impacted wisdom teeth",
      "PRF (Platelet-Rich Fibrin) for incredibly fast healing",
      "Minimal postoperative discomfort or swelling",
      "Strict aseptic and sterilized protocols"
    ],
    duration: "30 - 45 Minutes",
    costEstimate: "Gentle technique"
  },
  {
    id: "kids",
    title: "Kids Dentistry (Pedodontics)",
    titleHindi: "बच्चों के दांतों का इलाज",
    description: "Specialized, fear-free, and super playful pediatric dental care for milk teeth, cavity prevention, fluoride therapy, and sealants.",
    iconName: "Baby",
    details: [
      "Gentle habit-breaking appliances (thumb-sucking/tongue-thrusting)",
      "Protective dental sealants and fluoride varnish",
      "Fun-filled, child-centric psychological approach",
      "Painless filling of baby cavities",
      "Monitoring jaw growth & early alignment guide"
    ],
    duration: "30 Minutes",
    costEstimate: "Child friendly care"
  },
  {
    id: "gum",
    title: "Gum Treatment & Periodontics",
    titleHindi: "मसूड़ों का इलाज / पायरिया नियंत्रण",
    description: "Stop bleeding gums, bad breath (halitosis), and loose teeth with laser deep cleaning, root planing, and premium gum grafting.",
    iconName: "Droplet",
    details: [
      "Ultrasonic scaling & polishing",
      "Laser-assisted deep scaling & root planing",
      "Treatment for swollen, bleeding, or receding gums",
      "Elimination of chronic bad breath (Pyorrhea)",
      "Gum flap surgery and tissue regeneration"
    ],
    duration: "45 Minutes",
    costEstimate: "Laser precise"
  },
  {
    id: "rehab",
    title: "Full Mouth Rehabilitation",
    titleHindi: "संपूर्ण मुख पुनरुद्धार",
    description: "An intensive comprehensive reconstruction of all teeth inside your mouth, resolving severe wear, missing teeth, and collapsed bites.",
    iconName: "Activity",
    details: [
      "Restores look, chewing efficiency, and speaking speech",
      "Combination of crowns, bridges, and dental implants",
      "Corrects jaw alignment and reduces TMJ/joint pain",
      "Specially structured for senior citizens",
      "Restores teenage-like bite function"
    ],
    duration: "Tailored multi-stage schedule",
    costEstimate: "Comprehensive planning"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Dentists",
    titleHindi: "अनुभवी दंत चिकित्सक",
    desc: "Led by highly skilled & friendly dental specialists with years of clinical success, executing precise diagnostics and treatments.",
    icon: "Award"
  },
  {
    title: "Advanced Technology",
    titleHindi: "आधुनिक तकनीक",
    desc: "Equipped with cutting-edge dental tools, digital X-rays (RVG), electronic rotary machines, and computerized surgical kits.",
    icon: "Cpu"
  },
  {
    title: "Affordable Treatment",
    titleHindi: "किफायती शुल्क",
    desc: "Top-tier premium dental procedures priced transparently with absolutely zero hidden costs. Flexible payment options & EMI are available.",
    icon: "Coins"
  },
  {
    title: "Painless Procedures",
    titleHindi: "दर्द-रहित इलाज",
    desc: "We utilize modern anesthetic gels, computer-controlled sedation, and ultra-fine needles to make your treatment absolutely painless.",
    icon: "HeartHandshake"
  },
  {
    title: "Sterilized Environment",
    titleHindi: "100% कीटाणुरहित क्लिनिक",
    desc: "We practice class-B autoclave sterilization protocols. Every single instrument is packed in individual pouches and opened in front of you.",
    icon: "Activity"
  },
  {
    title: "Personalized Care",
    titleHindi: "व्यक्तिगत देखभाल",
    desc: "Every patient's dental biology is unique. We craft slow, intentional, personalized care programs instead of rushing through queues.",
    icon: "UserCheck"
  },
  {
    title: "Lalpur Center",
    titleHindi: "लालपुर में सुविधाजनक स्थान",
    desc: "Located centrally on the 1st Floor of Heritage Paremeshwar Clinic in Lalpur, Ranchi. Extremely easy to reach with safe parking facilities.",
    icon: "MapPin"
  },
  {
    title: "Same Day Appointments",
    titleHindi: "तुरंत अपॉइंटमेंट की सुविधा",
    desc: "Suffer from sudden toothaches? Our flexible booking slots ensure you get urgent relief and dental consulting on the very same day.",
    icon: "CalendarCheck"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Amitabh Roy",
    location: "Khelgaon, Ranchi",
    rating: 5,
    treatment: "Dental Implants",
    text: "I was extremely nervous about getting a dental implant. But the specialists at i Smile made it incredibly painless! They explained the whole digital plan step-by-step. The crown matches my other teeth perfectly. Best clinic in Ranchi!",
    date: "2 weeks ago"
  },
  {
    id: "t2",
    name: "Priya Sharma",
    location: "Lalpur, Ranchi",
    rating: 5,
    treatment: "Root Canal Treatment",
    text: "Truly single-sitting painless RCT. I was suffering from terrible midnight pain. I booked an appointment through WhatsApp and got treated the next morning. The doctor was so gentle and comforting.",
    date: "1 month ago"
  },
  {
    id: "t3",
    name: "Rajesh Kumar",
    location: "Kokar, Ranchi",
    rating: 5,
    treatment: "Teeth Whitening",
    text: "Amazing service! My teeth were badly stained due to tea and food habits. After a 45-minute laser session here, they look naturally bright and healthy. Extremely clean clinic and affordable price.",
    date: "3 weeks ago"
  },
  {
    id: "t4",
    name: "Sneha Oraon",
    location: "Kanke Road, Ranchi",
    rating: 5,
    treatment: "Invisible Aligners",
    text: "I opted for transparent aligners instead of metal clips. I am highly satisfied with the results ismile clinic team delivers. The 3D video previews they showed mockups before starting were 100% accurate.",
    date: "2 months ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Complete Tooth Alignment",
    description: "Orthodontic treatment for severely crowded teeth returned to flawless smile contouring.",
    beforeUrl: "https://images.unsplash.com/photo-1516241739607-6876e25cbcd1?w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
  },
  {
    id: "g2",
    title: "Premium Cosmetic Whitening",
    description: "Removing decades of food, tobacco and coffee discoloration down to natural pearl shades.",
    beforeUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80"
  },
  {
    id: "g3",
    title: "Dental Implant Smile Restoration",
    description: "A comprehensive replacement of broken front tooth, matching translucent natural margins.",
    beforeUrl: "https://images.unsplash.com/photo-1579684389781-75611d273185?w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    category: "treatment",
    question: "What is the cost of Root Canal Treatment (RCT) in Lalpur Ranchi?",
    answer: "At i Smile Dental Care, the cost of Root Canal Treatment is highly pocket-friendly and depends on the complexity of the tooth infection and whether you choose standard or custom crown caps (Zirconia, Ceramic). We offer exact, transparent quotes before the procedure starts safely. Please feel free to book a general checkup to receive standard recommendations."
  },
  {
    id: "faq2",
    category: "treatment",
    question: "Is the Dental Implant procedure painful?",
    answer: "Not at all! Dental implants are performed under gentle local anesthesia, making the treatment completely pain-free. Our Ranchi clinic uses advanced computerized guides to minimize tissue impact. Patients rarely experience any major pain and can resume standard light work from the next day. We also provide customized home-care pain-management tablets."
  },
  {
    id: "faq3",
    category: "treatment",
    question: "Is laser teeth whitening safe for my enamel?",
    answer: "Yes, professional laser teeth whitening conducted by seasoned dentists is 100% safe. We use premium, clinically tested bleaching solutions that break down persistent organic stains without weakening or chipping away your natural protective enamel layer."
  },
  {
    id: "consultation",
    category: "consultation",
    question: "How do I book an appointment? Can I use WhatsApp?",
    answer: "Absolutely! We support instant booking through WhatsApp or phone. Click any 'WhatsApp Booking' or 'Call Now' floating button across this website to chat directly with our front desk (+91 90318 40505), specify your preferred timimg, and receive an instant digital reservation confirmation."
  },
  {
    id: "emergency",
    category: "emergency",
    question: "Do you offer emergency dental care in Lalpur Ranchi?",
    answer: "Yes, we treat trauma, intense bleeding, broken teeth, or severe jaw swelling as priority emergencies. We accommodate emergency walk-ins or reserve immediate slots for fast relief. Call us immediately on +91 90318 40505 if you require post-haste care."
  }
];
