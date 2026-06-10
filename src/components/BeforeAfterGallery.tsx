import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, Check, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

interface BeforeAfterGalleryProps {
  currentLanguage: 'en' | 'hi';
}

export default function BeforeAfterGallery({ currentLanguage }: BeforeAfterGalleryProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = GALLERY_ITEMS[activeCaseIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const text = {
    title: currentLanguage === 'en' ? "Smile Transformation Gallery" : "मुस्कान बदलाव गैलरी",
    subtitle: currentLanguage === 'en'
      ? "Slide the divider to witness the exceptional, life-altering results of our clinical work."
      : "विभाजन रेखा को खिसका कर देखें कि कैसे हमने अपने मरीजों की मुस्कान को पूर्ण रूप से बदल दिया है।",
    beforeLabel: currentLanguage === 'en' ? "BEFORE" : "पहले",
    afterLabel: currentLanguage === 'en' ? "AFTER (i Smile)" : "बाद में (जादुई परिणाम)",
    instructions: currentLanguage === 'en' ? "Drag slider left & right to compare" : "तुलना करने के लिए स्लाइडर को बाएं-दाएं खींचें"
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50">
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

        {/* Tabs to select case studies */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(index);
                setSliderPosition(50); // reset slider to center
              }}
              className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all ${
                activeCaseIndex === index
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-slate-200 hover:border-teal-300'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* The interactive slider window */}
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Main Visual Comparison Frame */}
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-slate-200 touch-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            
            {/* 1. After Image (Full width background) */}
            <img 
              src={activeCase.afterUrl} 
              alt="Dental transformation after care" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            
            {/* After Tag Overlay */}
            <div className="absolute bottom-6 right-6 bg-teal-600/90 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow-md z-10 backdrop-blur-xs flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>{text.afterLabel}</span>
            </div>

            {/* 2. Before Image (Absolute top layer clipped based on sliderPosition) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={activeCase.beforeUrl} 
                alt="Dental state before treatment" 
                // Important: maintain 100% width of the underlying frame to avoid squishing
                className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width }}
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Before Tag Overlay */}
            <div className="absolute bottom-6 left-6 bg-gray-900/80 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow-md z-10 backdrop-blur-xs">
              <span>{text.beforeLabel}</span>
            </div>

            {/* 3. Sliding Divider Handle line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag controller knob */}
              <div className="w-10 h-10 rounded-full bg-white text-teal-600 shadow-xl flex items-center justify-center border-2 border-teal-200 hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-4.5 h-4.5" />
              </div>
            </div>

          </div>

          {/* Description of active case study */}
          <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-100 max-w-2xl text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 rounded-full text-teal-700 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeCase.title}</span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {activeCase.description}
            </p>
            <span className="block text-xs font-semibold text-gray-400 mt-4 italic font-mono uppercase tracking-widest">
              ← {text.instructions} →
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
