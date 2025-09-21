import React from 'react';
import { CountdownTimer } from './CountdownTimer';
interface HeroProps {
  brideFirstName: string;
  groomFirstName: string;
  weddingDate: Date;
}
export const Hero: React.FC<HeroProps> = ({
  brideFirstName,
  groomFirstName,
  weddingDate
}) => {
  // Use Spanish date format
  const formattedDate = weddingDate.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return <section id="home" className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative" style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
  }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 py-16 md:py-0">
        <h3 className="text-white text-xl md:text-2xl font-light mb-2">
          Celebrando el amor que nos une y nos inspira
        </h3>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 md:mb-6">
          {groomFirstName} & {brideFirstName}
        </h1>
        <div className="w-24 h-1 bg-rose-500 mx-auto mb-4 md:mb-6"></div>
        <p className="text-white text-xl md:text-2xl mb-3">{formattedDate}</p>
        <p className="text-white text-lg italic mb-8 md:mb-10">
          "El amor no es mirarse el uno al otro, sino mirar los dos en la misma dirección"
        </p>
        <div className="mb-8 md:mb-12">
          <CountdownTimer targetDate={weddingDate} />
        </div>
        <button onClick={() => {
        const element = document.getElementById('rsvp');
        if (element) element.scrollIntoView({
          behavior: 'smooth'
        });
      }} className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg">
          Confirmar Asistencia
        </button>
      </div>
    </section>;
};