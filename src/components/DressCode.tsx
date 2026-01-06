import React from 'react';

export const DressCode: React.FC = () => {
  return (
    <section id="dresscode" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
            Código de Vestimenta
          </h2>
          <div className="w-16 h-1 bg-rose-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Formal Elegante
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="img/dress-code.jpg" 
              alt="Código de vestimenta formal elegante" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
