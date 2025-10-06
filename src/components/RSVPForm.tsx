import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckIcon, CalendarIcon, HeartIcon } from 'lucide-react';
type GuestInfo = {
  name: string;
  age?: string;
  dietaryRestrictions?: string;
};
type FormData = {
  name: string;
  phone: string;
  attending: string;
  guestCount: string;
  guests: GuestInfo[];
  dietaryRestrictions: string;
  accommodation: string;
  transportationNeeded: string;
  originLocation: string;
  message: string;
};
export const RSVPForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<FormData>({
    defaultValues: {
      guestCount: 'Solo yo',
      guests: []
    }
  });
  const attending = watch('attending');
  const guestCount = watch('guestCount');
  
  // Helper para extraer el número de invitados del valor del select
  const getGuestNumber = (guestCountValue: string): number => {
    if (guestCountValue === 'Solo yo') return 1;
    const match = guestCountValue.match(/^(\d+) personas$/);
    return match ? parseInt(match[1]) : 0;
  };



  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Configuración de Google Forms
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdADu4GBVEE7B2UHEBfn38pUHoN3Ljbdlh_J4RR2hIacWGqKg/formResponse';
      
      // Mapeo semántico de campos del formulario
      const FORM_FIELDS = {
        name: 'entry.1504512597',              // Nombre Completo
        phone: 'entry.1931157242',             // Teléfono
        attending: 'entry.1657805661',         // ¿Asistirá?
        guestCount: 'entry.819952964',        // Número de Invitados
        guestsInfo: 'entry.2057794306',        // Información de Acompañantes
        dietaryRestrictions: 'entry.1265115496', // Restricciones Dietéticas
        accommodation: 'entry.1703827819',     // Necesidades de Alojamiento
        transportationNeeded: 'entry.1108909821', // ¿Necesita transporte?
        originLocation: 'entry.1736227356',    // Localidad de Origen
        message: 'entry.587518505'            // Mensaje para la Pareja
      };
      
      // Preparar datos del formulario
      const formData = new FormData();
      formData.append(FORM_FIELDS.name, data.name);
      formData.append(FORM_FIELDS.phone, data.phone || '');
      formData.append(FORM_FIELDS.attending, data.attending);
      formData.append(FORM_FIELDS.guestCount, data.guestCount || '');
      
      // Para acompañantes, convertir array a string (solo los que tengan nombre)
      const filledGuests = data.guests.filter(guest => guest.name && guest.name.trim() !== '');
      const guestsInfo = filledGuests.map((guest, index) => 
        `Invitado ${index + 1}: ${guest.name}, Edad: ${guest.age || 'No especificado'}, Restricciones: ${guest.dietaryRestrictions || 'Ninguna'}`
      ).join('\n');
      formData.append(FORM_FIELDS.guestsInfo, guestsInfo);
      
      formData.append(FORM_FIELDS.dietaryRestrictions, data.dietaryRestrictions || '');
      formData.append(FORM_FIELDS.accommodation, data.accommodation || '');
      formData.append(FORM_FIELDS.transportationNeeded, data.transportationNeeded || '');
      formData.append(FORM_FIELDS.originLocation, data.originLocation || '');
      formData.append(FORM_FIELDS.message, data.message || '');

      // 📤 PASO 2: Intentar enviar a Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      console.log('✅ Enviado a Google Forms (probablemente exitoso)');
      
    } catch (error) {
      console.error('❌ Error enviando a Google Forms:', error);
    }
    
    // 🎉 Mostrar mensaje de éxito
    setIsSubmitted(true);
    setIsSubmitting(false);
  };
  return (
    <section id="rsvp" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
            Confirmar Asistencia
          </h2>
          <div className="w-16 h-1 bg-rose-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tu presencia hará nuestro día aún más especial. Por favor, confirma
            tu asistencia antes del 1 de marzo de 2026 para poder planificar una
            celebración perfecta.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">
                ¡Gracias!
              </h3>
              <p className="text-gray-600 mb-6">
                ¡Su confirmación ha sido enviada con éxito! Estamos emocionados
                de celebrar este día tan especial con ustedes.
              </p>
              <button onClick={() => {
                setIsSubmitted(false);
              }} className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Enviar Otra Respuesta
              </button>
            </div> : <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="mb-8 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-serif text-gray-800 mb-4 flex items-center">
                  <HeartIcon className="w-5 h-5 mr-2 text-rose-500" />
                  Información Personal
                </h3>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input id="name" type="text" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} placeholder="Su nombre completo" {...register('name', {
                required: true
              })} />
                  {errors.name && <p className="text-red-500 text-sm mt-1">
                      Por favor, introduzca su nombre
                    </p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Teléfono
                  </label>
                  <input id="phone" type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Su número de teléfono" {...register('phone')} />
                </div>
              </div>
              <div className="mb-8 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-serif text-gray-800 mb-4 flex items-center">
                  <CheckIcon className="w-5 h-5 mr-2 text-rose-500" />
                  Confirmación de Asistencia
                </h3>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    ¿Asistirá?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" value="Sí, asistiré" className="w-4 h-4 text-rose-600 focus:ring-rose-500 border-gray-300" {...register('attending', {
                    required: true
                  })} />
                      <span className="ml-2 text-gray-700">Sí, asistiré</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" value="Lo siento, no podré asistir" className="w-4 h-4 text-rose-600 focus:ring-rose-500 border-gray-300" {...register('attending', {
                    required: true
                  })} />
                      <span className="ml-2 text-gray-700">
                        Lo siento, no podré asistir
                      </span>
                    </label>
                  </div>
                  {errors.attending && <p className="text-red-500 text-sm mt-1">
                      Por favor, seleccione una opción
                    </p>}
                </div>
              </div>
              {attending === 'Sí, asistiré' && <>
                    <div className="mb-6">
                      <label htmlFor="guestCount" className="block text-gray-700 font-medium mb-2">
                        Número de Invitados (incluyéndose)
                      </label>
                      <select id="guestCount" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 ${errors.guestCount ? 'border-red-500' : 'border-gray-300'}`} {...register('guestCount', {
                  required: attending === 'Sí, asistiré'
                })}>
                        <option value="">Seleccionar</option>
                        <option value="Solo yo">Solo yo</option>
                        <option value="2 personas">2 personas</option>
                        <option value="3 personas">3 personas</option>
                        <option value="4 personas">4 personas</option>
                        <option value="5 personas">5 personas</option>
                      </select>
                      {errors.guestCount && <p className="text-red-500 text-sm mt-1">
                          Por favor, seleccione el número de invitados
                        </p>}
                    </div>
                    
                    {guestCount && getGuestNumber(guestCount) > 1 && <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                          Información de Acompañantes
                        </label>
                        <p className="text-gray-600 text-sm mb-3">
                          Por favor, proporcione los detalles de todas las
                          personas que asistirán con usted.
                        </p>
                        <div className="space-y-4">
                          {Array.from({ length: getGuestNumber(guestCount) - 1 }, (_, index) => <div key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50">
                              <div className="mb-2">
                                <h4 className="font-medium">
                                  Invitado {index + 1}
                                </h4>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div>
                                  <label className="block text-gray-700 text-sm mb-1">
                                    Nombre completo
                                  </label>
                                  <input type="text" placeholder="Nombre completo" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" {...register(`guests.${index}.name` as const, {
                          required: true
                        })} />
                                  {errors.guests?.[index]?.name && <p className="text-red-500 text-xs mt-1">
                                      Requerido
                                    </p>}
                                </div>
                                <div>
                                  <label className="block text-gray-700 text-sm mb-1">
                                    Edad
                                  </label>
                                  <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" defaultValue="adult" {...register(`guests.${index}.age` as const)}>
                                    <option value="">Seleccionar</option>
                                    <option value="adult">Adulto</option>
                                    <option value="teen">
                                      Adolescente (13-17)
                                    </option>
                                    <option value="child">Niño (3-12)</option>
                                    <option value="infant">Bebé (0-2)</option>
                                  </select>
                                </div>
                              </div>
                              <div className="grid grid-cols-1">
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">
                                    Restricciones alimentarias o alergias
                                    </label>
                                  <input type="text" placeholder="Alergias o restricciones" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" {...register(`guests.${index}.dietaryRestrictions` as const)} />
                                </div>
                              </div>
                            </div>)}
                        </div>
                      </div>}
                  
                  {/* Campo de Restricciones Alimentarias después de invitados */}
                  <div className="mb-6">
                    <label htmlFor="dietaryRestrictions" className="block text-gray-700 font-medium mb-2">
                      Restricciones alimentarias propias y otras necesidades
                    </label>
                    <textarea 
                      id="dietaryRestrictions" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" 
                      placeholder="Restricciones alimentarias, alergias o cualquier otra necesidad especial" 
                      rows={2} 
                      {...register('dietaryRestrictions')}
                    ></textarea>
                  </div>
                  </>}
              
              {attending === 'Sí, asistiré' && <>
                  <div className="mb-8 pb-6 border-b border-gray-200">
                    <h3 className="text-xl font-serif text-gray-800 mb-4 flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-rose-500" />
                      Detalles de Viaje y Alojamiento
                    </h3>
                    <div className="mb-6">
                      <label htmlFor="accommodation" className="block text-gray-700 font-medium mb-2">
                        Necesidades de Alojamiento *
                      </label>
                      <select id="accommodation" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 ${errors.accommodation ? 'border-red-500' : 'border-gray-300'}`} {...register('accommodation', {
                        required: attending === 'Sí, asistiré'
                      })}>
                        <option value="">Seleccione una opción</option>
                        <option value="Volveré a mi propio alojamiento">
                          Volveré a mi propio alojamiento
                        </option>
                        <option value="Me quedaré en un hotel">  
                          Me quedaré en un hotel
                        </option>
                        <option value="Me gustaría alojamiento en casa compartida">
                          Me gustaría alojamiento en casa compartida
                        </option>
                      </select>
                      {errors.accommodation && <p className="text-red-500 text-sm mt-1">
                        Por favor, seleccione una opción de alojamiento
                      </p>}
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">
                        ¿Necesita transporte? *
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="radio" value="Sí" className="w-4 h-4 text-rose-600 focus:ring-rose-500 border-gray-300" {...register('transportationNeeded', {
                            required: attending === 'Sí, asistiré'
                          })} />
                          <span className="ml-2 text-gray-700">Sí</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" value="No, tendré mi propio transporte" className="w-4 h-4 text-rose-600 focus:ring-rose-500 border-gray-300" {...register('transportationNeeded', {
                            required: attending === 'Sí, asistiré'
                          })} />
                            <span className="ml-2 text-gray-700">
                            No, usaré mi propio transporte
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" value="No, pero me podría interesar" className="w-4 h-4 text-rose-600 focus:ring-rose-500 border-gray-300" {...register('transportationNeeded', {
                              required: attending === 'Sí, asistiré'
                            })} />
                            <span className="ml-2 text-gray-700">
                            No, pero me podría interesar
                            </span>
                        </label>
                      </div>
                      {errors.transportationNeeded && <p className="text-red-500 text-sm mt-1">
                        Por favor, seleccione una opción de transporte
                      </p>}
                    </div>
                    <div className="mb-6">
                      <label htmlFor="originLocation" className="block text-gray-700 font-medium mb-2">
                        Localidad de salida / regreso
                      </label>
                      <input type="text" id="originLocation" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="¿De qué ciudad o localidad vienes?" {...register('originLocation')} />
                      <p className="text-gray-500 text-sm mt-1">
                        Intentaremos facilitar el transporte y alojamiento en la medida de los posible.
                      </p>
                    </div>
                  </div>
                </>}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje para la Pareja (Opcional)
                </label>
                <textarea id="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Comparta sus buenos deseos o cualquier mensaje para la pareja" rows={4} {...register('message')}></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`font-medium py-3 px-8 rounded-full transition-colors shadow-md ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white' 
                      : 'bg-rose-600 hover:bg-rose-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Confirmación'}
                </button>
              </div>
            </form>}
        </div>
      </div>
    </section>
  );
};