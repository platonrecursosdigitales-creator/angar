import React, { useState } from 'react';
import { houses } from '../data/properties';
import { SectionLabel } from './SectionLabel';
import { MapPin, BedDouble, Bath, Maximize, CreditCard, ArrowRight } from 'lucide-react';

export const HousesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Casa nueva' | 'Casa usada'>('all');

  const filteredHouses = filter === 'all' 
    ? houses 
    : houses.filter(h => h.type === filter);

  return (
    <section id="casas" className="py-24 lg:py-32 bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel text="Casas" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-6">
              Casas nuevas y usadas
            </h2>
            <p className="text-lg text-muted leading-[1.65]">
              Propiedades disponibles para habitar, invertir o remodelar. Contamos con opciones sujetas a disponibilidad, con posibilidad de compra mediante diferentes esquemas de crédito.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-main border-2 border-brand text-brand' : 'bg-transparent border-2 border-border text-muted hover:border-brand/50'
              }`}
            >
              Todas
            </button>
            <button 
              onClick={() => setFilter('Casa nueva')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'Casa nueva' ? 'bg-main border-2 border-brand text-brand' : 'bg-transparent border-2 border-border text-muted hover:border-brand/50'
              }`}
            >
              Nuevas
            </button>
            <button 
              onClick={() => setFilter('Casa usada')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'Casa usada' ? 'bg-main border-2 border-brand text-brand' : 'bg-transparent border-2 border-border text-muted hover:border-brand/50'
              }`}
            >
              Usadas
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredHouses.map((house) => (
            <div key={house.id} className="flex flex-col sm:flex-row bg-soft border border-border rounded-2xl overflow-hidden group">
              <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative">
                <img 
                  src={house.image} 
                  alt={house.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-main">
                  {house.type}
                </div>
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold tracking-[-0.01em] text-main mb-4">{house.title}</h3>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                  <div className="flex items-center gap-2 text-muted text-sm col-span-2">
                    <MapPin size={16} className="text-brand shrink-0" />
                    <span className="truncate">{house.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted text-sm">
                    <BedDouble size={16} className="text-brand shrink-0" />
                    <span>{house.bedrooms} Rec.</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted text-sm">
                    <Bath size={16} className="text-brand shrink-0" />
                    <span>{house.bathrooms} Baños</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted text-sm col-span-2">
                    <Maximize size={16} className="text-brand shrink-0" />
                    <span>{house.buildArea} Cons. / {house.landArea} Terr.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-muted text-sm mb-6">
                  <CreditCard size={16} className="mt-0.5 shrink-0 text-brand" />
                  <span>{house.credits}</span>
                </div>

                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/5211234567890?text=Hola,%20me%20interesa%20la%20${house.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex text-brand font-medium hover:text-brand-dark transition-colors items-center gap-2"
                  >
                    Solicitar información <ArrowRight size={18} />
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
