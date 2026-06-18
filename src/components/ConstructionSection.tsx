import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

export const ConstructionSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="construccion" className="py-24 lg:py-32 bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex items-center gap-3 mb-12">
          <SectionLabel text="Construcción" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Lado Izquierdo: Textos y Títulos */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1.1] text-main mb-6"
            >
              Construcción y obra civil para vivienda
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-muted text-[18px] lg:text-[20px] font-medium leading-[1.65] mb-12"
            >
              Desarrollamos vivienda nueva, remodelaciones y ampliaciones con planeación técnica, gestión de permisos y ejecución ordenada hasta la entrega.
            </motion.p>

            <div className="space-y-12 lg:space-y-8">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-brand mb-2">
                  Vivienda desde cero
                </h3>
                <p className="text-muted text-lg font-medium leading-[1.65]">
                  Construimos proyectos habitacionales desde la cimentación hasta la entrega, siguiendo el proyecto acordado y cuidando cada etapa de obra.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-brand mb-2">
                  Obra civil
                </h3>
                <p className="text-muted text-lg font-medium leading-[1.65]">
                  Coordinamos trabajos estructurales, albañilería, instalaciones y procesos constructivos con seguimiento técnico y orden de ejecución.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-brand mb-2">
                  Remodelación y ampliación
                </h3>
                <p className="text-muted text-lg font-medium leading-[1.65]">
                  Intervenimos viviendas existentes, ampliamos espacios, desarrollamos segundos o terceros niveles y mejoramos la funcionalidad del inmueble.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-brand mb-2">
                  Permisos, instalaciones y entrega
                </h3>
                <p className="text-muted text-lg font-medium leading-[1.65]">
                  Preparamos la gestión ante autoridades, coordinamos servicios y cuidamos los detalles finales para entregar espacios habitables.
                </p>
              </motion.div>
              
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16"
            >
              <a 
                href="#contacto" 
                className="inline-block bg-brand text-[#FAF7F2] font-bold tracking-wider uppercase px-10 py-5 rounded-sm hover:bg-brand-dark transition-colors duration-300"
              >
                Agendar Cita
              </a>
            </motion.div>

          </div>

          {/* Lado Derecho: Imagen Gigante con Sistema de Alternancia */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 h-[600px] lg:h-auto min-h-[800px] relative rounded-3xl overflow-hidden bg-alt"
          >
            <AnimatePresence>
              {currentImage === 0 && (
                <motion.img 
                  key="img1"
                  src="/images/construction_1.png" 
                  alt="Etapa estructural de vivienda" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {currentImage === 1 && (
                <motion.img 
                  key="img2"
                  src="/images/construction_2.png" 
                  alt="Avance y entrega de vivienda" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
