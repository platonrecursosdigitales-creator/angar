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
                style={{ fontWeight: 500, fontSize: '13px', letterSpacing: '0.12em' }}
              >
                VISIÓN INTEGRAL
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
              className="text-[34px] md:text-[42px] lg:text-[62px] font-light text-main mb-8"
              style={{ lineHeight: 1.02, letterSpacing: '-0.045em' }}
            >
              Construcción e inmobiliaria bajo una misma visión
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
              className="text-[18px] lg:text-[22px] text-muted mb-12 max-w-[600px]"
              style={{ fontWeight: 400, lineHeight: 1.55 }}
            >
              ANGAR integra experiencia constructiva, obra civil y comercialización inmobiliaria para ofrecer soluciones completas a quienes buscan construir, comprar, vender o invertir en una propiedad.
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
                style={{ fontWeight: 500, fontSize: '14px', letterSpacing: '0.03em' }}
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
                src="/assets/images/residencia_intro.png" 
                alt="Arquitectura residencial moderna" 
                className="w-full h-full object-cover scale-[1.03] hover:scale-100 transition-transform duration-1000"
              />
            </motion.div>

            {/* Lista Editorial de Servicios */}
            <div className="flex flex-col w-full">
              {[
                { title: "Construcción", text: "Ejecución y desarrollo de proyectos residenciales y civiles con planeación, control y calidad constructiva." },
                { title: "Inmobiliaria", text: "Comercialización de terrenos, casas nuevas y propiedades con enfoque estratégico y acompañamiento profesional." },
                { title: "Asesoría", text: "Orientación en compra, venta, inversión y opciones de crédito para tomar decisiones más claras y seguras." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: customEase, delay: 0.3 + (index * 0.15) }}
                  className="group relative flex flex-col py-8 lg:py-10 transition-transform duration-500 hover:-translate-y-1"
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
                  <div className="w-8 h-[2px] bg-brand mb-5 transition-all duration-500 group-hover:w-14"></div>
                  
                  <h3 
                    className="text-main mb-3"
                    style={{ fontWeight: 500, fontSize: '24px', lineHeight: 1.15 }}
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    className="text-muted"
                    style={{ fontWeight: 400, fontSize: '16px', lineHeight: 1.55, maxWidth: '520px' }}
                  >
                    {item.text}
                  </p>
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
