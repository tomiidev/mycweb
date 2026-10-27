export const money = (value: number) => `$ ${new Intl.NumberFormat('es-UY').format(value)}`;
export type Movement = { id: string; date: string; description: string; expected: number; received: number; status: string };
export const initialMovements: Movement[] = [
  { id: 'FAC-1043', date: '12/09/2026', description: 'Venta #1043', expected: 12500, received: 0, status: 'Sin cobro' },
  { id: 'MP-8821', date: '10/09/2026', description: 'Mercado Pago', expected: 8000, received: 8230, status: 'Monto diferente' },
  { id: 'TR-2912', date: '08/09/2026', description: 'Transferencia', expected: 5000, received: 5000, status: 'Sin identificar' },
  { id: 'FAC-1092', date: '18/09/2026', description: 'Venta #1092', expected: 18500, received: 18500, status: 'Conciliado' },
];
export type DemoDocument = { id: string; name: string; company: string; date: string; type: string; detail: string; source: string };
export const initialDocuments: DemoDocument[] = [
  { id: '124', name: 'Factura_00124.pdf', company: 'Proveedor S.A.', date: '12/09/2026', type: 'Facturas', detail: 'Importe: $12.450 · Estado: Pagada. Servicios de mantenimiento, septiembre de 2026.', source: 'página 1' },
  { id: 'local', name: 'Contrato_Local.pdf', company: 'Inmobiliaria Central', date: '02/09/2026', type: 'Contratos', detail: 'El contrato vence el 15 de diciembre de 2026. Alquiler del local comercial en Montevideo.', source: 'página 4' },
  { id: 'agosto', name: 'Ventas_Agosto.xlsx', company: 'Administración', date: '31/08/2026', type: 'Planillas', detail: 'Ventas de agosto: $1.108.452. Total de operaciones: 169.', source: 'hoja Resumen' },
  { id: '118', name: 'Factura_00118.pdf', company: 'Servicios del Sur', date: '28/08/2026', type: 'Facturas', detail: 'Importe: $8.600 · Estado: Pendiente. Vencimiento: 30/09/2026.', source: 'página 1' },
  { id: 'norte', name: 'Factura_ComercialNorte_092.pdf', company: 'Comercial Norte', date: '18/09/2026', type: 'Facturas', detail: 'Importe: $34.800 · Saldo pendiente: $12.500. Vencimiento: 28/09/2026.', source: 'página 1' },
];
export const searchRecords = [
  { id: 'client', type: 'Clientes', name: 'Comercial Norte', info: 'Cliente · Montevideo', details: { Estado: 'Activo', 'Última compra': '18/09/2026', 'Facturación últimos 30 días': '$82.300', Facturas: '4', 'Saldo pendiente': '$12.500' } },
  { id: 'doc', type: 'Documentos', name: 'Factura_ComercialNorte_092.pdf', info: 'Comercial Norte · Factura · $34.800', details: { Importe: '$34.800', Emisión: '18/09/2026', Cliente: 'Comercial Norte' } },
  { id: 'sale', type: 'Ventas', name: 'Venta #1092', info: 'Comercial Norte · $18.500', details: { Cliente: 'Comercial Norte', Importe: '$18.500', Estado: 'Conciliada' } },
  { id: 'contact', type: 'Contactos', name: 'Lucía Fernández', info: 'Comercial Norte · Administración', details: { Empresa: 'Comercial Norte', Área: 'Administración', Ciudad: 'Montevideo' } },
  { id: 'product', type: 'Productos', name: 'Papel A4 · Caja de 10 resmas', info: 'Insumos de oficina · 42 unidades disponibles', details: { Código: 'PAP-010', Stock: '42 unidades', Precio: '$2.450' } },
];
export const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
