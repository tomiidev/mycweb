# Demo comercial

Ejecutar `npm run dev` y abrir `http://localhost:3001/demo`.

Rutas: `/demo`, `/demo/conciliacion`, `/demo/documentos`, `/demo/consultas`, `/demo/buscador` y `/demo/configuracion`.

La landing pública se conserva. Las rutas demo no están enlazadas desde ella y usan metadata `noindex, nofollow`. Esto no es control de acceso: cualquiera con el enlace puede entrar. No se implementa autenticación, de acuerdo con el alcance del prototipo.

Los datos ficticios están en `src/lib/demo-data.ts`; los componentes y módulos, en `src/components/demo`. El contexto del layout mantiene movimientos y documentos durante la navegación interna. Al recargar se reinician. Configuración permite restablecer ambos conjuntos.

La carga de archivos solo agrega nombre y tipo en memoria; no transmite ni interpreta su contenido. Las preguntas usan respuestas predefinidas y no llaman servicios de IA. Los movimientos son una muestra del período: las métricas globales ilustrativas no se calculan sumando esa tabla. Marcar conciliado registra una revisión sin alterar importes.

Validación: `npm run lint`, `npm run typecheck`, `npm run build` y `node --test tests/contact.test.cjs`.
