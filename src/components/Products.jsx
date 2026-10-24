import React, {useCallback, useRef, useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import ProductPhotoModal from './ProductPhotoModal';
import {products, formatPrice} from '../data/products';
import {whatsappUrl} from '../config/contact';
import '../styles/products.css';

function ProductCard({product, onOpen}) {
  const [size, setSize] = useState(product.presentations[0].size);
  const selected = product.presentations.find(item => item.size === size);
  const message = `Hola, Los Ponches de Nonna 👋\n\nMe gustaría ordenar:\n\n${product.name}\nPresentación: ${selected.size}\nPrecio: ${formatPrice(selected.price)}\n\n¿Está disponible?`;
  return <article className="catalog-product" aria-labelledby={`product-${product.id}`}>
    <button className="catalog-photo" onClick={event => onOpen(product, event.currentTarget)} aria-label={`Ampliar fotografía de ${product.name}`} aria-haspopup="dialog">
      <img src={product.image} alt={`Fotografía oficial de ${product.name}, Los Ponches de Nonna`} width={product.width} height={product.height} loading="lazy" decoding="async" />
    </button>
    <div className="catalog-content">
      <div className="catalog-title"><h3 id={`product-${product.id}`}>{product.name}</h3>{product.badge && <span className="catalog-badge">{product.badge}</span>}</div>
      <dl className="catalog-prices">{product.presentations.map(item => <div key={item.size}><dt>{item.size}</dt><dd>{formatPrice(item.price)}</dd></div>)}</dl>
      <div className="catalog-selection"><label htmlFor={`size-${product.id}`}>Presentación</label><select id={`size-${product.id}`} value={size} onChange={event => setSize(event.target.value)}>{product.presentations.map(item => <option key={item.size} value={item.size}>{item.size}</option>)}</select><span className="catalog-selected-price" aria-live="polite" aria-atomic="true">{formatPrice(selected.price)}</span></div>
      <a className="button dark whatsapp-cta catalog-order" href={whatsappUrl(message)} target="_blank" rel="noreferrer" aria-label={`Pedir ${product.name} de ${selected.size} por WhatsApp`}><WhatsAppIcon size={18}/> Pedir por WhatsApp <ArrowUpRight size={15} aria-hidden="true"/></a>
    </div>
  </article>;
}

export default function Products() {
  const [active, setActive] = useState(null);
  const returnFocus = useRef(null);
  const close = useCallback(() => setActive(null), []);
  function open(product, trigger) {returnFocus.current = trigger;setActive(product);}
  return <section id="ponches" className="section products catalog-section reveal" aria-labelledby="products-title">
    <div className="section-heading"><div><span className="eyebrow">LA COCINA DE NONNA</span><h2 id="products-title">Nuestros Ponches</h2></div><p>Encuentra tu favorito</p></div>
    <div className="catalog-grid">{products.map(product => <ProductCard key={product.id} product={product} onOpen={open}/>)}</div>
    {active && <ProductPhotoModal product={active} onClose={close} returnFocus={returnFocus.current}/>}
  </section>;
}
