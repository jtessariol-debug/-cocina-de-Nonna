import React from 'react';
import {Minus, Plus} from 'lucide-react';

export default function QuantitySelector({value, onChange, id, label = 'Cantidad'}) {
  return <div className="quantity-control"><span id={`${id}-label`} className="quantity-label">{label}</span>
    <div className="quantity-stepper" role="group" aria-labelledby={`${id}-label`}>
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} disabled={value <= 1} aria-label={`Reducir ${label.toLowerCase()}`}><Minus size={16} aria-hidden="true"/></button>
      <output id={id} aria-live="polite" aria-atomic="true" aria-label={label}>{value}</output>
      <button type="button" onClick={() => onChange(value + 1)} aria-label={`Aumentar ${label.toLowerCase()}`}><Plus size={16} aria-hidden="true"/></button>
    </div>
  </div>;
}
