// Número oficial confirmado por la marca.
// Editar aquí si la clienta cambia su número. Incluir código de país.
export const WHATSAPP_NUMBER = '18492065831';
export const WHATSAPP_DISPLAY = '+1 (849) 206-5831';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = 'https://instagram.com/losponchesdenonna';
export function whatsappUrl(message = 'Hola, Los Ponches de Nonna 👋\nMe gustaría recibir información sobre sus ponches artesanales.') {
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : '';
}
