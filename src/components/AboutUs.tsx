import React from 'react';
import { ShieldCheck, HeartPulse, Building, Trophy, HelpCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import teamImage from '../assets/images/dentist_team_1781067870739.png';

interface AboutUsProps {
  currentLanguage: 'en' | 'hi';
  onOpenBooking: () => void;
}

export default function AboutUs({ currentLanguage, onOpenBooking }: AboutUsProps) {
  
  const text = {
    title: currentLanguage === 'en' ? "Ranchi's Leading Dental Team" : "रांची की अग्रणी दंत चिकित्सा टीम",
    headingHighlight: currentLanguage === 'en' ? "i Smile Dental Care" : "आई स्माइल डेंटल केयर",
    para1: currentLanguage === 'en'
      ? "Under the trusted clinic model of premium oral practices, i Smile Dental Care has established itself as the leading healthcare brand in Lalpur, Ranchi. We are completely committed to patient safety, sterilized care, and pain-free solutions. From infants to seniors, our clinic accommodates modern surgical dental practices safely."
      : "आई स्माइल डेंटल केयर रांची का एक ऐसा आधुनिक चिकित्सा केंद्र है जो सुरक्षित, कीटाणुरहित और शत-प्रतिशत गुणवत्तापूर्ण इलाजों के लिए प्रसिद्ध है। लालपुर क्षेत्र में स्थित, हम बच्चों से लेकर बुजुर्गों तक की हर मसूड़ों व दांतों की समस्याओं का आसान निवारण आधुनिकतम तकनीकों से करते हैं।",
    para2: currentLanguage === 'en'
      ? "We employ strict multi-stage Class-B vacuum autoclave sterilization on all surgical equipment. Our clinic story centers around detailed patient-first advice, cutting-edge diagnostic intraoral cameras, digital RVG x-rays, and exceptionally friendly, transparent billing."
      : "हम सभी शल्य चिकित्सा उपकरणों पर सख्त बहु-चरणीय क्लास-बी वैक्यूम आटोक्लेव नसबंदी लागू करते हैं। प्रत्येक मरीज को पारदर्शी स्वास्थ्य परीक्षण, डिजिटल एक्स-रे और अत्यंत सहानुभूतिपूर्ण दंत परामर्श प्रदान करना हमारी मुख्य प्राथमिकताओं में से एक है।",
    statLabels: {
      "Happy Patients": currentLanguage === 'en' ? "Happy Patients" : "संतुष्ट मरीज",
      "Success Rate": currentLanguage === 'en' ? "Success Rate" : "सफलता दर",
      "Experienced Doctors": currentLanguage === 'en' ? "Clinical Experts" : "विशेषज्ञ दंत चिकित्सक",
      "Treatments Done": currentLanguage === 'en' ? "Treatments Conducted" : "सफल इलाज"
    } as Record<string, string>,
    points: [
      { t: currentLanguage === 'en' ? "Painless Laser Dentistry" : "दर्द-रहित लेजर तकनीक", icon: HeartPulse },
      { t: currentLanguage === 'en' ? "100% Sterile Clinicians" : "100% स्वच्छ व कीटाणुरहित", icon: ShieldCheck },
      { t: currentLanguage === 'en' ? "Located in Lalpur center" : "लालपुर बाजार के नजदीक", icon: Building },
      { t: currentLanguage === 'en' ? "Certified Global Implants" : "अंतरराष्ट्रीय प्रमाणित इम्प्लांट्स", icon: Trophy }
    ],
    ctaButton: currentLanguage === 'en' ? "Discover Our Treatments" : "सेवाएं देखें",
    scheduleCall: currentLanguage === 'en' ? "Or Call Us Directly" : "या सीधे कॉल करें"
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Team Image with overlap decorations */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 aspect-[4/3] sm:aspect-square">
              <img 
                src={teamImage} 
                alt="i Smile Dental Care Ranchi Doctors Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Trust Badge overlay */}
              <div className="absolute top-4 left-4 bg-teal-600 text-white rounded-xl px-4 py-2.5 shadow-lg">
                <span className="block text-2xl font-extrabold text-white leading-none">99.2%</span>
                <span className="text-[9px] uppercase tracking-wider font-bold text-teal-100">Success Rate</span>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-50 -z-10 rounded-full blur-xl" />
          </div>

          {/* Right Column - Text Details */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="text-sm font-bold text-teal-600 uppercase tracking-widest font-mono">
              {currentLanguage === 'en' ? "About Our Clinic" : "हमारे बारे में जानें"}
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
              {text.title}{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                {text.headingHighlight}
              </span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {text.para1}
            </p>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              {text.para2}
            </p>

            {/* Micro Points Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {text.points.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex items-center gap-2.5 text-gray-700">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">{point.t}</span>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-4">
              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-center text-sm shadow-md transition-all cursor-pointer"
              >
                {text.ctaButton}
              </a>
              <a 
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-6 py-3 rounded-xl border border-teal-200 text-teal-700 font-bold text-center text-sm hover:bg-teal-50 transition-all"
              >
                {text.scheduleCall}: {CLINIC_INFO.phone}
              </a>
            </div>

          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-10 border-t border-slate-100">
          {CLINIC_INFO.stats.map((stat, index) => {
            const mappedLabel = text.statLabels[stat.label] || stat.label;
            return (
              <div key={index} className="text-center p-4 rounded-2xl bg-teal-50/20 border border-teal-100/10">
                <span className="block font-display font-extrabold text-3xl sm:text-4xl text-teal-700">
                  {stat.number}
                </span>
                <span className="block text-xs md:text-sm font-bold text-gray-500 uppercase mt-2 tracking-wide">
                  {mappedLabel}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
