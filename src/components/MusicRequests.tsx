import React from 'react';
import { Music, ExternalLink, ListMusic } from 'lucide-react';

interface MusicRequestsProps {
  googleFormUrl?: string;
  spotifyPlaylistUrl?: string;
}

export const MusicRequests: React.FC<MusicRequestsProps> = ({
  googleFormUrl = 'https://forms.gle/Ct2fhj6W4q9dq3fW8',
  spotifyPlaylistUrl = 'https://open.spotify.com/playlist/3DwWzkWge90KmJFcNjBoDG?si=BLkNRdZcTzeCwoka_neqAg&pt=5ddd458f8c7e4fd5d4ac4a22f088a576&pi=8UO-Yea-Soeoc'
}) => {
  return (
    <section id="music" className="py-12 px-4 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-purple-100 rounded-full">
            <Music className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Elige Tu Canción
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-purple-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              ¡Queremos bailar con tu música favorita!
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Ayúdanos a crear la banda sonora perfecta para nuestra boda. 
              Comparte las canciones que te gustaría escuchar en la fiesta y 
              hagamos de esta noche algo inolvidable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Formulario de Google */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <ListMusic className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Sugiere una Canción
                </h4>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Rellena este formulario con esas canciones que no pueden faltar. 
                ¡Queremos conocer vuestros temazos!
              </p>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Sugerir Canción
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Playlist de Spotify */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Playlist en Spotify
                </h4>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                ¿Eres más de Spotify? Añade tus hits directamente a nuestra 
                playlist colaborativa. ¡Que suene la música!
              </p>
              <a
                href={spotifyPlaylistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Abrir en Spotify
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 italic">
              💃🕺 Entre todos vamos a montar la fiesta del año, ¡gracias por vuestra música!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
