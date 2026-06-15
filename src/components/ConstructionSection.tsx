import React from 'react';
import { SectionLabel } from './SectionLabel';

export const ConstructionSection: React.FC = () => {
  return (
    <section id="construccion" className="py-24 lg:py-32 bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel text="Construcción" />
            
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-8">
              Construcción y obra civil
            </h2>
            
            <p className="text-xl text-muted mb-8 leading-[1.65]">
              Planeación, ejecución y seguimiento de proyectos con enfoque técnico, funcional y ordenado.
            </p>
            
            <p className="text-lg text-main/80 mb-12 leading-[1.65]">
              Trabajamos en proyectos residenciales, remodelaciones, ampliaciones, obra civil y preparación de espacios, cuidando cada etapa del proceso constructivo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'Construcción residencial', 'Obra civil', 'Remodelaciones', 
                'Ampliaciones', 'Acabados', 'Supervisión de obra', 
                'Preparación de terrenos', 'Desarrollo de proyectos'
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand/60 rounded-full"></div>
                  <span className="text-main font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden border border-border">
            <img 
              src="/src/assets/images/3.jpeg" 
              alt="Construcción y obra civil" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
