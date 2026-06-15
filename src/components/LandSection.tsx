import React from 'react';
import { lands } from '../data/properties';
import { SectionLabel } from './SectionLabel';
import { MapPin, Maximize, CreditCard } from 'lucide-react';

export const LandSection: React.FC = () => {
  return (
    <section id="terrenos" className="py-24 bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel text="Terrenos" />
        
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-6">
          Terrenos en venta
        </h2>
        <p className="text-lg text-muted mb-16 max-w-2xl leading-[1.65]">
          Espacios disponibles para construir, invertir o desarrollar patrimonio. Consulta disponibilidad, ubicación, superficie y opciones de compra directamente con nuestro equipo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lands.map((land) => (
            <div key={land.id} className="bg-main border border-border rounded-2xl overflow-hidden group hover:border-brand/30 transition-colors duration-300">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={land.image} 
                  alt={land.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-main">
                  {land.type}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.01em] text-main mb-4">{land.title}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-muted">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[15px]">{land.location}</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted">
                    <Maximize size={18} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[15px]">{land.size}</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted">
                    <CreditCard size={18} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[15px]">{land.credits}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <span className="font-semibold text-lg text-main">{land.price}</span>
                  <a 
                    href={`https://wa.me/5211234567890?text=Hola,%20me%20interesa%20el%20${land.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand font-medium hover:text-brand-dark transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
