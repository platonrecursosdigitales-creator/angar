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
    <section id="inmobiliaria" className="py-[120px] lg:py-[180px] bg-main overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[64px]">
        
        {/* Encabezado Editorial Minimalista */}
        <div className="mb-20 lg:mb-32 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span 
                className="block uppercase text-brand font-bold"
                style={{ fontSize: '13px', letterSpacing: '0.2em' }}
              >
                PROPIEDADES DISPONIBLES
              </span>
              <div className="w-16 h-[1px] bg-brand"></div>
            </div>
            
            <h2 
              className="text-main mb-8 text-balance"
              style={{ fontWeight: 400, fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              Opciones actuales para compra, inversión o patrimonio en San Luis Potosí.
            </h2>
            
            <p 
              className="text-main/70 max-w-2xl"
              style={{ fontWeight: 400, fontSize: '20px', lineHeight: 1.6 }}
            >
              Reunimos oportunidades inmobiliarias seleccionadas. Cada propiedad se presenta con información técnica clara, ubicación precisa y nuestro acompañamiento durante todo el proceso de cierre.
            </p>
          </motion.div>
        </div>

        {/* Lista de Propiedades - Estilo Editorial / Brutalista suave */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase, delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* Layout Dividido */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-stretch">
                
                {/* Lado Izquierdo: Visual (Imagen o Tipografía) */}
                <div className="lg:col-span-5 relative w-full aspect-[4/5] lg:aspect-auto">
                  {property.id === 1 ? (
                    // Bloque CSS Tipográfico para Casa Morales (Elimina el look de IA)
                    <div className="w-full h-full min-h-[400px] lg:min-h-full bg-[#E5DCD0] flex flex-col items-center justify-center p-8 border border-border">
                      <span className="block text-brand tracking-[0.4em] text-xs font-bold mb-6 uppercase">
                        Ubicación Exclusiva
                      </span>
                      <h3 className="text-5xl md:text-6xl text-main tracking-widest uppercase" style={{ fontWeight: 300, fontFamily: 'serif' }}>
                        Morales
                      </h3>
                      <div className="w-px h-12 bg-brand/30 mt-8"></div>
                    </div>
                  ) : (
                    // Imagen real (Terreno) con recorte geométrico y fallback
                    <div className="w-full h-full min-h-[400px] lg:min-h-full">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-full h-full object-cover border border-border"
                        style={{ filter: 'contrast(1.05) saturate(0.95)' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.querySelector('.fallback-block')?.classList.remove('hidden');
                        }}
                      />
                      <div className="fallback-block hidden w-full h-full min-h-[400px] bg-[#f4f1eb] flex flex-col items-center justify-center p-8 border border-border">
                        <svg className="w-12 h-12 text-brand/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="block text-main/50 text-sm tracking-widest uppercase text-center font-bold">Esperando archivo de imagen...</span>
                        <span className="block text-main/40 text-xs text-center mt-2">Falta guardar {property.image} en la carpeta public</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Lado Derecho: Contenido Elegante */}
                <div className="lg:col-span-7 flex flex-col justify-center py-6 lg:py-12">
                  
                  {/* Tipo de Propiedad */}
                  <span className="block text-brand uppercase tracking-[0.15em] text-sm font-bold mb-6">
                    {property.type}
                  </span>

                  {/* Título */}
                  <h3 className="text-[36px] lg:text-[48px] font-bold text-main leading-[1.05] mb-8 tracking-[-0.02em]">
                    {property.title}
                  </h3>
                  
                  {/* Highlights (Separados por puntos, sin badges de cápsula) */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-main/80 text-[13px] tracking-widest uppercase font-medium">
                    {property.highlights.map((highlight, i) => (
                      <React.Fragment key={i}>
                        <span>{highlight}</span>
                        {i < property.highlights.length - 1 && <span className="text-brand/50">•</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Descripción */}
                  <p className="text-[18px] lg:text-[20px] text-main/80 font-normal leading-[1.6] mb-12 max-w-2xl text-balance">
                    {property.description}
                  </p>

                  {/* Bloque Inferior: Precio y Botones */}
                  <div className="mt-auto border-t border-border pt-8 flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                    {/* Precio */}
                    <div>
                      <span className="block text-xs uppercase text-brand font-bold tracking-[0.2em] mb-2">Inversión</span>
                      <span className="text-[32px] lg:text-[40px] font-light text-main tracking-tight">
                        {property.price}
                      </span>
                    </div>

                    {/* Acciones Geométricas */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => toggleMap(property.id)}
                        className="inline-flex items-center justify-center bg-transparent border border-main text-main font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-main hover:text-white transition-colors duration-300"
                      >
                        {activeMapId === property.id ? 'Ocultar mapa' : 'Ver mapa'}
                      </button>
                      <a 
                        href={`https://wa.me/5211234567890?text=Hola,%20quisiera%20solicitar%20información%20sobre%20el%20proyecto:%20${property.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-brand border border-brand text-white font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-brand-dark hover:border-brand-dark transition-colors duration-300"
                      >
                        Contactar
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Mapa Desplegable Integrado */}
              <AnimatePresence>
                {activeMapId === property.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-10">
                      <div className="w-full aspect-[16/9] lg:aspect-[21/9] border border-border">
                        <iframe 
                          src={property.mapIframe} 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen={false} 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
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
