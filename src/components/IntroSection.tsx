import React from 'react';
import { SectionLabel } from './SectionLabel';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-main border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel text="Presentación" />
        
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-12 max-w-4xl">
          Construcción e inmobiliaria bajo una misma visión
        </h2>
        
        <p className="text-xl text-muted mb-20 max-w-3xl leading-[1.65]">
          ANGAR integra experiencia constructiva, obra civil y comercialización inmobiliaria para ofrecer soluciones completas a quienes buscan construir, comprar, vender o invertir en una propiedad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-16">
          <div className="group">
            <div className="w-10 h-[1px] bg-brand mb-6 transition-all duration-300 group-hover:w-16"></div>
            <h3 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-4">Construcción</h3>
            <p className="text-muted leading-[1.65]">Ejecución y desarrollo de proyectos residenciales y civiles.</p>
          </div>
          <div className="group">
            <div className="w-10 h-[1px] bg-brand mb-6 transition-all duration-300 group-hover:w-16"></div>
            <h3 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-4">Inmobiliaria</h3>
            <p className="text-muted leading-[1.65]">Venta y comercialización de terrenos, casas nuevas y usadas.</p>
          </div>
          <div className="group">
            <div className="w-10 h-[1px] bg-brand mb-6 transition-all duration-300 group-hover:w-16"></div>
            <h3 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-4">Asesoría</h3>
            <p className="text-muted leading-[1.65]">Acompañamiento en opciones de crédito y proceso de compra.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
