import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FAQS } from '../data';

interface FAQProps {
  currentLanguage: 'en' | 'hi';
}

export default function FAQ({ currentLanguage }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = FAQS.filter(faq => {
    const qMatches = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    const aMatches = faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return qMatches || aMatches;
  });

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const text = {
    title: currentLanguage === 'en' ? "Frequently Asked Questions" : "सामान्यतः पूछे जाने वाले प्रश्न",
    subtitle: currentLanguage === 'en'
      ? "Clear, transparent dental expert answers about costs, safety, and appointment processes."
      : "इलाज के शुल्क, सुरक्षा और क्लिनिक के नियमों से संबंधित महत्वपूर्ण उत्तर यहाँ पाएं।",
    searchPlaceholder: currentLanguage === 'en' ? "Search for answers (e.g. RCT, cost)..." : "प्रश्नों को खोजें (जैसे: रूट कैनाल, शुल्क)...",
    notFound: currentLanguage === 'en' ? "No questions match your search. Call us directly!" : "कोई परिणाम नहीं मिला। कृपया सीधे संपर्क करें!"
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            {text.title}
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm">
            {text.subtitle}
          </p>
        </div>

        {/* Custom Search Bar */}
        <div className="relative mb-10 max-w-lg mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder={text.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 placeholder-slate-400 text-sm transition-all outline-none shadow-xs"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-teal-400 bg-teal-50/10 shadow-md' 
                    : 'border-slate-150 hover:border-teal-100 bg-white'
                }`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg shrink-0 ${isOpen ? 'bg-teal-500 text-white' : 'bg-slate-50 text-slate-400'}`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-gray-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-teal-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Animated expandable body content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-50 text-gray-600 text-xs sm:text-sm leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                    
                    {/* Quick call to action in answer footer of emergency items */}
                    {faq.category === 'emergency' && (
                      <div className="mt-4 p-3 bg-red-50/50 rounded-xl border border-red-100 flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-bold text-red-600">Immediate trauma / pain relief help:</span>
                        <a 
                          href="tel:+919031840505"
                          className="px-3.5 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs shadow-sm hover:bg-red-700 transition"
                        >
                          Call Emergency Hotdesk
                        </a>
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-sm font-semibold">
              {text.notFound}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
