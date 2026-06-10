import React from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = "+919031840505", 
  defaultMessage = "Hello i Smile Dental Care, I would like to book a dental appointment." 
}: WhatsAppButtonProps) {
  
  const handleChatOpening = () => {
    // Sanitize phone and build link
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
    const encodedMsg = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${cleanPhone}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      
      {/* Floating tooltip/hint bubble */}
      <div className="absolute right-14 bottom-2.5 bg-slate-900 text-white text-[10px] sm:text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg border border-slate-800 whitespace-nowrap animate-bounce hidden md:block">
        Book on WhatsApp Instant!
      </div>

      {/* Pulsing button circles background */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 scale-125 animate-ping -z-10" />

      <button
        onClick={handleChatOpening}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 duration-200 cursor-pointer group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-white/10 group-hover:rotate-6 transition-transform" />
      </button>

    </div>
  );
}
