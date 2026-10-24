import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {ArrowUpRight, Maximize2, X} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import {products, formatPrice} from '../data/products';
import {whatsappUrl, WHATSAPP_DISPLAY} from '../config/contact';
import '../styles/menu.css';

// Se carga el archivo aprobado sin modificarlo ni generar alternativas.
const menuFiles = import.meta.glob('../assets/menu/*.{png,jpg,jpeg,webp}', {eager:true, query:'?url', import:'default'});
const menuImage = Object.entries(menuFiles).find(([path]) => path.endsWith('/menu-ponches-nonna.png'))?.[1] || Object.values(menuFiles)[0];
const imageAlt = 'Menú de Los Ponches de Nonna con sabores, tamaños y precios';
const message = 'Hola, Los Ponches de Nonna 👋\n\nVi su menú en la página web y me gustaría realizar un pedido.';

export default function MenuSection() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const closeButton = useRef(null);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKey = event => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') {event.preventDefault();closeButton.current?.focus();}
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      trigger.current?.focus();
    };
  }, [open]);
  return <section id="menu" className="section menu-section reveal" aria-labelledby="menu-title">
    <div className="menu-heading"><span className="eyebrow">LA COCINA DE NONNA</span><h2 id="menu-title">Nuestro Menú</h2><p>Consulta nuestros sabores y presentaciones</p><span className="gold-line" aria-hidden="true" /></div>
    {menuImage && <figure className="menu-artwork">
      <button ref={trigger} className="menu-image-button" onClick={() => setOpen(true)} aria-label="Ampliar el menú oficial de Los Ponches de Nonna" aria-haspopup="dialog">
        <img src={menuImage} alt={imageAlt} loading="lazy" width="1198" height="1313" />
        <span className="menu-zoom-label"><Maximize2 size={15} aria-hidden="true" /> Ampliar menú</span>
      </button><figcaption>Selecciona la imagen para verla completa en mayor tamaño.</figcaption>
    </figure>}
    <div className="menu-contact"><a className="button dark whatsapp-cta" href={whatsappUrl(message)} target="_blank" rel="noreferrer"><WhatsAppIcon /> Pedir por WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a><a className="menu-phone" href={whatsappUrl(message)} target="_blank" rel="noreferrer" aria-label={`WhatsApp: ${WHATSAPP_DISPLAY}`}>{WHATSAPP_DISPLAY}</a></div>
    <details className="menu-prices" open={!menuImage}><summary>Sabores, tamaños y precios <span aria-hidden="true">+</span></summary>
      <div className="menu-price-grid">{products.map(product => <article key={product.id}><h3>{product.name}</h3><dl>{product.presentations.map(item => <div key={item.size}><dt>{item.size}</dt><dd>{formatPrice(item.price)}</dd></div>)}</dl></article>)}</div>
    </details>
    {open && menuImage && createPortal(<div className="menu-lightbox" onClick={() => setOpen(false)}><div className="menu-dialog" role="dialog" aria-modal="true" aria-label="Menú oficial ampliado" onClick={event => event.stopPropagation()}><button ref={closeButton} className="menu-close" onClick={() => setOpen(false)} aria-label="Cerrar menú ampliado"><X size={24} /></button><img src={menuImage} alt={imageAlt} width="1198" height="1313" /><p>Puedes ampliar con el gesto de zoom de tu navegador.</p></div></div>, document.body)}
  </section>;
}
