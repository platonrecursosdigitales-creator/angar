import React from 'react';
import { motion } from 'framer-motion';

export const CreditsSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const credits = [
    "Crédito Infonavit",
    "Crédito Fovissste",
    "Créditos Bancarios",
    "Esquema para Pensionados",
    "Recursos Propios"
  ];

  return (
    <section className="py-[120px] lg:py-[180px] bg-main border-y border-border overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-[64px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Columna Izquierda: Títulos y Descripción */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-brand"></div>
                <span 
                  className="block uppercase text-brand"
                  style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.15em' }}
                >
                  Opciones de Financiamiento
                </span>
              </div>
              
              <h2 
                className="text-main mb-8 text-balance"
                style={{ fontWeight: 700, fontSize: 'clamp(40px, 4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Orientación para comprar con respaldo
              </h2>

              <p 
                className="text-main/80 max-w-[480px]"
                style={{ fontWeight: 500, fontSize: '19px', lineHeight: 1.6 }}
              >
                Acompañamos procesos relacionados con INFONAVIT, FOVISSSTE y alternativas de adquisición, revisando la viabilidad y la documentación necesaria para asegurar tu patrimonio sin contratiempos.
              </p>
            </motion.div>

            {/* Certificación (Visible en Desktop al fondo de la columna) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:flex items-start gap-4 mt-24 p-6 rounded-[16px] bg-soft/60 border border-border/50"
            >
              <div className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0"></div>
              <p className="text-main/80 text-[14px] leading-relaxed font-medium">
                Servicio con conocimiento técnico certificado en procesos y lineamientos de INFONAVIT.
              </p>
            </motion.div>
          </div>

          {/* Columna Derecha: Lista Editorial de Créditos */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="w-full flex flex-col">
              {/* Línea superior */}
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: customEase }}
                className="h-[1px] bg-border w-full"
              />
              
              {credits.map((credit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: customEase, delay: 0.1 + (index * 0.1) }}
                  className="group relative"
                >
                  <div className="flex items-center justify-between py-8 lg:py-10 px-2 transition-colors duration-500 hover:bg-soft/30 cursor-default">
                    <div className="flex items-center gap-6 lg:gap-12">
                      <span className="text-brand font-bold text-sm tracking-widest opacity-60">0{index + 1}</span>
                      <span 
                        className="text-[24px] lg:text-[32px] font-medium text-main group-hover:text-brand transition-colors duration-300"
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        {credit}
                      </span>
                    </div>
                    {/* Acento visual en hover */}
                    <div className="w-8 h-[1px] bg-border group-hover:bg-brand group-hover:w-16 transition-all duration-500 ease-out"></div>
                  </div>
                  
                  {/* Línea separadora inferior */}
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: customEase, delay: 0.2 + (index * 0.1) }}
                    className="h-[1px] bg-border w-full"
                  />
                </motion.div>
              ))}
            </div>

            {/* Certificación (Visible en Mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:hidden flex items-start gap-4 mt-12 p-6 rounded-[16px] bg-soft border border-border"
            >
              <div className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0"></div>
              <p className="text-main/80 text-[14px] leading-relaxed font-medium">
                Servicio con conocimiento técnico certificado en procesos y lineamientos de INFONAVIT.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
