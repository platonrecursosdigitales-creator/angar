import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '../data/properties';

export const RealEstateSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const [activeMapId, setActiveMapId] = useState<number | null>(null);

  const toggleMap = (id: number) => {
    setActiveMapId(activeMapId === id ? null : id);
  };

  return (
    <section id="inmobiliaria" className="py-[120px] lg:py-[150px] bg-main overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[64px]">
        
        {/* Encabezado Editorial */}
        <div className="flex flex-col items-start lg:items-center text-left lg:text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="w-full"
          >
            <div className="flex items-center lg:justify-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-brand"></div>
              <span 
                className="block uppercase text-brand font-bold"
                style={{ fontSize: '13px', letterSpacing: '0.15em' }}
              >
                PROPIEDADES DISPONIBLES
              </span>
              <div className="hidden lg:block w-12 h-[2px] bg-brand"></div>
            </div>
            
            <h2 
              className="text-main mb-8 text-balance max-w-4xl mx-auto"
              style={{ fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Opciones actuales para compra, inversión o patrimonio en San Luis Potosí.
            </h2>
            
            <p 
              className="text-main/80 max-w-3xl mx-auto"
              style={{ fontWeight: 500, fontSize: '19px', lineHeight: 1.6 }}
            >
              ANGAR reúne oportunidades inmobiliarias disponibles para quienes buscan comprar, invertir o desarrollar patrimonio. Cada propiedad se presenta con información clara, ubicación y acompañamiento durante el proceso de compra, documentación y cierre.
            </p>
          </motion.div>
        </div>

        {/* Lista de Propiedades Reales */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase, delay: index * 0.1 }}
              className="bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-sm border border-border flex flex-col"
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Lado Izquierdo: Imagen */}
                <div className="w-full lg:w-[45%] xl:w-[40%] relative min-h-[350px] lg:min-h-full">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-main text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {property.type}
                    </span>
                  </div>
                </div>

                {/* Lado Derecho: Contenido */}
                <div className="w-full lg:w-[55%] xl:w-[60%] p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Badges / Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {property.highlights.map((highlight, i) => (
                        <span key={i} className="bg-soft text-main/80 text-[13px] font-medium px-3 py-1 rounded-full border border-border/50">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-[32px] lg:text-[40px] font-bold text-main leading-[1.1] mb-4 tracking-[-0.02em]">
                      {property.title}
                    </h3>
                    
                    <p className="text-[17px] text-main/70 font-medium mb-6">
                      <span className="inline-block w-4 h-4 mr-2 text-brand">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </span>
                      {property.location}
                    </p>

                    <p className="text-[18px] text-main/90 font-medium leading-[1.65] mb-8">
                      {property.description}
                    </p>

                    {/* Precio */}
                    <div className="mb-10">
                      <span className="block text-sm uppercase text-brand font-bold tracking-wider mb-1">Inversión</span>
                      <span className="text-[32px] lg:text-[36px] font-bold text-main">
                        {property.price}
                      </span>
                    </div>
                  </div>

                  {/* Acciones (Botones) */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://wa.me/5211234567890?text=Hola,%20quisiera%20solicitar%20información%20sobre%20el%20proyecto:%20${property.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-brand text-white font-bold text-[15px] tracking-wide px-8 py-4 rounded-[12px] hover:bg-brand-dark transition-colors"
                    >
                      Solicitar información
                    </a>
                    <button 
                      onClick={() => toggleMap(property.id)}
                      className="inline-flex items-center justify-center bg-transparent border-2 border-brand text-brand font-bold text-[15px] tracking-wide px-8 py-4 rounded-[12px] hover:bg-brand/5 transition-colors"
                    >
                      {activeMapId === property.id ? 'Ocultar ubicación' : 'Ver ubicación'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mapa Desplegable */}
              <AnimatePresence>
                {activeMapId === property.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: customEase }}
                    className="border-t border-border bg-soft/30 overflow-hidden"
                  >
                    <div className="p-4 lg:p-8">
                      <div className="w-full aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden border border-border shadow-inner" dangerouslySetInnerHTML={{ __html: property.mapIframe.replace('width="600"', 'width="100%"').replace('height="450"', 'height="100%"') }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
