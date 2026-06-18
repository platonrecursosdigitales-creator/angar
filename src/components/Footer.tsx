import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-alt pt-20 pb-10 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <img 
            src="/logo/angarlogo.png" 
            alt="ANGAR Logo" 
            className="h-10 w-auto object-contain mb-6"
          />
          <p className="text-muted text-lg font-medium max-w-sm leading-[1.65]">
            Construcción, obra civil e inmobiliaria. Desarrollamos, construimos y comercializamos propiedades.
          </p>
        </div>
        
        <div>
          <h4 className="text-main font-bold tracking-wide mb-6 uppercase text-sm">Navegación</h4>
          <ul className="flex flex-col gap-3">
            {['Inicio', 'Construcción', 'Inmobiliaria', 'Terrenos', 'Casas', 'Nosotros', 'Contacto'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-muted hover:text-brand transition-colors font-semibold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-main font-bold tracking-wide mb-6 uppercase text-sm">Contacto</h4>
          <ul className="flex flex-col gap-3 text-muted font-semibold">
            <li>México</li>
            <li>
              <a href="https://wa.me/5211234567890" className="hover:text-brand transition-colors">WhatsApp: +52 1 123 456 7890</a>
            </li>
            <li>
              <a href="tel:+5211234567890" className="hover:text-brand transition-colors">Tel: +52 1 123 456 7890</a>
            </li>
            <li>
              <a href="mailto:contacto@angar.com" className="hover:text-brand transition-colors">contacto@angar.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted font-medium">
          © {new Date().getFullYear()} ANGAR. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
