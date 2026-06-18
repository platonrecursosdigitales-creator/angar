import React from 'react';
import { motion } from 'framer-motion';
import { lands } from '../data/properties';
import { SectionLabel } from './SectionLabel';
import { MapPin, Maximize, CreditCard, ArrowRight } from 'lucide-react';

export const LandSection: React.FC = () => {
  const customEase = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: customEase }
    }
  };

  return (
    <section id="terrenos" className="py-24 lg:py-32 bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: customEase }}
        >
          <SectionLabel text="Terrenos" />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1.1] text-main mb-6">
            Terrenos en venta
          </h2>
          <p className="text-[18px] lg:text-[20px] font-medium text-muted mb-16 max-w-2xl leading-[1.65]">
            Espacios disponibles para construir, invertir o desarrollar patrimonio. Consulta disponibilidad, ubicación, superficie y opciones de compra directamente con nuestro equipo.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {lands.map((land) => (
            <motion.div 
              key={land.id} 
              variants={itemVariants}
              className="group flex flex-col bg-main border border-border rounded-[24px] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div className="h-[260px] lg:h-[280px] overflow-hidden relative">
                <img 
                  src={land.image} 
                  alt={land.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-main shadow-sm">
                  {land.type}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold tracking-[-0.01em] text-main mb-6">{land.title}</h3>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3 text-muted group-hover:text-main/90 transition-colors duration-300">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[15px] font-medium leading-relaxed">{land.location}</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted group-hover:text-main/90 transition-colors duration-300">
                    <Maximize size={18} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[15px] font-medium leading-relaxed">{land.size}</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted group-hover:text-main/90 transition-colors duration-300">
                    <CreditCard size={18} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[15px] font-medium leading-relaxed">{land.credits}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <span className="font-bold text-xl tracking-tight text-main">{land.price}</span>
                  <a 
                    href={`https://wa.me/5211234567890?text=Hola,%20me%20interesa%20el%20${land.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand font-bold text-sm tracking-wide uppercase hover:text-brand-dark transition-colors group/btn"
                  >
                    WhatsApp
                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
