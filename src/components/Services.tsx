import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  currentLanguage: 'en' | 'hi';
  onBookService: (serviceTitle: string) => void;
}

// Map Lucide icons safely so that dynamic evaluation functions beautifully
function getServiceIcon(iconName: string) {
  const IconComponent = (Icons as any)[iconName];
  if (IconComponent) {
    return <IconComponent className="w-6 h-6 text-teal-600" />;
  }
  return <Icons.Stethoscope className="w-6 h-6 text-teal-600" />;
}

export default function Services({ currentLanguage, onBookService }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const text = {
    title: currentLanguage === 'en' ? "Premium Dental Services" : "उन्नत दंत चिकित्सा सेवाएं",
    subtitle: currentLanguage === 'en'
      ? "Choose expert clinical solutions tailored completely to your comfort, health, and facial aesthetics."
      : "आपकी मसूड़ों और दांतों की सेहत के लिए आधुनिक उपकरणों द्वारा विशेषज्ञ इलाज प्रदान किए जाते हैं।",
    learnMore: currentLanguage === 'en' ? "View Details" : "विवरण देखें",
    hideDetails: currentLanguage === 'en' ? "Hide Details" : "विवरण छिपाएं",
    ctaBook: currentLanguage === 'en' ? "Book Session" : "अपॉइंटमेंट लें",
    estimateLabel: currentLanguage === 'en' ? "Estimate Support: " : "अनुमानित समय: ",
    durationLabel: currentLanguage === 'en' ? "Average Time: " : "औसत समय: "
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            {text.title}
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base">
            {text.subtitle}
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: Service) => {
            const isDetailed = selectedCategory === service.id;
            
            return (
              <div 
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isDetailed 
                    ? 'border-teal-400 bg-teal-50/40 shadow-xl scale-[1.01]' 
                    : 'border-slate-100 hover:border-teal-200 hover:shadow-lg bg-white'
                }`}
              >
                {/* Visual Accent top ribbon */}
                <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl transition-colors ${
                  isDetailed ? 'bg-teal-500' : 'bg-transparent group-hover:bg-teal-300'
                }`} />

                <div className="p-6 sm:p-8 flex-1">
                  
                  {/* Icon & Title block */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-100/70 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    
                    {/* Tiny badge of average treatment time */}
                    {service.duration && (
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-5 w-max px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                        {service.duration}
                      </span>
                    )}
                  </div>

                  {/* Service Title (English and Hindi combined naturally to serve bilingual crowd) */}
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  {service.titleHindi && (
                    <span className="block text-xs font-medium text-teal-600/90 mb-3 tracking-wide">
                      {service.titleHindi}
                    </span>
                  )}

                  {/* Short Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Detail toggle / Accordion bullet list */}
                  {isDetailed && (
                    <div className="pt-4 border-t border-slate-100 mt-4 space-y-2.5 animate-fadeIn">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">
                        {currentLanguage === 'en' ? "What's Included:" : "इलाज में क्या शामिल है:"}
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                            <Icons.CheckCircle className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {service.costEstimate && (
                        <p className="text-xs font-semibold text-gray-700 mt-3 pt-2 border-t border-slate-150">
                          <span className="text-teal-600">{text.estimateLabel}</span>
                          <span>{service.costEstimate}</span>
                        </p>
                      )}
                    </div>
                  )}

                </div>

                {/* Footer interactive actions */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-50/50">
                  <button
                    onClick={() => setSelectedCategory(isDetailed ? null : service.id)}
                    className="text-xs font-semibold text-teal-600 hover:text-teal-700 underline focus:outline-none flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isDetailed ? text.hideDetails : text.learnMore}</span>
                    {isDetailed ? <Icons.ChevronUp className="w-3.5 h-3.5" /> : <Icons.ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="flex items-center gap-1 px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    <span>{text.ctaBook}</span>
                    <Icons.Calendar className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
