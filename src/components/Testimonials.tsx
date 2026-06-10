import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, CLINIC_INFO } from '../data';

interface TestimonialsProps {
  currentLanguage: 'en' | 'hi';
}

export default function Testimonials({ currentLanguage }: TestimonialsProps) {
  const text = {
    title: currentLanguage === 'en' ? "What Our Patients Affirm" : "मरीजों के सुखद अनुभव",
    subtitle: currentLanguage === 'en'
      ? "Join over 10,000+ satisfied families who trust i Smile Dental Care for premium, zero-pain dental treatments."
      : "10,000+ से अधिक खुशहाल परिवारों की सूची में शामिल हों, जो दर्द-मुक्त इलाज के लिए हम पर विश्वास करते हैं।",
    verifiedTag: currentLanguage === 'en' ? "Verified Patient Review" : "सत्यापित समीक्षा",
    starsLabel: currentLanguage === 'en' ? "Average Rating" : "औसत रेटिंग"
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-sky-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            {text.title}
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base">
            {text.subtitle}
          </p>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 relative flex flex-col justify-between"
            >
              
              {/* Backing quote logo */}
              <div className="absolute top-6 right-8 text-teal-100/40">
                <MessageSquare className="w-12 h-12 fill-teal-50" />
              </div>

              <div>
                {/* Rating score stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Patient Speech text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Patient Bio bar */}
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="font-display font-extrabold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <span className="block text-xs text-slate-400">
                    {testimonial.location} • {testimonial.date}
                  </span>
                </div>

                {/* Treatment category tag */}
                <div className="px-3 py-1 rounded-full bg-teal-50 text-[10px] sm:text-xs font-bold text-teal-700 tracking-wide">
                  {testimonial.treatment}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Rated <span className="font-bold text-gray-800">{CLINIC_INFO.googleRating}/5</span> based on <span className="underline font-bold text-teal-700">{CLINIC_INFO.googleReviewsCount}+ authentic reviews</span> on Google Local Business directory.
          </p>
        </div>

      </div>
    </section>
  );
}
