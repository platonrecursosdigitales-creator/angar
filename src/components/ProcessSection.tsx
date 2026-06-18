import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 120px", "end end"]
  });

  // Agregamos un spring para que el progreso se sienta suave, "patine" y no se detenga de golpe
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
    restDelta: 0.0001
  });

  // Terminamos todas las animaciones en 0.85 para dejar un margen (0.85 a 1.0)
  // donde la pila de tarjetas se queda estática antes de que la sección termine su sticky
  
  // Tarjeta 01 (siempre estática en su posición final)
  const y1 = useTransform(smoothProgress, [0, 1], ["0vh", "0vh"]);
  const scale1 = useTransform(smoothProgress, [0, 0.28, 0.56, 0.85], [1, 0.96, 0.94, 0.92]);

  // Tarjeta 02 (sube de 0 a 0.28)
  const y2 = useTransform(smoothProgress, [0, 0.28], ["100vh", "4vh"]);
  const scale2 = useTransform(smoothProgress, [0, 0.28, 0.56, 0.85], [1, 1, 0.98, 0.96]);

  // Tarjeta 03 (sube de 0.28 a 0.56)
  const y3 = useTransform(smoothProgress, [0.28, 0.56], ["100vh", "8vh"]);
  const scale3 = useTransform(smoothProgress, [0.28, 0.56, 0.85], [1, 1, 0.98]);

  // Tarjeta 04 (sube de 0.56 a 0.85)
  const y4 = useTransform(smoothProgress, [0.56, 0.85], ["100vh", "12vh"]);
  const scale4 = useTransform(smoothProgress, [0, 1], [1, 1]);

  const cardsMotion = [
    { y: y1, scale: scale1, opacity: 1, zIndex: 10 },
    { y: y2, scale: scale2, opacity: 1, zIndex: 20 },
    { y: y3, scale: scale3, opacity: 1, zIndex: 30 },
    { y: y4, scale: scale4, opacity: 1, zIndex: 40 },
  ];

  const data = [
    {
      num: "01",
      title: "Planeación",
      desc: "Definimos el alcance, revisamos necesidades y trazamos una ruta clara antes de iniciar.",
      img: "/images/process_1.png",
    },
    {
      num: "02",
      title: "Proyecto y permisos",
      desc: "Preparamos la información del proyecto y acompañamos la gestión necesaria para avanzar formalmente.",
      img: "/images/process_2.png",
    },
    {
      num: "03",
      title: "Obra y ejecución",
      desc: "Coordinamos construcción, remodelación, instalaciones y trabajos de obra civil con seguimiento técnico.",
      img: "/images/process_3.png",
    },
    {
      num: "04",
      title: "Entrega",
      desc: "Cuidamos terminaciones, funcionalidad y detalles finales para entregar conforme a lo acordado.",
      img: "/images/process_4.png",
    }
  ];

  return (
    <section id="servicios" className="bg-[#FAF7F2] relative">
      {/* Contenedor externo con altura de scroll suficiente */}
      <div ref={containerRef} className="relative h-auto lg:h-[300vh]">
        
        {/* Sticky viewport interno */}
        <div className="lg:sticky lg:top-[90px] lg:h-[calc(100vh-90px)] flex flex-col items-center py-20 lg:py-0 w-full overflow-hidden">
          
          <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-[64px] flex flex-col h-full justify-start pt-[3vh]">
            
            {/* Header de la sección (Queda arriba del stage) */}
            <div className="mb-[4vh] flex flex-col items-start lg:items-center text-left lg:text-center w-full z-50">
              <span className="block uppercase text-[#D96A2B] mb-2 font-medium tracking-[0.12em] text-[12px] lg:text-[13px]">
                CÓMO TRABAJAMOS
              </span>
              <h2 className="text-[#252525] font-normal tracking-[-0.04em] leading-[1.02] mb-3 text-[clamp(34px,4vw,56px)]">
                Del proyecto a la entrega
              </h2>
              <p className="text-[#7B746C] font-normal text-[17px] lg:text-[19px] leading-[1.65] max-w-[600px]">
                Cada etapa se trabaja con orden, criterio técnico y comunicación clara.
              </p>
            </div>

            {/* STAGE DE CARTAS (DESKTOP) */}
            <div className="hidden lg:block relative w-full max-w-[1180px] mx-auto h-[65vh] min-h-[400px] max-h-[650px]">
              {data.map((item, index) => {
                const { y, scale, opacity, zIndex } = cardsMotion[index];
                return (
                  <motion.div
                    key={item.num}
                    style={{ y, scale, opacity, zIndex, transformOrigin: "top center" }}
                    className="absolute top-0 left-0 w-full h-[45vh] min-h-[300px] max-h-[520px] bg-[#EFE5D8] border border-[#D8CDC1] rounded-[24px] overflow-hidden flex shadow-[0_24px_70px_rgba(37,37,37,0.10)]"
                  >
                    {/* Columna Izquierda: Texto */}
                    <div className="w-1/2 p-[clamp(24px,4vh,72px)] flex flex-col justify-center">
                      <span className="text-[#D96A2B] font-medium tracking-[0.14em] text-[14px] xl:text-[16px] mb-2 xl:mb-4">
                        {item.num}
                      </span>
                      <h3 className="text-[#252525] font-medium leading-[1.05] text-[clamp(24px,3vw,44px)] mb-3 xl:mb-6">
                        {item.title}
                      </h3>
                      <div className="w-8 xl:w-12 h-[2px] bg-[#D96A2B] mb-3 xl:mb-6"></div>
                      <p className="text-[#7B746C] font-normal leading-[1.4] xl:leading-[1.65] text-[15px] xl:text-[19px] max-w-[460px]">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Columna Derecha: Imagen */}
                    <div className="w-1/2 h-full bg-[#EFE5D8]">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* STAGE MOBILE (Stack normal) */}
            <div className="flex flex-col lg:hidden w-full gap-8">
              {data.map((item) => (
                <div 
                  key={item.num}
                  className="w-full bg-[#EFE5D8] border border-[#D8CDC1] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(37,37,37,0.08)] flex flex-col"
                >
                  {/* Imagen arriba */}
                  <div className="w-full aspect-[4/3]">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Texto abajo */}
                  <div className="p-8 flex flex-col">
                    <span className="text-[#D96A2B] font-medium tracking-[0.14em] text-[15px] mb-3">
                      {item.num}
                    </span>
                    <h3 className="text-[#252525] font-medium leading-[1.05] text-[28px] mb-5">
                      {item.title}
                    </h3>
                    <div className="w-10 h-[2px] bg-[#D96A2B] mb-5"></div>
                    <p className="text-[#7B746C] font-normal leading-[1.65] text-[16px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
