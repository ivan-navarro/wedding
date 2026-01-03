import React from 'react';

interface AboutUsProps {
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
}

export const AboutUs: React.FC<AboutUsProps> = ({
  brideFirstName,
  brideLastName,
  groomFirstName,
  groomLastName
}) => {
  return <section id="about" className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-2">
            Alojamientos Recomendados
          </h2>
          <div className="w-16 h-1 bg-rose-500 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm">
            Hemos seleccionado los mejores alojamientos cerca del lugar de la celebración.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* New Hotel Colon */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-4">
                <h3 className="text-lg font-serif text-gray-800 mb-2">New Hotel Colon ***</h3>
                <div className="mb-2">
                  <span className="inline-block bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">Hotel</span>
                </div>
                <p className="text-gray-600 mb-3 text-xs">
                  9 min en coche. Ideal para parejas.
                </p>
                <div className="mb-3">
                  <p className="text-xl font-bold text-gray-800">€103<span className="text-xs font-normal text-gray-600">/noche</span></p>
                  <p className="text-xs text-gray-500">2 personas</p>
                </div>
                <a href="https://www.booking.com/Share-bmHnm3" target="_blank" rel="noopener noreferrer" className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors text-center block">
                  Ver disponibilidad
                </a>
              </div>
            </div>

            {/* B&B HOTEL Barcelona Mataro */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-4">
                <h3 className="text-lg font-serif text-gray-800 mb-2">B&B HOTEL Barcelona Mataro **</h3>
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">B&B Hotel</span>
                </div>
                <p className="text-gray-600 mb-3 text-xs">
                  11 min en coche. Excelente precio.
                </p>
                <div className="mb-3">
                  <p className="text-xl font-bold text-gray-800">€83<span className="text-xs font-normal text-gray-600">/noche</span></p>
                  <p className="text-xs text-gray-500">2 personas</p>
                </div>
                <a href="https://www.booking.com/Share-uQq5GX" target="_blank" rel="noopener noreferrer" className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors text-center block">
                  Ver disponibilidad
                </a>
              </div>
            </div>

            {/* Vila d'Alba */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-4">
                <h3 className="text-lg font-serif text-gray-800 mb-2">Vila d'Alba</h3>
                <div className="mb-2">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">Casa Completa</span>
                </div>
                <p className="text-gray-600 mb-3 text-xs">
                  4 hab. 3 min coche / 15 min andando.
                </p>
                <div className="mb-3">
                  <p className="text-xl font-bold text-gray-800">€400<span className="text-xs font-normal text-gray-600">/noche</span></p>
                  <p className="text-xs text-gray-500">8-9 personas</p>
                </div>
                <a href="https://www.booking.com/Share-ITvp7DA" target="_blank" rel="noopener noreferrer" className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors text-center block">
                  Ver disponibilidad
                </a>
              </div>
            </div>

            {/* Santa Romana Apartments & Suites */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-4">
                <h3 className="text-lg font-serif text-gray-800 mb-2">Santa Romana Apartments</h3>
                <div className="mb-2">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">Apartamento</span>
                  <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">✓ Pre-reservado</span>
                </div>
                <p className="text-gray-600 mb-3 text-xs">
                  2 dorm. 9 min. Cancel. gratuita.
                </p>
                <div className="mb-3">
                  <p className="text-xl font-bold text-gray-800">€245<span className="text-xs font-normal text-gray-600">/noche</span></p>
                  <p className="text-xs text-gray-500">4-5 personas · Mín. 2 noches</p>
                </div>
                <a href="https://www.booking.com/Share-INmAH6" target="_blank" rel="noopener noreferrer" className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors text-center block">
                  Ver disponibilidad
                </a>
              </div>
            </div>

            {/* Apartaments Voralmar */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 md:col-span-2 lg:col-span-1">
              <div className="p-4">
                <h3 className="text-lg font-serif text-gray-800 mb-2">Apartaments Voralmar</h3>
                <div className="mb-2">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">Apartamento</span>
                  <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">✓ Pre-reservado</span>
                </div>
                <p className="text-gray-600 mb-3 text-xs">
                  2 dorm. 9 min. Cancel. gratuita.
                </p>
                <div className="mb-3">
                  <p className="text-xl font-bold text-gray-800">€165<span className="text-xs font-normal text-gray-600">/noche</span></p>
                  <p className="text-xs text-gray-500">4-5 personas · Mín. 2 noches</p>
                </div>
                <a href="https://www.booking.com/Share-uMDn6N" target="_blank" rel="noopener noreferrer" className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors text-center block">
                  Ver disponibilidad
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-rose-50 rounded-lg p-4">
            <h3 className="text-lg font-serif text-gray-800 mb-3 text-center">Información Importante</h3>
            <div className="space-y-3 text-xs text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">📍 Ubicación</h4>
                <p>Todos los alojamientos están a máximo 15 minutos del lugar de la celebración.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">⏰ Reservas</h4>
                <p>No hay mucha oferta cercana y los alojamientos pueden agotarse. Recomendamos reservar cuanto antes.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">🚗 Transporte</h4>
                <p>Intentaremos facilitar el transporte en la medida de lo posible. Por favor, rellena el cuestionario de asistencia con los detalles de tus necesidades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};