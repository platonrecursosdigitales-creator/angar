import React from 'react';
import { SectionLabel } from './SectionLabel';

export const CreditsSection: React.FC = () => {
  return (
    <section className="py-24 bg-main border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex justify-center">
          <SectionLabel text="Créditos" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-6">
          Orientación para comprar con respaldo
        </h2>
        <p className="text-lg text-muted mb-16 max-w-2xl mx-auto leading-[1.65]">
          Acompañamos procesos relacionados con INFONAVIT, FOVISSSTE y alternativas de adquisición, revisando la viabilidad y la documentación necesaria para avanzar.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {['Infonavit', 'Fovissste', 'Bancario', 'Pensionados', 'Recursos propios'].map((credit) => (
            <div 
              key={credit} 
              className="px-8 py-4 border border-border rounded-full text-main font-medium bg-soft/50 hover:bg-soft transition-colors"
            >
              {credit}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-muted mt-12 tracking-wide font-medium">
          Servicio con conocimiento certificado en procesos INFONAVIT.
        </p>
      </div>
    </section>
  );
};
