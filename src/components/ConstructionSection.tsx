import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

export const ConstructionSection: React.FC = () => {
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] uppercase leading-[1.05] text-main mb-16"
            >
              Construcción y Obra Civil
            </motion.h2>

            <div className="space-y-12">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-brand mb-3">
                  Proyectos Residenciales
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                  Planeación y ejecución integral de viviendas de alto nivel con enfoque técnico y funcional.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#C95F2C] mb-3">
                  Obra Civil y Comercial
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                  Desarrollo de espacios comerciales y estructuras complejas con eficiencia técnica.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#D96A2B] opacity-80 mb-3">
                  Remodelaciones y Acabados
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                  Transformación de espacios y atención exhaustiva al detalle y la calidad de los materiales.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-muted mb-3">
                  Preparación de Terrenos
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                  Movimientos de tierra, cimentaciones y adecuación precisa para el arranque de obra.
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
                className="inline-block bg-[#C95F2C] text-[#FAF7F2] font-semibold tracking-wider uppercase px-10 py-5 rounded-sm hover:bg-[#D96A2B] transition-colors duration-300"
              >
                Agendar Cita
              </a>
            </motion.div>

          </div>

          {/* Lado Derecho: Imagen Gigante */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 h-[600px] lg:h-auto min-h-[800px] relative rounded-3xl overflow-hidden"
          >
            <img 
              src="/images/1.jpeg" 
              alt="Construcción y obra civil de alto nivel" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
