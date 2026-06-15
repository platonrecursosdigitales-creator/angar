import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInmobiliariaOpen, setIsInmobiliariaOpen] = useState(false);

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
    { 
      name: 'Inmobiliaria', 
      href: '#inmobiliaria',
      dropdown: [
        { name: 'Terrenos', href: '#terrenos' },
        { name: 'Casas Nuevas', href: '#casas' },
        { name: 'Casas Usadas', href: '#casas' }
      ]
    },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-main/95 backdrop-blur-md shadow-sm py-4 border-b border-border/50' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-4 z-50">
            <img 
              src="/src/assets/logo/angarlogo.png" 
              alt="ANGAR Logo" 
              className="h-12 lg:h-16 w-auto object-contain transition-all duration-300"
            />
            <div className="flex flex-col justify-center mt-1">
              <span className="font-semibold uppercase tracking-[0.18em] text-2xl lg:text-3xl text-main leading-none">
                ANGAR
              </span>
              <span className="text-[10px] lg:text-[11px] text-muted uppercase tracking-[0.18em] mt-1.5 font-medium">
                Construcción e Inmobiliaria
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setIsInmobiliariaOpen(true)}
                  onMouseLeave={() => setIsInmobiliariaOpen(false)}
                >
                  <a 
                    href={link.href}
                    className="flex items-center gap-1 text-lg font-semibold text-main hover:text-brand transition-colors tracking-wide drop-shadow-sm"
                  >
                    {link.name}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isInmobiliariaOpen ? 'rotate-180' : ''}`} />
                  </a>
                  
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-main border border-border rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform origin-top-left ${isInmobiliariaOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    <div className="py-2">
                      {link.dropdown.map((dropLink, idx) => (
                        <a 
                          key={idx} 
                          href={dropLink.href}
                          className="block px-6 py-3 text-main hover:bg-soft hover:text-brand transition-colors font-medium tracking-wide"
                        >
                          {dropLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-semibold text-main hover:text-brand transition-colors tracking-wide drop-shadow-sm"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
