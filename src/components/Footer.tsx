import React from 'react';
import { Heart, MapPin, Phone, MessageSquare, ShieldAlert, Navigation } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';

interface FooterProps {
  currentLanguage: 'en' | 'hi';
  onBookService: (service: string) => void;
}

export default function Footer({ currentLanguage, onBookService }: FooterProps) {
  
  const handleMapRedirect = () => {
    window.open("https://maps.app.goo.gl/rS9v7Y6LdtX6v6c77", "_blank");
  };

  const text = {
    quickLinks: currentLanguage === 'en' ? "Quick Sections" : "त्वरित लिंक्स",
    services: currentLanguage === 'en' ? "Key Treatments" : "हमारे मुख्य इलाज",
    contactHeading: currentLanguage === 'en' ? "Direct Helpdesk" : "सीधा संपर्क",
    emergency: currentLanguage === 'en' ? "Dental Pain Emergency:" : "दांत में तेज दर्द आपातकाल:",
    copyright: currentLanguage === 'en' 
      ? `© ${new Date().getFullYear()} i Smile Dental Care. All Rights Reserved. Designed for premium dental wellness.`
      : `© ${new Date().getFullYear()} आई स्माइल डेंटल केयर। सर्वाधिकार सुरक्षित। रांची का अग्रणी डेंटल केयर।`,
    navLinks: currentLanguage === 'en' ? [
      { name: "Clinic Home", href: "#home" },
      { name: "Dental Services", href: "#services" },
      { name: "Why Us", href: "#why-choose-us" },
      { name: "About Clinic", href: "#about" },
      { name: "Before & After Results", href: "#gallery" },
      { name: "FAQs", href: "#faq" },
      { name: "Contact Desk", href: "#contact" }
    ] : [
      { name: "मुख्य पृष्ठ", href: "#home" },
      { name: "सेवाएं", href: "#services" },
      { name: "विशेषताएं", href: "#why-choose-us" },
      { name: "हमारे बारे में", href: "#about" },
      { name: "नया निखार", href: "#gallery" },
      { name: "सामान्य प्रश्न", href: "#faq" },
      { name: "सम्पर्क नंबर", href: "#contact" }
    ],
    seoPara: currentLanguage === 'en'
      ? "i Smile Dental Care is Ranchi's leading dental clinic located in Lalpur. We specialize in high success certified Dental Implants, rotary single sitting pain-free Root Canal Treatment (RCT), cosmetic Smile Makeovers, Ceramic / Zirconia crowns, invisible clear braces and kids dental checkups."
      : "आई स्माइल डेंटल केयर लालपुर, रांची का प्रमुख दंत चिकित्सा केंद्र है। हम बेहतरीन गुणवत्ता वाले सुरक्षित डेंटल इम्प्लांट, सिंगल सिटिंग दर्द रहित रूट कैनाल ट्रीटमेंट (RCT), दांतों का चमकीलापन, मसूड़ों की पायरिया सफाई और टेढ़े-मेढ़े दांतों के लिए अदृश्य क्लिप करने में पूर्ण विशेषज्ञ हैं।"
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-800 pb-12">
          
          {/* Column 1: Clinic identity & SEO blurb */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold shadow-md shadow-teal-900/40">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                i <span className="text-teal-400">Smile</span> Dental
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans pt-1">
              {text.seoPara}
            </p>

            <p className="text-[10px] text-slate-500 max-w-sm italic">
              Shop No.- 105, 1st Floor, Heritage Paremeshwar Clinic, Near BIT Extension, Opp. Doctor Usha Rani Gali, Lalpur, Ranchi.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              {text.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              {text.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="hover:text-teal-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Treatments services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              {text.services}
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => onBookService(service.title)}
                    className="hover:text-teal-400 transition text-left cursor-pointer"
                  >
                    • {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location, Emergency & Contact buttons */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              {text.contactHeading}
            </h4>
            
            <div className="space-y-3 text-xs">
              <a 
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>{CLINIC_INFO.phone}</span>
              </a>

              <a 
                onClick={handleMapRedirect}
                className="flex items-start gap-1.5 hover:text-white cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.landmark}, Lalpur, Ranchi</span>
              </a>

              {/* Emergency highlighted card */}
              <div className="p-3 bg-slate-800/60 rounded-xl border border-red-500/20 text-slate-400 mt-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{text.emergency}</span>
                </div>
                <p className="text-white font-extrabold text-xs mt-1">
                  {CLINIC_INFO.emergencyPhone}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Lower copyright bar with Google ratings summary */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>{text.copyright}</span>
          </div>

          {/* Localized search tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-teal-400">#BestDentalClinicLalpur</span>
            <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-teal-400">#DentistInRanchi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
