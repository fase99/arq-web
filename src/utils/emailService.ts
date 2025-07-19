import { Resend } from 'resend';

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

// Función para obtener la instancia de Resend con validación de API key
function getResendInstance() {
  const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY no está configurado en las variables de entorno');
  }
  
  return new Resend(apiKey);
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const resend = getResendInstance();
    
    // Email al administrador
    const adminEmail = await resend.emails.send({
      from: 'contacto@tudominio.com', // Cambia por tu email verificado en Resend
      to: ['admin@tudominio.com'], // Cambia por el email donde quieres recibir los contactos
      subject: `Nuevo contacto desde el sitio web - ${data.name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone || 'No proporcionado'}</p>
        <p><strong>Empresa:</strong> ${data.company || 'No proporcionado'}</p>
        <p><strong>¿Cómo nos conoció?:</strong> ${data.hearAbout || 'No especificado'}</p>
        <p><strong>Servicio de interés:</strong> ${data.service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Enviado desde el formulario de contacto del sitio web</small></p>
      `
    });

    // Email de confirmación al usuario
    const confirmationEmail = await resend.emails.send({
      from: 'contacto@tudominio.com', // Cambia por tu email verificado en Resend
      to: [data.email],
      subject: '¡Gracias por contactarnos!',
      html: `
        <h2>¡Hola ${data.name}!</h2>
        <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
        <p><strong>Resumen de tu consulta:</strong></p>
        <ul>
          <li>Servicio de interés: ${data.service}</li>
          <li>Mensaje: ${data.message}</li>
        </ul>
        <p>Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas.</p>
        <p>¡Saludos!<br>El equipo de [Tu Empresa]</p>
      `
    });

    return {
      success: true,
      adminEmailId: adminEmail.data?.id,
      confirmationEmailId: confirmationEmail.data?.id
    };

  } catch (error) {
    console.error('Error al enviar email:', error);
    throw new Error('Error al enviar el email de contacto');
  }
}

// Función alternativa usando plantillas HTML más simples
export async function sendSimpleContactEmail(data: ContactFormData) {
  try {
    const resend = getResendInstance();
    
    const result = await resend.emails.send({
      from: 'contacto@tudominio.com',
      to: ['admin@tudominio.com'],
      subject: `Contacto: ${data.name} - ${data.service}`,
      text: `
Nuevo contacto desde el sitio web:

Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone || 'No proporcionado'}
Empresa: ${data.company || 'No proporcionado'}
¿Cómo nos conoció?: ${data.hearAbout || 'No especificado'}
Servicio de interés: ${data.service}

Mensaje:
${data.message}

Términos aceptados: ${data.terms ? 'Sí' : 'No'}
      `
    });

    return { success: true, emailId: result.data?.id };
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw new Error('Error al enviar el email de contacto');
  }
}
