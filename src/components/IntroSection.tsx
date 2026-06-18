import React from 'react';
import { motion } from 'framer-motion';

export const IntroSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const marqueeImages = [
    "/images/construction_1.png",
    "/images/residencia_intro.png",
    "/images/construction_2.png",
    "/images/1_new.png",
    "/images/2_new.png",
    "/images/3_new.png"
  ];

  const services = [
    { 
      num: "01",
      title: "Construir", 
      text: "Vivienda nueva y obra civil con planeación, estructura, coordinación técnica y seguimiento profesional.",
      image: "/images/hover-construir.png",
      alt: "Construcción habitacional en proceso con estructura y trabajo técnico ordenado"
    },
    { 
      num: "02",
      title: "Transformar", 
      text: "Remodelaciones, ampliaciones y adecuaciones pensadas para mejorar el uso, la imagen y el valor de cada espacio.",
      image: "/images/hover-transformar.png",
      alt: "Remodelación residencial con acabados y mejora de espacios"
    },
    { 
      num: "03",
      title: "Gestionar", 
      text: "Acompañamiento inmobiliario y documental para permisos, trámites, compra, venta e inversión con mayor claridad.",
      image: "/images/hover-gestionar.png",
      alt: "Gestión inmobiliaria con documentos, planos y llaves sobre mesa de trabajo"
    }
  ];

  return (
    <section id="nosotros" className="relative py-24 lg:py-[160px] bg-main overflow-hidden">
      
      {/* Fondo Visual Animado (Marquee) */}
      <div className="absolute top-0 left-0 w-full h-[600px] lg:h-[700px] pointer-events-none z-0 overflow-hidden">
        {/* Overlays para fundir con el fondo y teñir. Reducimos drasticamente la opacidad visual */}
        <div className="absolute inset-0 bg-brand mix-blend-color z-10 opacity-40"></div>
        <div className="absolute inset-0 bg-main opacity-85 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-main/95 to-main z-20"></div>
        
        <div className="flex w-max h-[400px] lg:h-[500px] animate-marquee filter blur-[3px] opacity-30 grayscale">
          {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((src, idx) => (
            <div key={idx} className="w-[300px] lg:w-[450px] h-full shrink-0">
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-[80px]">
        
        {/* Encabezado Editorial */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand/60"></div>
              <span className="uppercase text-brand font-bold text-[13px] tracking-[0.15em]">
                Nosotros
              </span>
              <div className="w-8 h-[2px] bg-brand/60"></div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
            className="text-[38px] md:text-[50px] lg:text-[62px] font-bold text-main mb-8 leading-[1.05] tracking-[-0.035em] text-balance mx-auto"
          >
            Construcción, obra civil e inmobiliaria bajo una misma visión
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
            className="text-[18px] lg:text-[22px] text-muted font-medium leading-[1.7] text-balance mx-auto max-w-3xl"
          >
            ANGAR integra experiencia constructiva, obra civil, gestión documental y comercialización inmobiliaria para ofrecer soluciones completas a quienes buscan construir, transformar, comprar, vender o invertir en una propiedad.
          </motion.p>
        </div>

        {/* Statement Central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: customEase, delay: 0.2 }}
          className="bg-white border border-border/40 border-t-4 border-t-brand rounded-[24px] lg:rounded-[32px] p-8 lg:p-14 mb-20 lg:mb-32 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] max-w-5xl mx-auto"
        >
          <p className="text-[20px] lg:text-[26px] text-main font-semibold leading-[1.6] text-balance text-center max-w-4xl mx-auto">
            “Cada proyecto requiere claridad antes de avanzar: planeación, permisos, ejecución, seguimiento y una gestión ordenada. Por eso trabajamos con una visión integral que conecta la parte técnica de la obra con las decisiones inmobiliarias que dan valor a cada propiedad.”
          </p>
        </motion.div>

        {/* Grid de 3 Columnas: Construir, Transformar, Gestionar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.1 + (index * 0.15) }}
              className="group relative flex flex-col bg-white/70 backdrop-blur-sm border border-border/60 p-8 lg:p-10 rounded-[28px] transition-all duration-500 hover:bg-white hover:border-brand/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 focus-within:border-brand/40 outline-none"
              tabIndex={0}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-brand font-bold text-lg tracking-wider">{item.num}</span>
                <div className="h-[1px] flex-grow bg-border/60 group-hover:bg-brand/30 transition-colors duration-500"></div>
              </div>
              
              <h3 className="text-main mb-4 font-bold text-[26px] lg:text-[28px] leading-[1.15]">
                {item.title}
              </h3>
              
              <p className="text-muted font-medium text-[16px] leading-[1.65] mb-6">
                {item.text}
              </p>

              {/* Imagen Expandible (Solo Desktop para no estorbar en mobile) */}
              <div className="hidden lg:grid mt-auto transition-all duration-[400ms] group-hover:duration-[500ms] group-focus:duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] opacity-0 group-hover:opacity-100 group-focus:opacity-100 scale-[0.96] group-hover:scale-100 group-focus:scale-100 origin-top">
                <div className="overflow-hidden">
                  <div className="pt-4">
                    <img 
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-[180px] object-cover rounded-[20px] border border-border/50 bg-[#EFE5D8]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
