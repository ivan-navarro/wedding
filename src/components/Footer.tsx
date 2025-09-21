import React from 'react';
import { HeartIcon } from 'lucide-react';
interface FooterProps {
  brideFirstName: string;
  groomFirstName: string;
}
export const Footer: React.FC<FooterProps> = ({
  brideFirstName,
  groomFirstName
}) => {
  const currentYear = new Date().getFullYear();
  // Translate navigation items
  const navItems = [{
    id: 'home',
    label: 'Inicio'
  }, {
    id: 'details',
    label: 'Detalles'
  }, {
    id: 'about',
    label: 'Nosotros'
  }, {
    id: 'rsvp',
    label: 'Confirmar'
  }];
  return <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-serif mb-2">
            {groomFirstName} & {brideFirstName}
          </h3>
          <div className="flex items-center justify-center">
            <div className="w-12 h-0.5 bg-rose-400"></div>
            <HeartIcon className="w-5 h-5 text-rose-400 mx-2" />
            <div className="w-12 h-0.5 bg-rose-400"></div>
          </div>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            "Amar no es mirarse el uno al otro, sino mirar juntos en la misma dirección"
            </p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {navItems.map(item => <button key={item.id} onClick={() => {
          const element = document.getElementById(item.id);
          if (element) element.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="text-rose-300 hover:text-white transition-colors text-sm font-medium">
              {item.label}
            </button>)}
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} {groomFirstName} & {brideFirstName} | Todos los
          derechos reservados
        </p>
      </div>
    </footer>;
};