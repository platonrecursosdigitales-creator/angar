import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section 
      id="inicio" 
      className="relative h-[90vh] lg:h-[94vh] min-h-[680px] max-h-[1200px] w-full flex items-center pt-[120px] lg:pt-[160px] pb-12 overflow-hidden"
    >
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/12.jpeg')",
          backgroundPosition: "center top"
        }}
      >
        {/* Main Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(37, 37, 37, 0.42)' }}></div>
        {/* Subtle left-to-right gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#252525]/50 via-[#252525]/20 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-[80px]">
        
        <div className="max-w-[850px]">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
          >
            <span 
              className="block font-bold uppercase text-[#EFE5D8] mb-4 lg:mb-6"
              style={{ fontSize: '13px', letterSpacing: '0.12em' }}
            >
              CONSTRUCCIÓN E INMOBILIARIA
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 relative z-10"
          >
            <h1 className="flex flex-col gap-2">
              <span className="text-[52px] md:text-[72px] lg:text-[96px] font-bold text-white leading-[1.05] tracking-tight">
                Constructora e<br />inmobiliaria
              </span>
              <span className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-white/90 leading-[1.1] tracking-tight mt-2 lg:mt-4">
                bajo una misma visión
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: customEase, delay: 0.35 }}
            className="text-[17px] md:text-[22px] lg:text-[26px] font-semibold text-[#FAF7F2] mb-10 lg:mb-12 max-w-[800px]"
            style={{ lineHeight: 1.3, letterSpacing: '-0.015em' }}
          >
            Diseñamos, construimos y acompañamos decisiones importantes alrededor de tu propiedad.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6"
          >
            <a 
              href="#contacto"
              className="w-full sm:w-auto flex items-center justify-center bg-[#FAF7F2] text-[#252525] font-bold text-[14px] tracking-[0.03em] uppercase transition-transform hover:-translate-y-0.5"
              style={{ padding: '16px 28px', borderRadius: '12px' }}
            >
              Solicitar asesoría
            </a>
            <a 
              href="#construccion"
              className="w-full sm:w-auto flex items-center justify-center bg-[#D96A2B] text-[#FAF7F2] font-bold text-[14px] tracking-[0.03em] uppercase transition-all hover:-translate-y-0.5 hover:bg-[#C95F2C]"
              style={{ padding: '16px 28px', borderRadius: '12px' }}
            >
              Conocer proyectos
            </a>
          </motion.div>

        </div>
      </div>

      {/* Floating Card - Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: customEase, delay: 0.6 }}
        className="hidden lg:flex absolute bottom-12 right-12 flex-col gap-2 p-6 backdrop-blur-md shadow-lg"
        style={{ 
          backgroundColor: 'rgba(250, 247, 242, 0.88)', 
          border: '1px solid #D8CDC1', 
          borderRadius: '16px' 
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D96A2B]"></div>
          <span className="text-[#252525] font-medium text-[15px]">+10 años de experiencia</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D96A2B]"></div>
          <span className="text-[#252525] font-medium text-[15px]">Proyectos residenciales</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D96A2B]"></div>
          <span className="text-[#252525] font-medium text-[15px]">México</span>
        </div>
      </motion.div>

    </section>
  );
};
