import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

export const StickyServices: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-main relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-12 lg:space-y-0 relative">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={service.id}
              className="lg:sticky flex flex-col lg:flex-row bg-alt border border-border rounded-[32px] overflow-hidden shadow-sm"
              style={{ 
                top: `calc(120px + ${index * 40}px)`, 
                marginBottom: index === services.length - 1 ? '0' : '60px',
                zIndex: index
              }}
            >
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative">
                <span className="text-brand font-medium tracking-[0.18em] text-sm mb-6">
                  0{service.id}
                </span>
                <h3 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-muted leading-[1.65]">
                  {service.description}
                </p>
              </div>
              <div className="lg:w-1/2 h-72 lg:h-[500px]">
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
