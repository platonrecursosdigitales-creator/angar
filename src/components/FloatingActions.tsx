import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a 
        href="tel:+5211234567890"
        className="w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-main hover:bg-soft transition-colors"
        aria-label="Llamar"
      >
        <Phone size={20} />
      </a>
      <a 
        href="https://wa.me/5211234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#D96A2B] shadow-lg flex items-center justify-center text-white hover:bg-[#C95F2C] transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};
