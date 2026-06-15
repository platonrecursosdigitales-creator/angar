import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

export const RealEstateSection: React.FC = () => {
  const cards = [
    {
      title: "Terrenos en venta",
      description: "Opciones para inversión, construcción o patrimonio.",
      image: "/src/assets/images/5.jpeg"
    },
    {
      title: "Casas nuevas",
      description: "Propiedades listas para estrenar o en proceso de entrega.",
      image: "/src/assets/images/6.jpeg"
    },
    {
      title: "Casas usadas",
      description: "Opciones habitacionales con ubicación y características definidas.",
      image: "/src/assets/images/7.jpeg"
    },
    {
      title: "Compra y venta",
      description: "Acompañamiento para propietarios y compradores.",
      image: "/src/assets/images/8.jpeg"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="inmobiliaria" className="py-24 lg:py-32 bg-main border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <SectionLabel text="Inmobiliaria" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-8 max-w-3xl mx-auto"
        >
          Terrenos, casas nuevas y casas usadas
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted mb-20 max-w-3xl mx-auto leading-[1.65]"
        >
          Además de construir, ANGAR comercializa propiedades para compra, venta e inversión, integrando asesoría y acompañamiento durante el proceso.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-soft border border-border"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-3">
                  {card.title}
                </h3>
                <p className="text-muted text-base leading-[1.65]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
