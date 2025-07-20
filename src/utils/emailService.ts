import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  hearAbout?: string;
  message: string;
  service: string;
  terms: string;
}

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  publicKey: import.meta.env.EMAILJS_PUBLIC_KEY || 'your_emailjs_public_key_here',
  serviceId: import.meta.env.EMAILJS_SERVICE_ID || 'service_arq_email',
  templateId: import.meta.env.EMAILJS_TEMPLATE_ID || 'your_template_id_here'
};

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Preparar los datos para EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'No proporcionado',
      company: data.company || 'No proporcionado',
      hear_about: data.hearAbout || 'No especificado',
      service: data.service,
      message: data.message,
      to_email: import.meta.env.CONTACT_EMAIL || 'arq.send@gmail.com',
      reply_to: data.email,
      terms_accepted: data.terms === 'on' ? 'Sí' : 'No'
    };

    // Enviar email usando EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: '¡Gracias por tu mensaje! Te contactaremos pronto.'
      };
    } else {
      throw new Error('Error en el envío del email');
    }

  } catch (error) {
    console.error('Error al enviar email con EmailJS:', error);
    return {
      success: false,
      message: 'Ha ocurrido un error al enviar tu mensaje. Por favor intenta nuevamente.'
    };
  }
}

// Función simplificada para compatibilidad
export const sendSimpleContactEmail = sendContactEmail;
