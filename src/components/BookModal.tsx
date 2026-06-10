import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ContactSection from './ContactSection';

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: 'en' | 'hi';
  preSelectedService?: string;
}

export default function BookModal({ isOpen, onClose, currentLanguage, preSelectedService }: BookModalProps) {
  
  // Close on Escape keys press on keyboard
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // stop page scrolling
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
      
      {/* Black Translucent backdrop mask */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
      />

      {/* Modal core window */}
      <div className="bg-white rounded-3xl w-full max-w-3xl relative z-10 max-h-[90vh] overflow-y-auto shadow-2xl border border-teal-50 animate-scaleUp">
        
        {/* Header bar */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-500 hover:text-gray-800 transition shadow-sm cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Leverage our existing clean ContactSection booking core inside the popup! */}
        <div className="p-1 pt-4 sm:p-4">
          <ContactSection 
            currentLanguage={currentLanguage} 
            preSelectedService={preSelectedService || ""}
            onBookingSuccess={() => {
              // Automatically trigger modal closing after a small delay to read result or let them tap whatsapp
            }} 
          />
        </div>

      </div>

    </div>
  );
}
