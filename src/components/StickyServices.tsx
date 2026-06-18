import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { services } from '../data/services';

export const StickyServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100px", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
    restDelta: 0.0001
  });

  // Mapeamos el escalado de las tarjetas para que se encojan conforme hacemos scroll
  const scale1 = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [1, 0.96, 0.94, 0.92]);
  const scale2 = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [1, 1, 0.98, 0.96]);
  const scale3 = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [1, 1, 1, 0.98]);
  const scale4 = useTransform(smoothProgress, [0, 1], [1, 1]);

  const scales = [scale1, scale2, scale3, scale4];

  return (
    <section className="py-24 lg:py-32 bg-main relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-16 lg:mb-24 flex flex-col items-start lg:items-center text-left lg:text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] uppercase leading-[1.1] text-main mb-6 flex flex-col gap-2 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="block"
            >
              Gestión inmobiliaria para vender o
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="block text-brand font-bold"
            >
              comprar con claridad
            </motion.span>
          </h2>
          <p className="text-muted text-[18px] lg:text-[20px] font-medium leading-[1.65] max-w-3xl">
            Acompañamos la venta, compra y promoción de casas y terrenos con análisis de valor, gestión documental y seguimiento hasta la firma.
          </p>
        </div>

        {/* CONTENEDOR ORIGINAL CON EL DISEÑO Y FLOW CSS EXACTO */}
        <div ref={containerRef} className="space-y-12 lg:space-y-0 relative pb-[10vh]">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={`lg:sticky flex flex-col lg:flex-row bg-alt border border-border rounded-3xl overflow-hidden shadow-2xl min-h-[75vh] ${
                index === services.length - 1 ? 'mb-0' : 'mb-16 lg:mb-[35vh]'
              }`}
              style={{ 
                top: `calc(100px + ${index * 15}px)`, 
                zIndex: index,
                scale: scales[index] || 1,
                transformOrigin: "top center"
              }}
            >
              <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative bg-white/40">
                <span className="text-brand font-bold tracking-[0.18em] text-lg lg:text-xl mb-6 block">
                  0{service.id}
                </span>
                <h3 className="text-4xl lg:text-5xl font-bold tracking-[-0.03em] uppercase leading-[1.05] text-main mb-8">
                  {service.title}
                </h3>
                <p className="text-xl text-muted font-medium leading-[1.65]">
                  {service.description}
                </p>
              </div>
              <div className="lg:w-1/2 min-h-[400px] lg:min-h-[75vh]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
