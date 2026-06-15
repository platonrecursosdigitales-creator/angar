import React from 'react';
import { motion } from 'framer-motion';

export const LuxuryMarqueeSection: React.FC = () => {
  const words = ["LUJO", "DESCANSO", "CONSTRUCCIÓN", "EXPERTOS", "EXCLUSIVIDAD", "DISEÑO", "CALIDAD"];
  // Duplicamos el array para lograr un efecto de scroll infinito sin saltos
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <section className="relative h-[600px] lg:h-[80vh] min-h-[500px] w-full overflow-hidden bg-main flex items-center justify-center">
      {/* Fondo de imagen hiperrealista generada */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/luxury_bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 150 }}
          className="flex whitespace-nowrap items-center"
        >
          {repeatedWords.map((word, index) => (
            <React.Fragment key={index}>
              <span className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-widest text-[#FAF7F2] uppercase mx-8 lg:mx-16 drop-shadow-lg">
                {word}
              </span>
              <span className="text-3xl md:text-5xl text-brand mx-4">
                ·
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
