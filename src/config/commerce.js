// Completar únicamente cuando la clienta confirme la información.
export const delivery = {
  coordination: 'Coordinamos cada entrega directamente por WhatsApp.',
  availability: 'El costo y disponibilidad del delivery dependen de la ubicación.',
  advanceOrders: 'Para pedidos especiales o en cantidad, recomendamos realizar la solicitud con anticipación.',
  catalogNote: 'El costo de delivery puede variar según la ubicación.',
  subtotalNote: 'Delivery no incluido',
  coverage: '',
  fees: '',
  schedule: '',
};

export const payment = {
  methods: ['Transferencia bancaria', 'Pago acordado directamente por WhatsApp'],
  note: 'Los datos de pago se confirman al momento de realizar el pedido.',
  // Estructura opcional: {bank: '', holder: '', account: '', type: ''}.
  accounts: [],
};

// Pendiente confirmar vida útil y recomendaciones exactas con la clienta
export const storage = {
  instructions: ['Conservar refrigerado.', 'Agitar suavemente antes de servir.'],
  shelfLife: '',
};
