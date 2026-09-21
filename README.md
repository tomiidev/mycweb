# Mate y Código — sitio comercial

Landing en Next.js, TypeScript y Tailwind CSS. Identidad visual basada en el workspace `ideas`: verdes, fondos claros, tipografía Arial y esquinas de 3 px. No requiere base de datos ni servicios de IA.

## Ejecutar

1. `npm install`
2. `Copy-Item .env.example .env.local`
3. `npm run dev`
4. Abrir http://localhost:3001

Verificación: `npm run lint`, `npm run typecheck`, `npm run build`.
Producción local: `npm run build` y `npm start`. No se publicó el sitio.

## Editar

- Marca y contactos: `src/lib/config.ts`.
- Contenido, demos y formulario: `src/components/Landing.tsx`.
- Estilos y variables de color: `src/app/globals.css`.
- Metadatos: `src/app/layout.tsx`.

## Envío de consultas con Resend

En `.env.local` completá únicamente:

```dotenv
RESEND_API_KEY=tu_api_key
CONTACT_EMAIL=tu_email
```

Reiniciá `npm run dev` después de guardar. CONTACT_EMAIL es el destinatario fijo de las consultas y el email público mostrado en la landing. La API key queda exclusivamente en el servidor. No uses NEXT_PUBLIC para la key. Las variables anteriores CONTACT_WEBHOOK_URL, CONTACT_WEBHOOK_TOKEN y NEXT_PUBLIC_CONTACT_EMAIL ya no se utilizan.

Por defecto se envía desde `Mate y Código <onboarding@resend.dev>`. Este remitente es **solo para pruebas** y Resend permite enviar únicamente al email asociado a tu cuenta de Resend. Para producción o para otro destinatario, verificá un dominio en Resend y configurá opcionalmente `RESEND_FROM` con una dirección de ese dominio. No es posible evitar esta restricción solo mediante código. Documentación: https://resend.com/docs/knowledge-base/403-error-resend-dev-domain

El servidor llama directamente a la API HTTPS de Resend, sin webhook intermediario ni dependencias adicionales. El email contiene nombre, empresa, email, solución y descripción en texto plano. Reply-To apunta al visitante para poder responderle. El destinatario y remitente son configuración del servidor, nunca datos elegidos por el visitante.

Sin configuración el formulario está deshabilitado. Solo se confirma aceptación cuando Resend devuelve un ID válido; aceptación no significa entrega en la bandeja del destinatario. Los errores y timeouts conservan el formulario y permiten reintentar. La clave de idempotencia se mantiene para el mismo contenido y sesión del formulario, evitando duplicados en reintentos durante las 24 horas de retención de Resend. Verificá la entrega real desde el panel de Resend tras configurar tus credenciales.

Se mantienen validación de cliente y servidor, honeypot, tiempo mínimo y cuatro intentos por email cada diez minutos en memoria. El límite se reinicia con el proceso y no se comparte entre instancias; en despliegues con varias instancias, complementarlo en el proxy o hosting. La web no guarda consultas ni registra el contenido de los emails o las credenciales.

Pruebas locales sin enviar emails: `node --test tests/contact.test.cjs`. Cubren aceptación, rechazos del proveedor, timeouts, configuración faltante, validación, spam y claves de reintento.

## Demos

Datos locales y ficticios: preguntas y fuentes, filtros y razones de conciliación, clasificación y borradores, búsquedas predefinidas. Las pestañas admiten flechas, Inicio y Fin. No hay conexión con los productos de `ideas` ni acceso a sus credenciales. Todas las soluciones se presentan como MVP/pilotos, sin resultados comerciales inventados.

