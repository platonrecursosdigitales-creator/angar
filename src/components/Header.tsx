import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Construcción', href: '#construccion' },
    { name: 'Inmobiliaria', href: '#inmobiliaria' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <>
      <header 
        className={`fixed left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-6 lg:px-12 ${
          isScrolled ? 'top-4 lg:top-6' : 'top-6 lg:top-10'
        }`}
      >
        <div 
          className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3 lg:py-4 transition-all duration-700"
          style={{
            background: 'rgba(37, 37, 37, 0.45)',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(14px)',
            WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'blur(14px)',
            border: '1px solid rgba(250, 247, 242, 0.16)',
            borderRadius: '14px'
          }}
        >
          
          {/* Bloque Izquierdo: Logo */}
          <a href="#inicio" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
            <img 
              src="/assets/logo/angarlogo.png" 
              alt="ANGAR Logo" 
              className="h-8 lg:h-10 w-auto object-contain brightness-0 invert"
            />
            <div className="flex flex-col justify-center mt-0.5">
              <span className="font-semibold uppercase tracking-[0.18em] text-lg lg:text-xl text-[#FAF7F2] leading-none">
                ANGAR
              </span>
            </div>
          </a>

          {/* Bloque Derecho: Teléfono, Menú, Botón */}
          <div className="flex items-center gap-6 lg:gap-8">
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[14px] lg:text-[15px] font-medium text-[#FAF7F2] hover:text-brand transition-colors tracking-[0.02em]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2 text-[#FAF7F2]">
              <Phone size={16} className="text-brand" />
              <span className="text-[14px] font-medium tracking-[0.02em]">+52 999 123 4567</span>
            </div>

            <a 
              href="#contacto"
              className="hidden md:flex items-center justify-center bg-[#FAF7F2] text-[#252525] font-medium text-[14px] tracking-[0.03em] uppercase rounded-[12px] px-[24px] py-[14px] hover:-translate-y-0.5 transition-transform duration-300"
            >
              Agendar Visita
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-[#FAF7F2] flex flex-col items-center justify-center gap-1.5 w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X size={26} />
              ) : (
                <>
                  <span className="w-6 h-[2px] bg-[#FAF7F2] rounded-full"></span>
                  <span className="w-6 h-[2px] bg-[#FAF7F2] rounded-full"></span>
                </>
              )}
            </button>

          </div>

        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        links={navLinks.map(l => ({ name: l.name, href: l.href }))} 
      />
    </>
  );
};
