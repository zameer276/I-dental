import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Globe, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface NavbarProps {
  currentLanguage: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  onOpenBooking: () => void;
}

export default function Navbar({ currentLanguage, setLanguage, onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksEn = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const navLinksHi = [
    { name: "मुख्य", href: "#home" },
    { name: "सेवाएं", href: "#services" },
    { name: "विशेषताएं", href: "#why-choose-us" },
    { name: "हमारे बारे में", href: "#about" },
    { name: "गैलरी", href: "#gallery" },
    { name: "सामान्य प्रश्न", href: "#faq" },
    { name: "संपर्क", href: "#contact" }
  ];

  const links = currentLanguage === 'en' ? navLinksEn : navLinksHi;

  return (
    <header 
      id="main-navbar" 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-teal-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-teal-200 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-gray-900 flex items-center">
                i <span className="text-teal-600 ml-1">Smile</span>
              </span>
              <span className="text-[10px] tracking-widest text-teal-700 uppercase font-bold -mt-1 font-mono">
                Dental Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors duration-200 relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTAs and Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(currentLanguage === 'en' ? 'hi' : 'en')}
              className="px-3 py-1.5 rounded-full border border-teal-200 hover:bg-teal-50 text-teal-700 font-medium text-xs flex items-center gap-1.5 transition-all"
              title="Switch Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLanguage === 'en' ? "हिंदी" : "English"}</span>
            </button>

            {/* Call Button */}
            <a 
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1.5 text-gray-700 hover:text-teal-600 font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-500 animate-pulse" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            {/* Quick Book Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? "Book Appointment" : "अपॉइंटमेंट बुक करें"}</span>
            </button>
          </div>

          {/* Mobile elements (Language & Menu trigger) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setLanguage(currentLanguage === 'en' ? 'hi' : 'en')}
              className="px-2.5 py-1.5 rounded-full border border-teal-200 hover:bg-teal-50 text-teal-700 font-medium text-xs flex items-center gap-1 transition-all mr-1"
            >
              <Globe className="w-3 h-3" />
              <span>{currentLanguage === 'en' ? "हिंदी" : "EN"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-teal-50 text-gray-700 hover:text-teal-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-teal-100 shadow-xl py-4 px-4 transition-all duration-300">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-teal-50 text-gray-700 hover:text-teal-600 font-medium transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-4 border-t border-teal-100 flex flex-col gap-3">
            <a 
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-teal-200 text-gray-800 font-semibold text-sm hover:bg-teal-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-500" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{currentLanguage === 'en' ? "Book Appointment" : "अपॉइंटमेंट बुक करें"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
