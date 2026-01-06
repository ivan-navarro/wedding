import React from 'react';
import { HeartIcon } from 'lucide-react';

export const FinalMessage: React.FC = () => {
  return (
    <section className="pt-4 pb-12 bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <HeartIcon className="w-12 h-12 text-rose-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
            ¡Los Esperamos con Mucha Ilusión!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            No podemos imaginar este día tan especial sin vosotros. Vuestra presencia es el mejor regalo 
            que podríamos recibir. Queremos compartir con todos vosotros nuestra alegría, nuestros sueños 
            y el comienzo de esta nueva etapa de nuestras vidas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Gracias por formar parte de nuestra historia y por acompañarnos en este momento tan importante. 
            ¡Preparaos para una noche inolvidable llena de amor, risas y celebración!
          </p>
          <div className="mt-8 flex items-center justify-center">
            <div className="w-16 h-0.5 bg-rose-400"></div>
            <HeartIcon className="w-6 h-6 text-rose-500 mx-4" />
            <div className="w-16 h-0.5 bg-rose-400"></div>
          </div>
          <p className="text-2xl font-serif text-gray-800 mt-6">
            Con todo nuestro amor,
          </p>
          <p className="text-xl text-rose-600 font-semibold mt-2">
            Ivan & Yuliana
          </p>
        </div>
      </div>
    </section>
  );
};
