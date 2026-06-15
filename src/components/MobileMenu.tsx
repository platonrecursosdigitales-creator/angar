import React, { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-main flex flex-col pt-28 px-6 pb-6 overflow-y-auto">
      <nav className="flex flex-col gap-6 text-2xl font-semibold">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={onClose}
            className="text-main hover:text-brand transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="mt-auto pt-10 pb-4">
        <a 
          href="https://wa.me/5211234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full text-center bg-brand text-white rounded-full py-4 font-medium text-lg tracking-wide"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
};
