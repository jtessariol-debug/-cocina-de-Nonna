import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {X} from 'lucide-react';

export default function ProductPhotoModal({product, onClose, returnFocus}) {
  const close = useRef(null);
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    close.current?.focus();
    const key = event => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {event.preventDefault();close.current?.focus();}
    };
    window.addEventListener('keydown', key);
    return () => {document.body.style.overflow = previous;window.removeEventListener('keydown', key);returnFocus?.focus();};
  }, [onClose, returnFocus]);
  return createPortal(<div className="product-lightbox" onClick={onClose}>
    <div className="product-dialog" role="dialog" aria-modal="true" aria-label={`Fotografía de ${product.name}`} onClick={event => event.stopPropagation()}>
      <button ref={close} className="product-modal-close" onClick={onClose} aria-label="Cerrar fotografía"><X size={24}/></button>
      <figure><img src={product.image} alt={`Fotografía oficial del ponche ${product.name} de Los Ponches de Nonna`} width={product.width} height={product.height}/><figcaption>{product.name} · Los Ponches de Nonna</figcaption></figure>
    </div>
  </div>, document.body);
}
