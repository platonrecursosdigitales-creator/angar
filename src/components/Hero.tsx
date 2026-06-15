import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/1.jpeg" 
          alt="Proyectos ANGAR" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-soft/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-brand-dark">
              CONSTRUCCIÓN · OBRA CIVIL · INMOBILIARIA
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.05] text-main mb-8">
            Construcción, obra civil e inmobiliaria
          </h1>
          
          <p className="text-lg md:text-xl text-main/80 mb-12 max-w-2xl leading-[1.65] font-medium">
            Desarrollamos, construimos y comercializamos propiedades con una visión técnica, clara y funcional: terrenos, casas nuevas, casas usadas y proyectos de obra civil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#construccion" variant="primary">
              Ver servicios
            </Button>
            <Button href="https://wa.me/5211234567890" variant="secondary" target="_blank" rel="noopener noreferrer">
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-6 lg:left-12 w-[1px] h-32 bg-border hidden md:block"></div>
      <div className="absolute bottom-8 right-6 lg:right-12 text-muted font-medium tracking-[0.18em] text-sm">
        01
      </div>
    </section>
  );
};
