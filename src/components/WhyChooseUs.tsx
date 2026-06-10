import React from 'react';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

interface WhyChooseUsProps {
  currentLanguage: 'en' | 'hi';
}

function getFeatureIcon(iconName: string) {
  const IconComponent = (Icons as any)[iconName];
  if (IconComponent) {
    return <IconComponent className="w-6 h-6 text-teal-600" />;
  }
  return <Icons.FileText className="w-6 h-6 text-teal-600" />;
}

export default function WhyChooseUs({ currentLanguage }: WhyChooseUsProps) {
  const text = {
    title: currentLanguage === 'en' ? "Why Choose i Smile Dental Care" : "हमारा चयन क्यों करें?",
    subtitle: currentLanguage === 'en'
      ? "Discover why we are recognized as the absolute best dental clinic in Lalpur, Ranchi."
      : "जानिए क्यों हम लालपुर, रांची में सबसे पसंदीदा व भरोसेमंद डेंटल क्लीनिक माने जाते हैं।",
    guaranteesTitle: currentLanguage === 'en' ? "Our Golden Principles" : "हमारे मुख्य सिद्धांत",
    standards: [
      { t: "100% Sterile", d: "Class-B Autoclaves" },
      { t: "Zero Hidden Fee", d: "Transparent Quote" },
      { t: "Emergency Call", d: "+91 90318 40505" }
    ]
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            {text.title}
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base">
            {text.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xs border border-teal-100/30 hover:shadow-xl hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-teal-50/80 flex items-center justify-center mb-5 border border-teal-100/60">
                  {getFeatureIcon(item.icon)}
                </div>

                {/* English Title & Hindi Subtitle */}
                <h3 className="font-display font-bold text-gray-900 text-lg mb-1">
                  {item.title}
                </h3>
                {item.titleHindi && (
                  <span className="block text-xs font-semibold text-teal-600/95 mb-3 font-display">
                    {item.titleHindi}
                  </span>
                )}

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Little design accent at the bottom */}
              <div className="w-8 h-1 bg-teal-100 group-hover:bg-teal-500 transition-colors rounded-full mt-6" />
            </div>
          ))}
        </div>

        {/* Quick Highlights Ribbon */}
        <div className="mt-16 bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-md border border-teal-100/40 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-teal-100">
          {text.standards.map((std, i) => (
            <div key={i} className="pt-4 sm:pt-0 first:pt-0 sm:first:pl-0 pl-0 sm:pl-4">
              <span className="block text-xs uppercase tracking-widest text-teal-600 font-bold mb-1">
                {std.t}
              </span>
              <span className="font-display font-bold text-gray-900 text-base sm:text-lg">
                {std.d}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
