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
          <div className="flex items-start gap-4 mb-3">
            <Heart className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Vuestra presencia ya es nuestro mayor tesoro
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Compartir este día especial con vosotros es, sin duda, el mejor regalo.
                Si además os apetece tener un detalle, os dejamos algunas opciones para
                hacerlo de la manera que os resulte más cómoda, siempre con todo nuestro
                cariño y gratitud:
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6 ml-10">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-base">
                <strong className="text-lg underline">Efectivo:</strong> El día de la boda habrá un cofre guardián para quien quiera dejar un detalle con cariño 💝
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Bizum:</strong> Una opción cómoda y sencilla para quien la prefiera 📱
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-gray-700 mb-3">
                  <strong>Transferencia bancaria:</strong> Si os resulta más práctico, también podéis hacerlo por transferencia 🏦
                </p>
                <div className="bg-amber-50/50 rounded-lg p-4 mb-3 border border-amber-100">
                  <p className="text-sm text-gray-700 mb-3">
                    🔒 <strong>Acceso privado:</strong><br/>
                    Hemos dejado los datos en un documento privado al que podéis acceder desde aquí:
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
                  <p className="text-sm text-gray-600 italic">
                    Cualquier detalle será recibido con todo nuestro amor y agradecimiento 💕
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
