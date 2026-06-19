import React from 'react';
import { motion } from 'framer-motion';

export const IntroSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const services = [
    { 
      title: "Construir", 
      text: "Viviendas nuevas y obra civil residencial con planeación, estructura y seguimiento profesional.",
      image: "/images/obra_real.jpeg",
      alt: "Obra residencial construida por ANGAR"
    },
    { 
      title: "Transformar", 
      text: "Remodelaciones y ampliaciones pensadas para mejorar el uso, la imagen y el valor de cada espacio.",
      image: "/images/hover-transformar.png",
      alt: "Remodelación residencial con acabados y mejora de espacios"
    },
    { 
      title: "Gestionar", 
      text: "Acompañamiento inmobiliario y documental para permisos, trámites, compra, venta e inversión.",
      image: "/images/hover-gestionar.png",
      alt: "Gestión inmobiliaria con documentos, planos y llaves sobre mesa de trabajo"
    }
  ];

  return (
    <section id="nosotros" className="py-[120px] lg:py-[180px] bg-main">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        
        {/* Encabezado Superior (A lo largo - Split Layout) */}
        <div className="mb-24 lg:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-[2px] bg-brand"></div>
            <span 
              className="block uppercase text-brand"
              style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.15em' }}
            >
              VISIÓN INTEGRAL
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            {/* Título - Izquierda */}
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
                className="text-[42px] md:text-[64px] lg:text-[76px] xl:text-[88px] font-bold text-main text-balance"
                style={{ lineHeight: 1.05, letterSpacing: '-0.03em' }}
              >
                Una forma más clara de construir, transformar y gestionar propiedad
              </motion.h2>
            </div>

            {/* Párrafo y CTA - Derecha */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end lg:pb-4">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
                className="text-[20px] lg:text-[24px] text-main/90 mb-10"
                style={{ fontWeight: 500, lineHeight: 1.6 }}
              >
                En ANGAR acompañamos proyectos de vivienda y propiedad con una visión completa: planeación, ejecución, gestión documental y seguimiento para avanzar con mayor claridad.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: customEase, delay: 0.3 }}
              >
                <a 
                  href="#contacto"
                  className="group inline-flex items-center text-brand uppercase hover:text-brand-dark transition-colors"
                  style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '0.05em' }}
                >
                  Solicitar asesoría
                  <svg className="w-6 h-6 ml-3 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contenido Inferior: Layout Alternado de Servicios */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {services.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Lado de la Imagen */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: customEase }}
                    className="aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-[24px] shadow-sm"
                  >
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                    />
                  </motion.div>
                </div>

                {/* Lado del Texto */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
                    className={`max-w-[540px] ${!isEven ? 'lg:ml-auto' : ''}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-brand font-bold text-lg tracking-widest">0{index + 1}</span>
                      <div className="h-[2px] w-12 bg-brand/30"></div>
                    </div>
                    
                    <h3 
                      className="text-[40px] lg:text-[56px] font-bold text-main mb-6 leading-tight"
                    >
                      {item.title}
                    </h3>
                    
                    <p 
                      className="text-[18px] lg:text-[22px] text-main/80 leading-relaxed"
                      style={{ fontWeight: 500 }}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
