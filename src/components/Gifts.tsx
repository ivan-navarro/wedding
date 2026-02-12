import React from 'react';
import { Gift, Heart } from 'lucide-react';

interface GiftsProps {
  googleDriveUrl?: string;
}

export const Gifts: React.FC<GiftsProps> = ({ 
  googleDriveUrl = 'https://drive.google.com/file/d/YOUR_FILE_ID/view' 
}) => {
  return (
    <section id="gifts" className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-rose-100 rounded-full">
            <Gift className="w-8 h-8 text-rose-600" />
          </div>
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Regalos
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-rose-100">
          <div className="flex items-start gap-4 mb-6">
            <Heart className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Vuestra presencia es nuestro mayor tesoro
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Compartir este día especial con vosotros es el regalo más valioso que podríamos 
                recibir. Si además queréis contribuir con vuestro cariño a hacer realidad 
                nuestra luna de miel soñada 🌏✈️, aceptaremos vuestro gesto con el corazón lleno 
                de gratitud:
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6 ml-10">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-base">
                <strong className="text-lg underline">Efectivo:</strong> El día de la boda habrá un cofre guardián donde dejar vuestro detalle con todo el cariño 💝
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Bizum:</strong> Una forma rápida y sencilla 📱
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-gray-700 mb-3">
                  <strong>Transferencia bancaria:</strong> Para mayor comodidad, también podéis hacerlo por transferencia 🏦
                </p>
                <div className="bg-amber-50/50 rounded-lg p-4 mb-3 border border-amber-100">
                  <p className="text-sm text-gray-700 mb-3">
                    🔒 <strong>Por motivos de seguridad:</strong><br/>
                    Para acceder a los datos bancarios, por favor solicita acceso al siguiente documento privado:
                  </p>
                  <div className="text-center">
                    <a
                        href={googleDriveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
                      >
                        <Gift className="w-4 h-4" />
                        Ver datos
                      </a>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-600 italic">
                    <strong>Nota:</strong> Para que Hacienda no se nos acople al viaje, 
                    mejor evitar poner conceptos como "regalo de boda" 🤫
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
              Cualquier detalle será recibido con todo nuestro amor y agradecimiento 💕
          </p>
        </div>
      </div>
    </section>
  );
};
