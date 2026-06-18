import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const services = [
    { 
      num: "01",
      title: "Construir", 
      text: "Vivienda nueva y obra civil con planeación, estructura, coordinación técnica y seguimiento profesional.",
      points: ["Vivienda nueva", "Obra civil", "Supervisión de avance"],
      image: "/images/construction_1.png"
    },
    { 
      num: "02",
      title: "Transformar", 
      text: "Remodelaciones, ampliaciones y adecuaciones pensadas para mejorar el uso, la imagen y el valor de cada espacio.",
      points: ["Remodelaciones", "Ampliaciones", "Adecuaciones funcionales"],
      image: "/images/hover-transformar.png"
    },
    { 
      num: "03",
      title: "Gestionar", 
      text: "Acompañamiento inmobiliario y documental para permisos, trámites, compra, venta e inversión con mayor claridad.",
      points: ["Permisos y trámites", "Compra y venta", "Terrenos e inversión"],
      image: "/images/hover-gestionar.png"
    }
  ];

  return (
    <section id="nosotros" className="relative py-24 lg:py-32 bg-main overflow-hidden">
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* BLOQUE 1 — Introducción Nosotros */}
        <div className="max-w-[900px] mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="mb-5"
          >
            <span className="inline-block uppercase text-brand font-bold text-[13px] tracking-[0.15em]">
              NOSOTROS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="text-[34px] md:text-[44px] lg:text-[52px] font-bold text-main mb-6 leading-[1.1] tracking-[-0.03em] text-balance mx-auto"
          >
            Construcción, obra civil e inmobiliaria bajo una misma visión
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
            className="text-[18px] lg:text-[20px] text-muted font-medium leading-[1.65] text-balance mx-auto"
          >
            ANGAR integra experiencia constructiva, obra civil, gestión documental y comercialización inmobiliaria para ofrecer soluciones completas a quienes buscan construir, transformar, comprar, vender o invertir en una propiedad.
          </motion.p>
        </div>

        {/* BLOQUE 2 — Statement editorial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
          className="bg-white border border-border/40 border-t-2 border-t-brand rounded-2xl p-8 lg:p-10 mb-20 lg:mb-[72px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.04)] max-w-4xl mx-auto"
        >
          <p className="text-[18px] lg:text-[20px] text-main font-medium leading-[1.65] text-balance text-center">
            Cada proyecto requiere claridad antes de avanzar: planeación, permisos, ejecución, seguimiento y una gestión ordenada. Por eso trabajamos con una visión integral que conecta la parte técnica de la obra con las decisiones inmobiliarias que dan valor a cada propiedad.
          </p>
        </motion.div>

        {/* BLOQUE 3 — Tres pilares */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-9">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: customEase, delay: 0.1 + (index * 0.1) }}
              className="group relative flex flex-col bg-white border border-border/60 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg h-auto lg:h-[420px]"
            >
              <div className="p-8 pb-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-brand font-bold text-sm tracking-widest">{item.num}</span>
                  <div className="h-[1px] flex-grow bg-border/40 group-hover:bg-brand/30 transition-colors duration-500"></div>
                </div>
                
                <h3 className="text-main mb-3 font-bold text-[24px] leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-muted font-medium text-[15px] leading-relaxed mb-6">
                  {item.text}
                </p>

                <ul className="space-y-3 mt-auto">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-muted text-[14.5px] font-medium">
                      <Check size={16} className="text-brand shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Franja de imagen inferior */}
              <div className="h-[120px] w-full relative mt-4">
                <div className="absolute inset-0 bg-brand/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
