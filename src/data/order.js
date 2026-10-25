import {formatPrice, hasPrice} from './products';

export function orderMessage({product, presentation, quantity, name = '', note = ''}) {
  const introduction = name ? `Mi nombre es ${name}.\n\n` : '';
  const extra = note ? `\n\n${note}` : '';
  const price = hasPrice(presentation.price) ? formatPrice(presentation.price) : 'Por confirmar';
  const question = hasPrice(presentation.price) ? '¿Está disponible?' : '¿Me confirman el precio y la disponibilidad?';
  return `Hola, Los Ponches de Nonna 👋\n\n${introduction}Me gustaría realizar el siguiente pedido:\n\nProducto: ${product.name}\nPresentación: ${presentation.size}\nCantidad: ${quantity}\nPrecio unitario: ${price}\n\n${question}${extra}`;
}
