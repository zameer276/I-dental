import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookModal from './components/BookModal';
import { Sparkles, X, Check, Heart } from 'lucide-react';

export default function App() {
  const [currentLanguage, setLanguage] = useState<'en' | 'hi'>('en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerServiceBooking = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const triggerGeneralBooking = () => {
    setPreselectedService('');
    setIsModalOpen(true);
  };

  const handleBookingSuccess = () => {
    setShowToast(true);
    // Hide toast notice after 8 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 8000);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <Navbar 
        currentLanguage={currentLanguage} 
        setLanguage={setLanguage} 
        onOpenBooking={triggerGeneralBooking} 
      />

      {/* 2. Stunning Hero Section */}
      <main className="relative">
        <Hero 
          currentLanguage={currentLanguage} 
          onOpenBooking={triggerGeneralBooking} 
        />

        {/* Dynamic Trust Strip */}
        <div className="bg-teal-600 text-white py-4.5 overflow-hidden border-y border-teal-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 sm:gap-x-12 text-xs sm:text-sm font-bold tracking-wide uppercase text-center">
            <span className="flex items-center gap-1.5 shrink-0">
              <Sparkles className="w-4 h-4 text-teal-200 fill-teal-100" />
              <span>Ranchi's Best Dental Clinic in Lalpur</span>
            </span>
            <span className="w-1 h-1 bg-teal-400 rounded-full hidden md:inline-block" />
            <span className="flex items-center gap-1.5 shrink-0">
              <Heart className="w-4 h-4 text-teal-200 fill-teal-100" />
              <span>99.2% Treatment Success Rate</span>
            </span>
            <span className="w-1 h-1 bg-teal-400 rounded-full hidden md:inline-block" />
            <span className="flex items-center gap-1.5 shrink-0">
              <span>आई स्माइल डेंटल केयर - लालपुर रांची </span>
            </span>
          </div>
        </div>

        {/* 3. Advanced services cards list */}
        <Services 
          currentLanguage={currentLanguage} 
          onBookService={triggerServiceBooking} 
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs currentLanguage={currentLanguage} />

        {/* 5. Core Clinicians & Clinic About Block */}
        <AboutUs 
          currentLanguage={currentLanguage} 
          onOpenBooking={triggerGeneralBooking} 
        />

        {/* 6. Dynamic interactable Before/After comparaison Slider */}
        <BeforeAfterGallery currentLanguage={currentLanguage} />

        {/* 7. Patient Testimonials */}
        <Testimonials currentLanguage={currentLanguage} />

        {/* 8. Frequently Asked Questions (FAQ) Accordion */}
        <FAQ currentLanguage={currentLanguage} />

        {/* 9. Anchor Contact & Booking block */}
        <ContactSection 
          currentLanguage={currentLanguage}
          preSelectedService={preselectedService}
          onBookingSuccess={handleBookingSuccess}
        />
      </main>

      {/* 10. Footer info boards */}
      <Footer 
        currentLanguage={currentLanguage} 
        onBookService={triggerServiceBooking} 
      />

      {/* 11. Sticky floating direct WhatsApp launcher */}
      <WhatsAppButton />

      {/* 12. Modal booking frame */}
      <BookModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        currentLanguage={currentLanguage} 
        preSelectedService={preselectedService}
      />

      {/* Action Notification Banner (Toast popup) */}
      {showToast && (
        <div className="fixed bottom-6 left-6 z-50 p-4 max-w-sm bg-slate-900 text-white rounded-2xl shadow-2xl border border-teal-500/20 flex items-start gap-3 animate-slideIn">
          <div className="p-1 rounded-lg bg-teal-500 text-white mt-0.5">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <div className="flex-1 text-left text-xs sm:text-sm">
            <h5 className="font-bold text-teal-400">Request Logged Successfully!</h5>
            <p className="text-slate-400 text-xs mt-1">We saved your appointment record. To coordinate your slot instantly, please click the floating green WhatsApp key to notify us directly!</p>
          </div>
          <button 
            onClick={() => setShowToast(false)}
            className="text-slate-500 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
