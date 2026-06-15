import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

export const StickyServices: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-main relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12 lg:space-y-0 relative pb-[10vh]">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              key={service.id}
              className={`lg:sticky flex flex-col lg:flex-row bg-alt border border-border rounded-3xl overflow-hidden shadow-2xl min-h-[75vh] ${
                index === services.length - 1 ? 'mb-0' : 'mb-16 lg:mb-[70vh]'
              }`}
              style={{ 
                top: `calc(100px + ${index * 30}px)`, 
                zIndex: index
              }}
            >
              <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative bg-white/40">
                <span className="text-[#C95F2C] font-semibold tracking-[0.18em] text-lg lg:text-xl mb-6 block">
                  0{service.id}
                </span>
                <h3 className="text-4xl lg:text-5xl font-bold tracking-[-0.03em] uppercase leading-[1.05] text-main mb-8">
                  {service.title}
                </h3>
                <p className="text-xl text-muted leading-relaxed font-medium">
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
