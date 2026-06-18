import React from 'react';
import { motion } from 'framer-motion';

export const IntroSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section id="nosotros" className="py-[120px] lg:py-[160px] bg-main overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Columna Izquierda */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              <span 
                className="block uppercase text-brand mb-6"
                style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em' }}
              >
                VISIÓN INTEGRAL
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
              className="text-[34px] md:text-[42px] lg:text-[62px] font-bold text-main mb-8"
              style={{ lineHeight: 1.02, letterSpacing: '-0.045em' }}
            >
              Una forma más clara de construir, transformar y gestionar propiedad
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
              className="text-[18px] lg:text-[22px] text-muted mb-12 max-w-[600px]"
              style={{ fontWeight: 500, lineHeight: 1.65 }}
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
                className="inline-flex items-center text-brand uppercase hover:text-brand-dark transition-colors"
                style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.03em' }}
              >
                Solicitar asesoría
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Columna Derecha */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            {/* Revelado de Imagen */}
            <motion.div
              initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: customEase }}
              className="w-full aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-[16px]"
            >
              <img 
                src="/images/residencia_intro.png" 
                alt="Arquitectura residencial moderna" 
                className="w-full h-full object-cover scale-[1.03] hover:scale-100 transition-transform duration-1000"
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
                  transition={{ duration: 0.8, ease: customEase, delay: 0.3 + (index * 0.15) }}
                  className="group relative flex flex-col py-8 lg:py-10 transition-transform duration-500 hover:-translate-y-1 focus-within:-translate-y-1 outline-none"
                  tabIndex={0}
                >
                  {/* Línea Divisoria Superior */}
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: customEase, delay: 0.1 + (index * 0.1) }}
                    className="absolute top-0 left-0 h-[1px] bg-border"
                  />
                  
                  {/* Acento Naranja */}
                  <div className="w-8 h-[2px] bg-brand mb-5 transition-all duration-500 group-hover:w-14 group-focus:w-14"></div>
                  
                  <h3 
                    className="text-main mb-3"
                    style={{ fontWeight: 700, fontSize: '24px', lineHeight: 1.15 }}
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    className="text-muted"
                    style={{ fontWeight: 500, fontSize: '16px', lineHeight: 1.65, maxWidth: '520px' }}
                  >
                    {item.text}
                  </p>

                  {/* Imagen Expandible (Solo Desktop) */}
                  <div 
                    className="hidden lg:grid transition-all duration-[300ms] group-hover:duration-[450ms] group-focus:duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] opacity-0 group-hover:opacity-100 group-focus:opacity-100 scale-[0.96] group-hover:scale-100 group-focus:scale-100 origin-top"
                  >
                    <div className="overflow-hidden">
                      <div className="pt-6">
                        <img 
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-[220px] object-cover rounded-[24px] border border-border bg-[#EFE5D8]"
                          loading="lazy"
                        />
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
                transition={{ duration: 1, ease: customEase, delay: 0.7 }}
                className="h-[1px] bg-border w-full"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
