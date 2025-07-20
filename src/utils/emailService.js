// Configuración de EmailJS usando variables de entorno desde .env
const EMAILJS_CONFIG = {
  // En el navegador, estas variables no estarán disponibles directamente
  // Solo se pueden usar desde el lado del servidor (como en Contact.astro)
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
  serviceId: process.env.EMAILJS_SERVICE_ID,
  templateId: process.env.EMAILJS_TEMPLATE_ID,
  contactEmail: process.env.CONTACT_EMAIL
};

// Función para enviar email de contacto
function sendContactEmail(data) {
  return new Promise(function(resolve, reject) {
    try {
      // Verificar que EmailJS esté disponible
      if (!window.emailjs) {
        throw new Error('EmailJS no está disponible');
      }
      
      // Preparar los datos para EmailJS
      var templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'No proporcionado',
        company: data.company || 'No proporcionado',
        hear_about: data.hearAbout || 'No especificado',
        service: data.service,
        message: data.message,
        to_email: EMAILJS_CONFIG.contactEmail,
        reply_to: data.email,
        terms_accepted: data.terms === 'on' ? 'Sí' : 'No'
      };

      // Enviar email usando EmailJS
      emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )
      .then(function(response) {
        if (response.status === 200) {
          resolve({
            success: true,
            message: '¡Gracias por tu mensaje! Te contactaremos pronto.'
          });
        } else {
          throw new Error('Error en el envío del email');
        }
      })
      .catch(function(error) {
        console.error('Error al enviar email con EmailJS:', error);
        reject({
          success: false,
          message: 'Ha ocurrido un error al enviar tu mensaje. Por favor intenta nuevamente.'
        });
      });

    } catch (error) {
      console.error('Error al enviar email con EmailJS:', error);
      reject({
        success: false,
        message: 'Ha ocurrido un error al enviar tu mensaje. Por favor intenta nuevamente.'
      });
    }
  });
}

// Función simplificada para compatibilidad
function sendSimpleContactEmail(data) {
  return sendContactEmail(data);
}

// Exportar funciones para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    sendContactEmail: sendContactEmail,
    sendSimpleContactEmail: sendSimpleContactEmail
  };
}

// Hacer disponible globalmente para scripts inline
window.emailService = {
  sendContactEmail: sendContactEmail,
  sendSimpleContactEmail: sendSimpleContactEmail
};