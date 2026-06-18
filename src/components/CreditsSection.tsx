import React from 'react';
import { motion } from 'framer-motion';

export const CreditsSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const credits = [
    {
      name: "Crédito Infonavit",
      logos: ["https://upload.wikimedia.org/wikipedia/commons/c/c4/Logo_INFONAVIT.svg"]
    },
    {
      name: "Crédito Fovissste",
      logos: ["https://logo.clearbit.com/fovissste.gob.mx"]
    },
    {
      name: "Créditos Bancarios",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/0/05/BBVA_2019.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Banorte_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Banco_Santander_Logotipo.svg"
      ]
    },
    {
      name: "Esquema para Pensionados",
      logos: []
    },
    {
      name: "Recursos Propios",
      logos: []
    }
  ];

  return (
    <section className="py-[100px] lg:py-[140px] bg-main border-y border-border overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-[64px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
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
              className="hidden lg:flex items-start gap-4 mt-16 p-6 rounded-[16px] bg-soft/60 border border-border/50"
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
                  <div className="py-6 lg:py-8 px-2 transition-colors duration-500 hover:bg-soft/30 cursor-default group">
                    <div className="grid grid-cols-[35px_1fr] lg:grid-cols-[50px_1fr_auto] gap-4 lg:gap-6 items-start lg:items-center">
                      
                      {/* Número */}
                      <div className="pt-2 lg:pt-0">
                        <span className="text-brand font-bold text-sm tracking-widest opacity-60">0{index + 1}</span>
                      </div>

                      {/* Contenido: Título y Logos */}
                      <div className="flex flex-col justify-center">
                        <span 
                          className="text-[22px] lg:text-[28px] font-medium text-main group-hover:text-brand transition-colors duration-300"
                          style={{ letterSpacing: '-0.01em' }}
                        >
                          {credit.name}
                        </span>

                        {/* Logos Alineados Exactamente debajo del Título */}
                        {credit.logos.length > 0 && (
                          <div className="flex flex-wrap items-center gap-6 lg:gap-10 mt-5 lg:mt-6">
                            {credit.logos.map((logo, i) => (
                              <img 
                                key={i} 
                                src={logo} 
                                alt="Logo Oficial" 
                                className="h-auto w-auto max-h-[28px] lg:max-h-[34px] max-w-[110px] lg:max-w-[140px] object-contain mix-blend-multiply opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" 
                                onError={(e) => e.currentTarget.style.display = 'none'}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Acento visual (Alineado a la derecha en Desktop) */}
                      <div className="hidden lg:flex justify-end items-center pl-8">
                        <div className="w-8 h-[1px] bg-border group-hover:bg-brand group-hover:w-16 transition-all duration-500 ease-out"></div>
                      </div>

                    </div>
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
              className="lg:hidden flex items-start gap-4 mt-10 p-6 rounded-[16px] bg-soft border border-border"
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
