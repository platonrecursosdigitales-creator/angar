import React from 'react';
import { motion } from 'framer-motion';

export const RealEstateSection: React.FC = () => {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const projects = [
    {
      id: 1,
      title: "Altaria",
      category: "Desarrollo Residencial",
      image: "/assets/images/proj_1.png",
      gridClass: "col-span-12 md:col-span-4 md:row-span-2 min-h-[400px] md:min-h-full"
    },
    {
      id: 2,
      title: "Vía Terra",
      category: "Residencial Premium",
      image: "/assets/images/proj_2.png",
      gridClass: "col-span-12 md:col-span-8 min-h-[350px] md:min-h-[420px]"
    },
    {
      id: 3,
      title: "Monte Clara",
      category: "Privada Residencial",
      image: "/assets/images/proj_3.png",
      gridClass: "col-span-12 md:col-span-4 min-h-[350px] md:min-h-[420px]"
    },
    {
      id: 4,
      title: "Arboleda 27",
      category: "Residencia",
      image: "/assets/images/proj_4.png",
      gridClass: "col-span-12 md:col-span-4 min-h-[350px] md:min-h-[420px]"
    },
    {
      id: 5,
      title: "Áurea Residencial",
      category: "Conjunto Privado",
      image: "/assets/images/proj_5.png",
      gridClass: "col-span-12 md:col-span-7 min-h-[350px] md:min-h-[460px]"
    },
    {
      id: 6,
      title: "Casa Oliva",
      category: "Proyecto Arquitectónico",
      image: "/assets/images/proj_6.png",
      gridClass: "col-span-12 md:col-span-5 min-h-[350px] md:min-h-[460px]"
    }
  ];

  return (
    <section id="inmobiliaria" className="py-[120px] lg:py-[150px] bg-main overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-[64px]">
        
        {/* Encabezado Editorial */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <span 
              className="block uppercase text-brand mb-4"
              style={{ fontWeight: 500, fontSize: '13px', letterSpacing: '0.12em' }}
            >
              PORTAFOLIO ANGAR
            </span>
            <h2 
              className="text-main mb-6"
              style={{ fontWeight: 400, fontSize: 'clamp(34px, 4vw, 56px)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
            >
              Desarrollos
            </h2>
            <div className="w-12 h-[2px] bg-border mx-auto mb-6"></div>
            <p 
              className="text-muted max-w-[600px] mx-auto"
              style={{ fontWeight: 400, fontSize: '19px', lineHeight: 1.5 }}
            >
              Proyectos residenciales e inmobiliarios con visión integral.
            </p>
          </motion.div>
        </div>

        {/* Galería Geométrica CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.a
              href="#contacto"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: customEase, delay: index * 0.1 }}
              className={`group relative rounded-[16px] overflow-hidden flex flex-col justify-end ${project.gridClass}`}
              style={{ backgroundColor: '#EFE5D8' }} // Fondo sutil mientras carga la imagen
            >
              {/* Imagen Protagonista */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Overlay Sutil (Gradiente Inferior) */}
              <div 
                className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-90"
                style={{ 
                  background: 'linear-gradient(to top, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.3) 40%, transparent 100%)' 
                }}
              ></div>

              {/* Contenido (Textos) */}
              <div className="relative z-10 p-8 lg:p-10 w-full">
                <div className="flex flex-col transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <span 
                    className="text-[#EFE5D8] uppercase tracking-wider mb-2"
                    style={{ fontWeight: 500, fontSize: '14px' }}
                  >
                    {project.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 
                      className="text-[#FAF7F2]"
                      style={{ fontWeight: 500, fontSize: 'clamp(24px, 2.5vw, 30px)', lineHeight: 1.1 }}
                    >
                      {project.title}
                    </h3>
                    
                    {/* CTA discreto que aparece en hover */}
                    <span 
                      className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-brand uppercase"
                      style={{ fontWeight: 500, fontSize: '13px', letterSpacing: '0.05em' }}
                    >
                      Ver Proyecto
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Inferior */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: customEase, delay: 0.6 }}
          className="mt-16 lg:mt-24 flex justify-center"
        >
          <a 
            href="#contacto"
            className="inline-flex items-center justify-center border border-border text-main hover:bg-main hover:border-brand hover:text-brand transition-colors uppercase"
            style={{ fontWeight: 500, fontSize: '14px', letterSpacing: '0.03em', padding: '16px 36px', borderRadius: '12px' }}
          >
            Explorar todos los desarrollos
          </a>
        </motion.div>

      </div>
    </section>
  );
};
