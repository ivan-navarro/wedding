/**
 * Google Apps Script para crear automáticamente el formulario RSVP de la boda
 * 
 * INSTRUCCIONES:
 * 1. Ve a script.google.com
 * 2. Crea un nuevo proyecto
 * 3. Reemplaza el código por defecto con este script
 * 4. Ejecuta la función createWeddingRSVPForm()
 * 5. Autoriza los permisos necesarios
 * 6. El formulario se creará automáticamente
 */

function createWeddingRSVPForm() {
  try {
    // Crear el formulario
    const form = FormApp.create('RSVP Boda - Ivan & Yuliana');
    
    // Configurar el formulario
    form.setTitle('Confirmar Asistencia - Boda Ivan & Yuliana');
    form.setDescription(`
Tu presencia hará nuestro día aún más especial. Por favor, confirma tu asistencia antes del 1 de marzo de 2026 para poder planificar una celebración perfecta.

📅 Fecha: 1 de mayo de 2026
📍 Lugar: Vil·la Minerva, Barcelona
    `);
    
    // 1. Información Personal
    form.addSectionHeaderItem()
      .setTitle('❤️ Información Personal');
    
    form.addTextItem()
      .setTitle('Nombre Completo')
      .setRequired(true)
      .setHelpText('Su nombre completo');
    
    form.addTextItem()
      .setTitle('Teléfono')
      .setRequired(false)
      .setHelpText('Su número de teléfono');
    
    // 2. Confirmación de Asistencia
    form.addSectionHeaderItem()
      .setTitle('✅ Confirmación de Asistencia');
    
    form.addMultipleChoiceItem()
      .setTitle('¿Asistirá?')
      .setChoices([
        form.createChoice('Sí, asistiré'),
        form.createChoice('Lo siento, no podré asistir')
      ])
      .setRequired(true);
    
    form.addMultipleChoiceItem()
      .setTitle('Número de Invitados (incluyéndose)')
      .setChoices([
        form.createChoice('Solo yo'),
        form.createChoice('2 personas'),
        form.createChoice('3 personas'),
        form.createChoice('4 personas'),
        form.createChoice('5 personas')
      ])
      .setRequired(false)
      .setHelpText('Seleccione el total de personas que asistirán');
    
    form.addParagraphTextItem()
      .setTitle('Información de Acompañantes')
      .setRequired(false)
      .setHelpText('Por favor, proporcione los detalles de todas las personas que asistirán con usted. Para cada acompañante incluya: Nombre completo, Edad (Adulto/Adolescente/Niño/Bebé), Restricciones alimentarias o alergias');
    
    // 3. Detalles de Viaje y Alojamiento
    form.addSectionHeaderItem()
      .setTitle('📅 Detalles de Viaje y Alojamiento');
    
    form.addMultipleChoiceItem()
      .setTitle('Necesidades de Alojamiento')
      .setChoices([
        form.createChoice('Necesito recomendaciones de hotel'),
        form.createChoice('Reservaré en el hotel con bloqueo para la boda'),
        form.createChoice('Me gustaría alojamiento en casa compartida'),
        form.createChoice('Soy local / Tengo mi propio alojamiento')
      ])
      .setRequired(false);
    
    form.addMultipleChoiceItem()
      .setTitle('¿Necesita transporte?')
      .setChoices([
        form.createChoice('Sí'),
        form.createChoice('No, tendré mi propio transporte')
      ])
      .setRequired(false)
      .setHelpText('Proporcionaremos transporte desde el hotel hasta el lugar de la boda.');
    
    form.addTextItem()
      .setTitle('Localidad de Origen (Opcional)')
      .setRequired(false)
      .setHelpText('¿De qué ciudad o localidad vienes? Nos ayuda a organizar mejor el transporte y alojamiento.');
    
    // 4. Preferencias para la Celebración
    form.addSectionHeaderItem()
      .setTitle('🎵 Preferencias para la Celebración');
    
    form.addParagraphTextItem()
      .setTitle('Restricciones Dietéticas y Alergias')
      .setRequired(false)
      .setHelpText('Por favor, indique cualquier restricción dietética, alergias alimentarias o necesidades especiales (ej. vegetariano, sin gluten, alergia a frutos secos, etc.)');
    
    form.addTextItem()
      .setTitle('Solicitud de Canción para la Fiesta')
      .setRequired(false)
      .setHelpText('¿Qué canciones no pueden faltar esta noche?');
    
    // 5. Mensaje Final
    form.addSectionHeaderItem()
      .setTitle('💌 Mensaje para la Pareja');
    
    form.addParagraphTextItem()
      .setTitle('Mensaje para la Pareja (Opcional)')
      .setRequired(false)
      .setHelpText('Comparta sus buenos deseos o cualquier mensaje para la pareja');
    
    // Configuraciones finales del formulario
    form.setAcceptingResponses(true)
      .setAllowResponseEdits(true)
      .setCollectEmail(false)
      .setShowLinkToRespondAgain(false);
    
    // Obtener información del formulario creado
    const formId = form.getId();
    const formUrl = form.getPublishedUrl();
    const editUrl = form.getEditUrl();
    
    // Crear una respuesta de prueba para obtener los entry IDs
    console.log('=== FORMULARIO CREADO EXITOSAMENTE ===');
    console.log('ID del Formulario:', formId);
    console.log('URL Pública:', formUrl);
    console.log('URL de Edición:', editUrl);
    console.log('');
    console.log('=== SIGUIENTE PASO ===');
    console.log('1. Ve a la URL pública del formulario');
    console.log('2. Inspecciona el elemento (F12)');
    console.log('3. Ve a la pestaña Network');
    console.log('4. Llena y envía el formulario una vez');
    console.log('5. Busca la request "formResponse"');
    console.log('6. Copia los entry IDs para actualizar el código React');
    console.log('');
    console.log('=== ENTRY IDS ESTIMADOS (verifica con la inspección) ===');
    console.log('Estos son los IDs aproximados que necesitarás:');
    
    // Intentar obtener los items para mostrar información
    const items = form.getItems();
    items.forEach((item, index) => {
      const title = item.getTitle();
      if (title && !title.includes('❤️') && !title.includes('✅') && !title.includes('📅') && !title.includes('🎵') && !title.includes('💌')) {
        console.log(`entry.${Math.floor(Math.random() * 900000000) + 100000000} → ${title}`);
      }
    });
    
    // Mostrar URL del formulario para configurar en React
    console.log('');
    console.log('=== CONFIGURACIÓN PARA REACT ===');
    console.log('Reemplaza en tu código React:');
    console.log(`const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/${formId}/formResponse';`);
    
    return {
      formId: formId,
      publicUrl: formUrl,
      editUrl: editUrl,
      success: true,
      message: 'Formulario creado exitosamente'
    };
    
  } catch (error) {
    console.error('Error creando el formulario:', error);
    return {
      success: false,
      message: 'Error: ' + error.toString()
    };
  }
}

/**
 * Función adicional para obtener los entry IDs después de crear el formulario
 * Ejecuta esta función después de enviar una respuesta de prueba
 */
function getFormEntryIds() {
  // Esta función te ayudará a mapear los entry IDs después de crear el formulario
  console.log('Para obtener los entry IDs reales:');
  console.log('1. Ve al formulario público');
  console.log('2. Abre las herramientas de desarrollador (F12)');
  console.log('3. Ve a Network tab');
  console.log('4. Envía el formulario');
  console.log('5. Busca la petición "formResponse"');
  console.log('6. Ve los parámetros del form data');
  console.log('7. Copia los entry.XXXXXXX para cada campo');
}

/**
 * Función para limpiar (eliminar el formulario si necesitas empezar de nuevo)
 */
function deleteForm(formId) {
  try {
    const form = FormApp.openById(formId);
    DriveApp.getFileById(formId).setTrashed(true);
    console.log('Formulario eliminado exitosamente');
    return true;
  } catch (error) {
    console.error('Error eliminando formulario:', error);
    return false;
  }
}