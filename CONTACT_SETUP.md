# Configuración del Formulario de Contacto

## Funcionalidad Implementada

El formulario de contacto (`src/components/forms/Contact.astro`) está completamente funcional y incluye:

### ✅ Características
- **Validación del lado del servidor**: Valida campos requeridos y formato de email
- **Envío de emails**: Usando Resend API para envío real de emails
- **Feedback visual**: Mensajes de éxito y error
- **Experiencia de usuario mejorada**: Indicador de carga durante el envío
- **Responsive**: Adaptable a dispositivos móviles y desktop

### 📋 Campos del Formulario
- Nombre completo (requerido)
- Email corporativo (requerido)
- Número de teléfono (opcional)
- Nombre de la empresa (opcional)
- ¿Cómo nos conociste? (requerido)
- Servicio de interés (requerido)
- Mensaje del proyecto (requerido)
- Aceptación de términos (requerido)

## 🚀 Configuración

### 1. Configurar Variables de Entorno

Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

### 2. Obtener API Key de Resend

1. Ve a [Resend.com](https://resend.com)
2. Crea una cuenta
3. Ve a "API Keys" en el dashboard
4. Crea una nueva API key
5. Copia la key y agrégala a tu archivo `.env`:

```env
RESEND_API_KEY=re_tu_api_key_aqui
```

### 3. Configurar Dominios de Email

En el archivo `src/utils/emailService.ts`, actualiza:
- `from`: El email verificado en Resend
- `to`: Tu email donde quieres recibir los contactos

```typescript
from: 'contacto@tudominio.com', // Cambia por tu dominio
to: ['admin@tudominio.com'],    // Cambia por tu email
```

### 4. Verificar Dominio en Resend

1. En Resend, ve a "Domains"
2. Agrega tu dominio
3. Configura los registros DNS requeridos
4. Espera la verificación

## 🎯 Modo de Funcionamiento

### Con Resend Configurado
- Envía email al administrador con los datos del contacto
- Muestra mensaje de éxito al usuario
- Los datos se registran en la consola

### Sin Resend Configurado
- Solo registra los datos en la consola del servidor
- Muestra mensaje informativo al usuario
- Útil para desarrollo y testing

## 🧪 Probar el Formulario

### En Desarrollo:
```bash
npm run dev
# o
pnpm dev
```

Ve a la página de contacto y prueba el formulario.

### En Producción:
Asegúrate de que las variables de entorno estén configuradas en tu proveedor de hosting.

## 📧 Personalización de Emails

Puedes personalizar los templates de email en `src/utils/emailService.ts`:

- `sendContactEmail()`: Para emails con HTML más elaborado
- `sendSimpleContactEmail()`: Para emails de texto simple

## 🛠️ Alternativas de Implementación

Si no quieres usar Resend, puedes modificar el código para usar:
- **SendGrid**
- **Nodemailer** (con SMTP)
- **Webhooks** (Zapier, Make.com)
- **Servicios serverless** (Netlify Forms, Vercel)

## 🐛 Troubleshooting

### El formulario no envía emails:
1. Verifica que `RESEND_API_KEY` esté configurado
2. Revisa que el dominio esté verificado en Resend
3. Checa la consola del servidor para errores

### Error de validación:
- Asegúrate de completar todos los campos requeridos (*)
- Verifica que el email tenga formato válido

### Problemas de estilo:
- Los componentes UI deben existir en `src/components/ui/form/`
- Verifica que Tailwind CSS esté funcionando

## 📞 Información de Contacto Personalizable

En el formulario hay una sección con información de contacto directo. Actualízala en:
```astro
<!-- Información adicional -->
<div class="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
    <p class="font-medium mb-2">¿Necesitas ayuda inmediata?</p>
    <p>Puedes contactarnos directamente:</p>
    <ul class="mt-2 space-y-1">
        <li>📧 Email: contacto@tuempresa.com</li>
        <li>📱 WhatsApp: +1 (555) 123-4567</li>
        <li>⏰ Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</li>
    </ul>
</div>
```
