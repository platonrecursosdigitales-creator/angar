import React from 'react';
import { SectionLabel } from './SectionLabel';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden border border-border order-2 lg:order-1">
            <img 
              src="/images/6.jpeg" 
              alt="Sobre ANGAR" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel text="Nosotros" />
            
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-8">
              Construcción, obra civil e inmobiliaria
            </h2>
            
            <p className="text-xl text-muted mb-16 leading-[1.65]">
              ANGAR es una empresa enfocada en construcción, obra civil y comercialización inmobiliaria. Su trabajo combina atención directa, visión técnica y conocimiento del mercado local para acompañar proyectos de construcción, compra, venta e inversión en propiedades.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="mt-1 w-12 h-[1px] bg-brand shrink-0"></div>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-3">Enfoque técnico</h3>
                  <p className="text-muted leading-[1.65]">Cada proyecto requiere orden, planeación y seguimiento.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="mt-1 w-12 h-[1px] bg-brand shrink-0"></div>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-3">Atención directa</h3>
                  <p className="text-muted leading-[1.65]">Comunicación clara durante el proceso de construcción o compra.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="mt-1 w-12 h-[1px] bg-brand shrink-0"></div>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-3">Visión inmobiliaria</h3>
                  <p className="text-muted leading-[1.65]">Propiedades, terrenos y casas con orientación comercial y patrimonial.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
