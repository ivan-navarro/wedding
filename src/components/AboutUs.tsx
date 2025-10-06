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
  return <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
            Nuestra Historia
          </h2>
          <div className="w-16 h-1 bg-rose-500 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            "Donde hay amor, hay vida" - Mahatma Gandhi
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Bride */}
            <div className="text-center">
                <div className="mb-6 relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src="src/img/yuliana.jpg" alt={`${brideFirstName} ${brideLastName}`} className="w-full h-full object-cover" />
                </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {brideFirstName}
              </h3>
              <p className="text-gray-600 mb-4">La Novia</p>
              <p className="text-gray-700 mb-6">
                Yuliana es un alma creativa y apasionada, siempre con una
                sonrisa que ilumina cada habitación. Su dedicación como
                neumóloga refleja su compromiso con el cuidado y bienestar de
                los demás. Su vocación por ayudar a las personas 
                es solo una muestra de su extraordinaria capacidad para
                dar vida y esperanza. Su deslumbrante sonrisa  y su corazón bondadoso
                fueron lo que conquistaron a Ivan desde el primer momento.
              </p>
              <div className="flex justify-center space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-gray-500 hover:text-rose-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-rose-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Groom */}
            <div className="text-center">
                <div className="mb-6 relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src="src/img/Ivan_Picture.jpg" alt={`${groomFirstName} ${groomLastName}`} className="w-full h-full" />
                </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {groomFirstName}
              </h3>
              <p className="text-gray-600 mb-4">El Novio</p>
              <p className="text-gray-700 mb-6">
                Ivan es la definición de determinación y lealtad. Como ingeniero
                informático, resuelve problemas con facilidad, pero su mayor
                logro es cómo ha construido una relación basada en la confianza
                y el respeto mutuo. Su cariñosidad y capacidad para
                hacer sentir especial a Yuliana son cualidades que demuestran el hombre extraordinario que es.
              </p>
              <div className="flex justify-center space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-gray-500 hover:text-rose-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-rose-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Our Story Timeline - Commented out
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif text-gray-800 mb-8 text-center">
              Cómo Nos Conocimos
            </h3>
            <div className="relative">
              Timeline Line
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-200"></div>
              Timeline Items
              <div className="space-y-12">
                First Meeting
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shadow-lg">
                      <HeartIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-0 md:pr-8 md:w-1/2 text-right md:text-left">
                    <h4 className="text-xl font-medium text-gray-800">
                      Primer contacto
                    </h4>
                    <p className="text-rose-600 font-medium mb-2">
                      4 de Febrero, 2024
                    </p>
                    <p className="text-gray-600">
                
                    </p>
                  </div>
                </div>
                First Date
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shadow-lg">
                      <HeartIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="mr-auto ml-8 md:ml-auto md:mr-0 md:pl-8 md:w-1/2">
                    <h4 className="text-xl font-medium text-gray-800">
                    </h4>
                    <p className="text-rose-600 font-medium mb-2">
                    </p>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
                Moving In
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shadow-lg">
                      <HeartIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-0 md:pr-8 md:w-1/2 text-right md:text-left">
                    <h4 className="text-xl font-medium text-gray-800">
                    </h4>
                    <p className="text-rose-600 font-medium mb-2">
                    </p>
                    <p className="text-gray-600"> </p>
                  </div>
                </div>
                Proposal
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center shadow-lg">
                      <HeartIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="mr-auto ml-8 md:ml-auto md:mr-0 md:pl-8 md:w-1/2">
                    <h4 className="text-xl font-medium text-gray-800">
                      La Propuesta
                    </h4>
                    <p className="text-rose-600 font-medium mb-2">
                      8 de mayo, 2025
                    </p>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>;
};