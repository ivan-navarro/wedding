import React from 'react';

export const NewsHeader: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-12 border-b border-rose-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex items-center gap-8">
            {/* Image */}
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="img/ultima-boda.jpeg" 
                  alt="Yuliana e Ivan como anfitriones" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-rose-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
                  ¡Novedad!
                </span>
                <span className="text-gray-500 text-sm">
                  Enero 2026
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3">
                ¡Estrenamos nuestra página web! 💕
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nos hace muchísima ilusión compartir con todos vosotros este espacio especial donde 
                iremos publicando todas las novedades sobre nuestra boda. Aquí encontraréis información 
                sobre el evento, alojamientos recomendados, y podrás confirmar tu asistencia.
              </p>
              
              <div className="bg-rose-100 border-l-4 border-rose-500 p-3 mb-4 rounded">
                <p className="text-gray-800 text-sm font-semibold">
                  📋 Recordatorio: Por favor, <a href="#rsvp" className="text-rose-600 underline hover:text-rose-700">rellena el cuestionario</a> para confirmar tu asistencia lo antes posible.
                </p>
              </div>
              
              <p className="text-gray-600 text-sm italic">
                ¡Estad atentos porque iremos añadiendo más sorpresas! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
