import React from 'react';

export const NewsHeader: React.FC = () => {
  const news = [
    {
      date: '22 de Enero',
      badge: '¡Novedad!',
      title: '¡Nueva sección! 🎁',
      image: 'src/img/regalo-viaje.jpg',
      imageAlt: '',
      content: (
        <>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Tras vuestras consultas y muestras de cariño, hemos creado una nueva sección 
            donde podéis ayudarnos a cumplir el sueño de nuestra luna de miel perfecta. 
            ¡Vuestra presencia ya es el mayor regalo!
          </p>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            {' '}
            <a href="#gifts" className="text-rose-600 font-semibold underline hover:text-rose-700">
              Regalos
            </a>{' '}
          </p>
        </>
      ),
      footer: '💕 ¡Gracias de corazón por hacer de este día algo inolvidable!'
    },
    {
      date: '7 de Enero',
      badge: 'Bienvenida',
      title: '¡Estrenamos nuestra página web! 💕',
      image: 'img/ultima-boda.jpeg',
      imageAlt: 'Yuliana e Ivan como anfitriones',
      content: (
        <>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nos hace muchísima ilusión compartir con todos vosotros este espacio especial donde 
            iremos publicando todas las novedades sobre nuestra boda. Aquí encontraréis información 
            sobre el evento, alojamientos recomendados, y podrás confirmar tu asistencia.
          </p>
          
          <div className="bg-rose-100 border-l-4 border-rose-500 p-3 mb-4 rounded">
            <p className="text-gray-800 text-sm font-semibold">
              📋 Recordatorio: Por favor,{' '}
              <a href="#rsvp" className="text-rose-600 underline hover:text-rose-700">
                rellena el cuestionario
              </a>{' '}
              para confirmar tu asistencia lo antes posible.
            </p>
          </div>
        </>
      ),
      footer: '¡Estad atentos porque iremos añadiendo más sorpresas! 🎉'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-12 border-b border-rose-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {news.map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:flex items-center gap-8">
              {/* Image */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-80 object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-rose-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {item.date}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3">
                  {item.title}
                </h2>
                
                {item.content}
                
                <p className="text-gray-600 text-sm italic">
                  {item.footer}
                </p>
              </div>
            </div>
            {index < news.length - 1 && (
              <div className="flex items-center justify-center my-8">
                <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              </div>
            )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
