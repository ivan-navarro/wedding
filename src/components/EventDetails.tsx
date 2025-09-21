import React from 'react';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
interface Event {
  name: string;
  time: string;
  description: string;
}
interface Venue {
  name: string;
  address: string;
  mapUrl: string;
}
interface EventDetailsProps {
  venue: Venue;
  events: Event[];
  weddingDate: Date;
}
export const EventDetails: React.FC<EventDetailsProps> = ({
  venue,
  events,
  weddingDate
}) => {
  // Use Spanish date format
  const formattedDate = weddingDate.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
            Detalles del Evento
          </h2>
          <div className="w-16 h-1 bg-rose-500 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Nos sentimos muy felices de compartir este día tan especial con
            ustedes. Aquí encontrarán toda la información necesaria para
            acompañarnos en nuestra celebración.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-50 rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="md:flex">
              <div
                className="md:w-1/2 bg-cover bg-center h-64 md:h-auto"
                style={{
                  backgroundImage: 'url("src/img/villa.jpg")'
                }}
              ></div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-serif text-gray-800 mb-4">
                  Lugar
                </h3>
                <div className="flex items-start mb-4">
                  <MapPinIcon className="text-rose-500 mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{venue.name}</p>
                    <p className="text-gray-600 mt-1">{venue.address}</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <CalendarIcon className="text-rose-500 mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Fecha</p>
                    <p className="text-gray-600 mt-1">{formattedDate}</p>
                  </div>
                </div>
                <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-6 rounded-full transition-colors text-sm">
                  Ver en el Mapa
                </a>
              </div>
            </div>
          </div>
          <div className="bg-neutral-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-gray-800 mb-6 text-center">
                Horario
              </h3>
              <div className="space-y-8">
                {events.map((event, index) => <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <ClockIcon className="text-rose-600 h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-800">
                        {event.name}
                      </h4>
                      <p className="text-rose-600 font-medium mb-1">
                        {event.time}
                      </p>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};