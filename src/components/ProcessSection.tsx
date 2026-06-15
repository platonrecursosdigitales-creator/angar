import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Detectar breakpoint para desktop
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mapeo de scroll solo en desktop para la baraja
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isDesktop) {
      if (latest < 0.25) setActiveIndex(0);
      else if (latest < 0.50) setActiveIndex(1);
      else if (latest < 0.75) setActiveIndex(2);
      else setActiveIndex(3);
    }
  });

  const data = [
    {
      num: "01",
      title: "Proyecto residencial",
      desc: "Diseño y construcción de viviendas pensadas para habitarse bien: distribución, estructura, materiales y acabados alineados a un proyecto funcional y duradero.",
      img: "/src/assets/images/process_1.png",
      shortTitle: "Proyecto"
    },
    {
      num: "02",
      title: "Obra civil",
      desc: "Ejecución técnica y controlada de obras con atención al proceso, la seguridad, la planeación y el avance real del proyecto.",
      img: "/src/assets/images/process_2.png",
      shortTitle: "Obra civil"
    },
    {
      num: "03",
      title: "Remodelación y ampliación",
      desc: "Intervenciones para transformar espacios existentes, optimizar su uso y aumentar su valor sin perder coherencia constructiva.",
      img: "/src/assets/images/process_3.png",
      shortTitle: "Remodelación"
    },
    {
      num: "04",
      title: "Acabados y entrega",
      desc: "Cierre de obra con atención en terminaciones, limpieza visual, funcionalidad y calidad final de entrega.",
      img: "/src/assets/images/process_4.png",
      shortTitle: "Acabados"
    }
  ];

  // Estilos de baraja para Desktop
  const getCardStyle = (index: number, active: number) => {
    const diff = index - active;
    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, zIndex: 10, rotate: 0 };
    } else if (diff === 1) {
      return { y: 22, scale: 0.965, opacity: 0.85, zIndex: 9, rotate: -0.4 };
    } else if (diff === 2) {
      return { y: 44, scale: 0.93, opacity: 0.65, zIndex: 8, rotate: 0.4 };
    } else if (diff === 3) {
      return { y: 66, scale: 0.90, opacity: 0.45, zIndex: 7, rotate: 0 };
    } else if (diff < 0) {
      // Tarjeta que ya pasó
      return { y: -80, scale: 0.92, opacity: 0, zIndex: 0, rotate: 0 };
    }
    return { y: 0, scale: 1, opacity: 0, zIndex: 0, rotate: 0 };
  };

  const activeData = data[activeIndex];

  return (
    <section id="servicios" className="bg-main relative">
      
      {/* Contenedor principal: h-[260vh] en desktop para scroll progress, h-auto en mobile */}
      <div ref={containerRef} className="relative h-auto lg:h-[260vh]">
        
        {/* En desktop es sticky, en mobile es estático */}
        <div className="lg:sticky lg:top-[120px] lg:h-[calc(100vh-140px)] flex flex-col items-center py-20 lg:py-0 w-full overflow-hidden lg:overflow-visible">
          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-[64px] flex flex-col h-full justify-center">
            
            {/* Encabezado Superior */}
            <div className="mb-10 lg:mb-12 flex flex-col items-start lg:items-center text-left lg:text-center w-full z-20">
              <span 
                className="block uppercase text-brand mb-3 font-medium tracking-[0.12em]"
                style={{ fontSize: '13px' }}
              >
                CÓMO TRABAJAMOS
              </span>
              <h2 
                className="text-main font-normal tracking-[-0.04em] leading-[1.02] mb-4"
                style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}
              >
                Del proyecto a la entrega
              </h2>
              <p className="text-muted font-normal text-[17px] lg:text-[19px] leading-[1.5] max-w-[600px]">
                Un proceso claro para construir, transformar y entregar con visión.
              </p>
            </div>

            {/* STAGE DE CARTAS (DESKTOP) */}
            <div className="hidden lg:block relative w-full max-w-[1100px] mx-auto min-h-[560px] perspective-[1000px]">
              {data.map((item, index) => (
                <motion.div
                  key={item.num}
                  animate={getCardStyle(index, activeIndex)}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-0 left-0 w-full h-[560px] bg-[#FAF7F2] border border-[#D8CDC1] rounded-[24px] overflow-hidden flex shadow-[0_24px_60px_rgba(37,37,37,0.08)]"
                  style={{ transformOrigin: "top center" }}
                >
                  {/* Columna Izquierda: Texto */}
                  <div className="w-5/12 p-14 flex flex-col justify-center bg-[#FAF7F2]">
                    <span className="text-brand font-medium tracking-[0.14em] text-[16px] mb-4">
                      {item.num}
                    </span>
                    <h3 className="text-main font-medium leading-[1.05] text-[36px] xl:text-[42px] mb-5">
                      {item.title}
                    </h3>
                    <div className="w-8 h-[2px] bg-brand mb-6"></div>
                    <p className="text-muted font-normal leading-[1.65] text-[18px] max-w-[440px]">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Columna Derecha: Imagen */}
                  <div className="w-7/12 h-full p-6 pl-0 bg-[#FAF7F2]">
                    <div className="w-full h-full rounded-[18px] overflow-hidden bg-[#EFE5D8]">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Indicador de Progreso Manual Desktop */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                {data.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="p-2 focus:outline-none group cursor-pointer"
                  >
                    <div className={`w-[2px] transition-all duration-500 rounded-full ${i === activeIndex ? 'h-8 bg-brand' : 'h-4 bg-[#D8CDC1] group-hover:bg-[#E89A6A]'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* STAGE MOBILE (Layout simple y limpio) */}
            <div className="flex flex-col lg:hidden w-full">
              
              <div className="w-full bg-[#FAF7F2] border border-[#D8CDC1] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(37,37,37,0.08)]">
                
                {/* Imagen arriba */}
                <div className="w-full aspect-[4/3] p-4 pb-0">
                  <div className="w-full h-full rounded-[16px] overflow-hidden bg-[#EFE5D8]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeData.num}
                        initial={{ opacity: 0, scale: 0.985 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.985 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full"
                      >
                        <img 
                          src={activeData.img} 
                          alt={activeData.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Texto abajo */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeData.num}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col min-h-[160px]"
                    >
                      <span className="text-brand font-medium tracking-[0.14em] text-[15px] mb-3">
                        {activeData.num}
                      </span>
                      <h3 className="text-main font-medium leading-[1.05] text-[28px] mb-4">
                        {activeData.title}
                      </h3>
                      <p className="text-muted font-normal leading-[1.65] text-[16px]">
                        {activeData.desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* Selector de pasos Mobile */}
              <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                {data.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.num}
                      onClick={() => setActiveIndex(index)}
                      className="flex flex-col text-left focus:outline-none"
                    >
                      <div className="w-full h-[2px] mb-3 relative bg-[#D8CDC1] overflow-hidden">
                        <div 
                          className={`absolute top-0 left-0 h-full bg-brand transition-all duration-500 ease-out ${isActive ? 'w-full' : 'w-0'}`} 
                        />
                      </div>
                      <span className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-brand' : 'text-muted'}`}>
                        {item.num} {item.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
