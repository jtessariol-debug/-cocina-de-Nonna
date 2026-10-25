import React, {useState} from 'react';
import {ArrowUpRight, Instagram} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import QuantitySelector from './QuantitySelector';
import {products, formatPrice, formatSubtotal} from '../data/products';
import {orderMessage} from '../data/order';
import {delivery} from '../config/commerce';
import {INSTAGRAM_URL, INSTAGRAM_USERNAME, WHATSAPP_DISPLAY, whatsappUrl} from '../config/contact';

export default function OrderSection() {
  const [status, setStatus] = useState('');
  const [productId, setProductId] = useState(products[0].id);
  const [size, setSize] = useState(products[0].presentations[0].size);
  const [quantity, setQuantity] = useState(1);
  const product = products.find(item => item.id === productId);
  const selected = product.presentations.find(item => item.size === size);
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = orderMessage({product, presentation:selected, quantity, name:data.get('nombre').trim(), note:data.get('mensaje').trim()});
    const url = whatsappUrl(message);
    if (!url) {setStatus(`Puedes consultarnos por Instagram: @${INSTAGRAM_USERNAME}.`);return;}
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('Continúa en WhatsApp para enviar tu consulta y coordinar el pedido.');
  }
  return <section id="pedidos" className="section order reveal" aria-labelledby="order-title">
    <div className="section-copy"><span className="eyebrow">PEDIDOS Y CONSULTAS</span><h2 id="order-title">Hablemos de<br/>tu pedido.</h2><p>Escríbenos directamente por WhatsApp y te ayudamos con tu pedido. También puedes completar el formulario para enviarnos los detalles.</p>
      <a className="contact-link contact-whatsapp" href={whatsappUrl() || INSTAGRAM_URL} target="_blank" rel="noreferrer"><WhatsAppIcon size={23}/><span><small>WhatsApp</small><strong>{WHATSAPP_DISPLAY}</strong></span><ArrowUpRight size={17}/></a>
      <a className="contact-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={20}/> @{INSTAGRAM_USERNAME} <ArrowUpRight size={17}/></a>
    </div>
    <form onSubmit={submit}>
      <label htmlFor="nombre">Tu nombre</label><input id="nombre" name="nombre" placeholder="¿Cómo te llamas?" required maxLength="100" autoComplete="name" pattern=".*\S.*"/>
      <label htmlFor="sabor">Sabor</label><select id="sabor" name="sabor" value={productId} onChange={event => {setProductId(event.target.value);setStatus('');}}>{products.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
      <div className="form-row"><div><label htmlFor="presentacion">Presentación</label><select id="presentacion" name="presentacion" value={size} onChange={event => {setSize(event.target.value);setStatus('');}}>{product.presentations.map(item => <option key={item.size}>{item.size}</option>)}</select></div><QuantitySelector id="cantidad" value={quantity} onChange={value => {setQuantity(value);setStatus('');}}/></div>
      <div className="order-summary" aria-live="polite" aria-atomic="true"><div><span>Precio unitario</span><strong>{formatPrice(selected.price)}</strong><span>{selected.size} · {quantity} {quantity === 1 ? 'botella' : 'botellas'}</span></div><div><span>Subtotal estimado</span><strong>{formatSubtotal(selected.price, quantity)}</strong><span>{delivery.subtotalNote}</span></div></div>
      <label htmlFor="mensaje">¿Algo más que debamos saber? <span>(opcional)</span></label><textarea id="mensaje" name="mensaje" rows="3" maxLength="1500" placeholder="Es para un regalo, una celebración…"/>
      <button className="button dark whatsapp-cta" type="submit"><WhatsAppIcon/> Enviar pedido por WhatsApp <ArrowUpRight size={18}/></button><small>Al continuar, se abrirá WhatsApp para que envíes tu consulta.</small><p className="form-status" role="status">{status}</p>
    </form>
  </section>;
}
