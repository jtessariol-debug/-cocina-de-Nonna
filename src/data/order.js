import {formatPrice} from './products';

export function orderMessage({product, presentation, quantity, name = '', note = ''}) {
  const introduction = name ? `Mi nombre es ${name}.\n\n` : '';
  const extra = note ? `\n\n${note}` : '';
  return `Hola, Los Ponches de Nonna 👋\n\n${introduction}Me gustaría realizar el siguiente pedido:\n\nProducto: ${product.name}\nPresentación: ${presentation.size}\nCantidad: ${quantity}\nPrecio unitario: ${formatPrice(presentation.price)}\n\n¿Está disponible?${extra}`;
}
