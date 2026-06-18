import React from 'react';
import { motion } from 'framer-motion';

export const IntroSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section id="nosotros" className="py-[120px] lg:py-[180px] bg-main overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Columna Izquierda */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-[2px] bg-brand"></div>
              <span 
                className="block uppercase text-brand"
                style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.15em' }}
              >
                VISIÓN INTEGRAL
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
              className="text-[40px] md:text-[52px] lg:text-[68px] font-bold text-main mb-10 text-balance"
              style={{ lineHeight: 1.05, letterSpacing: '-0.04em' }}
            >
              Una forma más clara de construir, transformar y gestionar propiedad
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
              className="text-[20px] lg:text-[24px] text-main/90 mb-14 max-w-[540px] text-balance"
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
                style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.05em' }}
              >
                Solicitar asesoría
                <svg className="w-5 h-5 ml-3 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Columna Derecha */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-16 lg:pl-10">
            
            {/* Revelado de Imagen */}
            <motion.div
              initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: customEase }}
              className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-[24px]"
            >
              <img 
                src="/images/residencia_intro.png" 
                alt="Arquitectura residencial moderna" 
                className="w-full h-full object-cover scale-[1.03] hover:scale-100 transition-transform duration-[1.5s]"
              />
            </motion.div>

            {/* Lista Editorial de Servicios */}
            <div className="flex flex-col w-full">
              {[
                { 
                  title: "Construir", 
                  text: "Viviendas nuevas y obra civil residencial con planeación, estructura y seguimiento profesional.",
                  image: "/images/hover-construir.png",
                  alt: "Construcción habitacional en proceso con estructura y trabajo técnico ordenado"
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
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: customEase, delay: 0.2 + (index * 0.1) }}
                  className="group relative flex flex-col py-10 lg:py-12 transition-colors duration-500 outline-none"
                  tabIndex={0}
                >
                  {/* Línea Divisoria Superior */}
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: customEase, delay: 0.1 + (index * 0.1) }}
                    className="absolute top-0 left-0 h-[1px] bg-border/80"
                  />
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12">
                    <div className="lg:w-1/3">
                      {/* Acento Naranja Dinámico */}
                      <div className="w-8 h-[3px] bg-brand mb-6 transition-all duration-500 group-hover:w-16"></div>
                      <h3 
                        className="text-main font-bold"
                        style={{ fontSize: '32px', lineHeight: 1.1 }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="lg:w-2/3 flex flex-col">
                      <p 
                        className="text-main/80"
                        style={{ fontWeight: 500, fontSize: '18px', lineHeight: 1.6, maxWidth: '480px' }}
                      >
                        {item.text}
                      </p>

                      {/* Imagen Expandible (Despliegue sutil) */}
                      <div 
                        className="hidden lg:grid transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 scale-[0.97] group-hover:scale-100 origin-top"
                      >
                        <div className="overflow-hidden">
                          <div className="pt-8">
                            <img 
                              src={item.image}
                              alt={item.alt}
                              className="w-full h-[280px] object-cover rounded-[20px] shadow-sm"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Línea Divisoria Final */}
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: customEase, delay: 0.6 }}
                className="h-[1px] bg-border/80 w-full"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
