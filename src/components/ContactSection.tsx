import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#252525]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-brand">
                Contacto
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-[1.15] text-[#FAF7F2] mb-8">
              Cuéntanos qué quieres hacer con tu propiedad
            </h2>
            
            <p className="text-xl text-[#FAF7F2]/90 font-medium mb-12 leading-[1.65]">
              Construir, remodelar, vender o comprar empieza con una conversación clara.
            </p>

            <div className="space-y-6 mb-12">
              <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#FAF7F2]/95 font-medium hover:text-brand transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <MessageCircle size={20} className="text-brand" />
                </div>
                <span className="text-lg">WhatsApp: +52 1 123 456 7890</span>
              </a>
              <a href="tel:+5211234567890" className="flex items-center gap-4 text-[#FAF7F2]/95 font-medium hover:text-brand transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Phone size={20} className="text-brand" />
                </div>
                <span className="text-lg">Llamar: +52 1 123 456 7890</span>
              </a>
              <a href="mailto:contacto@angar.com" className="flex items-center gap-4 text-[#FAF7F2]/95 font-medium hover:text-brand transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Mail size={20} className="text-brand" />
                </div>
                <span className="text-lg">contacto@angar.com</span>
              </a>
            </div>
          </div>

          <div className="bg-[#FAF7F2] p-8 lg:p-12 rounded-[32px]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-main mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-[#D8CDC1] bg-transparent focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-main mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-[#D8CDC1] bg-transparent focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-bold text-main mb-2">Interés</label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-3 rounded-xl border border-[#D8CDC1] bg-transparent focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-main"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="construccion">Construcción</option>
                    <option value="terreno">Terreno</option>
                    <option value="casa_nueva">Casa nueva</option>
                    <option value="casa_usada">Casa usada</option>
                    <option value="vender">Vender propiedad</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-main mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#D8CDC1] bg-transparent focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none"
                  placeholder="Detalles de tu proyecto o consulta..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand text-[#FAF7F2] hover:bg-brand-dark rounded-full px-8 py-4 font-bold tracking-wide transition-all duration-300"
              >
                Solicitar asesoría
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
