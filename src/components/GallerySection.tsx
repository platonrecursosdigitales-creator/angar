import React from 'react';
import { galleryItems } from '../data/gallery';
import { SectionLabel } from './SectionLabel';

export const GallerySection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-soft border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel text="Galería" />
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-6">
            Proyectos y propiedades
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-[1.65]">
            Una vista visual de construcción, obra, terrenos y espacios habitacionales.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-border">
              <img 
                src={item.image} 
                alt={item.category} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-main/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-main translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
