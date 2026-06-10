import React from 'react';
import { Star, ShieldCheck, Phone, ArrowRight, MessageSquare, HeartHandshake, Eye } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import heroImage from '../assets/images/dental_clinic_hero_1781067856987.png';

interface HeroProps {
  currentLanguage: 'en' | 'hi';
  onOpenBooking: () => void;
}

export default function Hero({ currentLanguage, onOpenBooking }: HeroProps) {
  // WhatsApp redirect helper
  const handleWhatsAppClick = () => {
    const textMessage = encodeURIComponent("Hello i Smile Dental Care, I would like to book a dental appointment.");
    window.open(`https://wa.me/919031840505?text=${textMessage}`, '_blank');
  };

  const text = {
    badge: currentLanguage === 'en' ? "Emergency Dental Care Slots Open" : "आपातकालीन सेवा उपलब्ध",
    titlePart1: currentLanguage === 'en' ? "Transform Your Smile with" : "अपने दाँतों को दें",
    titleHighlight: currentLanguage === 'en' ? "Expert Dental Care" : "बेहतरीन नया निखार",
    subtitle: currentLanguage === 'en' 
      ? "Ranchi's Trusted Dental Clinic for Implants, Root Canal Treatment (RCT), Cosmetic Dentistry, Braces, Teeth Whitening, and Complete Oral Care."
      : "रांची का सबसे भरोसेमंद डेंटल क्लिनिक - इम्प्लांट्स, रूट कैनाल, कॉस्मेटिक डेंटिस्ट्री, दांतों के क्लिप और दर्द रहित ओरल केयर के लिए।",
    ctaDoc: currentLanguage === 'en' ? "Book Free Check-Up" : "अपॉइंटमेंट बुक करें",
    ctaWa: currentLanguage === 'en' ? "WhatsApp Now" : "व्हाट्सएप करें",
    expTitle: currentLanguage === 'en' ? "Certified Clinicians" : "अनुभवी डॉक्टर्स",
    expDesc: currentLanguage === 'en' ? "15+ Years Experience" : "15+ वर्षों का अनुभव",
    techTitle: currentLanguage === 'en' ? "Modern Equipment" : "आधुनिक तकनीक",
    techDesc: currentLanguage === 'en' ? "Zero Pain Sterilization" : "दर्द-मुक्त व हाइजीनिक",
    reviewSub: currentLanguage === 'en' ? "on Google reviews" : "गूगल रिव्यु पर"
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-teal-50 via-white to-sky-50 overflow-hidden">
      
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-200/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Indicator / Emergency Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-wide animate-pulse shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>{text.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 leading-tight">
              {text.titlePart1}{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800 italic mt-1">
                {text.titleHighlight}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-base sm:text-lg sm:leading-relaxed max-w-xl">
              {text.subtitle}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-lg shadow-teal-100 hover:shadow-teal-200 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{text.ctaDoc}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-100 hover:shadow-emerald-200 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white/10" />
                <span>{text.ctaWa}</span>
              </button>
            </div>

            {/* Social Proof (Google Reviews and Credentials) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-6 border-t border-teal-100">
              
              {/* Google Reviews rating */}
              <a 
                href="#testimonials"
                className="flex items-center gap-3.5 hover:bg-teal-50/50 p-2 rounded-xl transition-all"
              >
                <div className="p-2.5 rounded-lg bg-yellow-50 border border-yellow-200 flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-extrabold text-gray-900 text-base">
                    <span>{CLINIC_INFO.googleRating}</span>
                    <span className="text-yellow-500 flex">
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    {CLINIC_INFO.googleReviewsCount}+ {text.reviewSub}
                  </p>
                </div>
              </a>

              {/* Experienced Team Info */}
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {text.expTitle}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {text.expDesc}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Hero Column (Visual Showcase) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-[420px] lg:max-w-none aspect-[4/3] sm:aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img 
                src={heroImage} 
                alt="i Smile Dental Care Ranchi Clinic" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlapping Info Pill - Modern equipment highlights */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-teal-50/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-500 text-white">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h5 className="font-bold text-gray-900 text-xs sm:text-sm">
                      {text.techTitle}
                    </h5>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      {text.techDesc}
                    </p>
                  </div>
                </div>
                
                {/* Visual badge */}
                <div className="px-2.5 py-1 rounded-md bg-teal-50 text-[10px] font-bold text-teal-800 uppercase tracking-wider font-mono">
                  ISO Certified
                </div>
              </div>

            </div>

            {/* Tech Dots floating graphic */}
            <div className="absolute -top-4 -left-4 w-20 h-20 -z-10 bg-teal-100/50 rounded-full blur-md" />

          </div>

        </div>
      </div>
    </section>
  );
}
