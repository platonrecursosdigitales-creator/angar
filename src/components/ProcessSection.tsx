import React from 'react';
import { constructionProcess, realEstateProcess } from '../data/process';
import { SectionLabel } from './SectionLabel';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel text="Proceso" />
        
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.15] text-main mb-16 max-w-2xl">
          Proceso de atención
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.01em] text-main mb-10 pb-4 border-b border-border">
              Construcción
            </h3>
            <div className="space-y-12">
              {constructionProcess.map((item, index) => (
                <div key={index} className="relative pl-10 md:pl-16 border-l border-border">
                  <div className="absolute top-0 left-0 -translate-x-1/2 bg-soft py-2">
                    <span className="text-brand font-medium tracking-[0.18em] text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted leading-[1.65]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.01em] text-main mb-10 pb-4 border-b border-border">
              Inmobiliaria
            </h3>
            <div className="space-y-12">
              {realEstateProcess.map((item, index) => (
                <div key={index} className="relative pl-10 md:pl-16 border-l border-border">
                  <div className="absolute top-0 left-0 -translate-x-1/2 bg-soft py-2">
                    <span className="text-brand font-medium tracking-[0.18em] text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-xl font-medium tracking-[-0.01em] leading-[1.4] text-main mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted leading-[1.65]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
