import React from 'react';
import {Flower2,Heart,Leaf,Gift} from 'lucide-react';
const items=[[Flower2,'El auténtico sabor de la Rosa de Sarón'],[Heart,'Receta casera 100% artesanal'],[Leaf,'Ingredientes de calidad'],[Gift,'Ideal para regalar y compartir']];
export default function Features(){return <section className="features reveal" aria-label="Nuestra esencia">{items.map(([Icon,text])=><div key={text}><Icon size={26} strokeWidth={1}/><p>{text}</p></div>)}</section>}
