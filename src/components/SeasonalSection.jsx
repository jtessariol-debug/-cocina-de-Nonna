import WhatsAppIcon from './WhatsAppIcon';
import React from 'react';
import {ArrowUpRight} from 'lucide-react';
import {christmas} from '../data/images';
export default function SeasonalSection(){return <section className="seasonal reveal"><div className="seasonal-copy"><span className="eyebrow">EL DETALLE MÁS ESPECIAL</span><h2>Regala algo<br/>hecho con <em>amor.</em></h2><p>Un ponche artesanal para llevar a la mesa o regalar en Navidad. Consulta las opciones disponibles y prepara tu pedido con nosotros.</p><a className="button gold" href="#pedidos"><WhatsAppIcon/> Haz tu pedido <ArrowUpRight size={16}/></a><span className="seasonal-note">Un detalle para compartir en familia.</span></div><img src={christmas} alt="Botellas de Nonna vestidas con lazos para regalar en Navidad" loading="lazy" width="720" height="1280"/></section>}
