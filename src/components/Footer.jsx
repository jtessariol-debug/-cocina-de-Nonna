import WhatsAppIcon from './WhatsAppIcon';
import React from 'react';
import {ArrowUpRight,Instagram} from 'lucide-react';
import {logo} from '../data/images';
import {links} from './Navbar';
import {whatsappUrl,INSTAGRAM_URL,INSTAGRAM_USERNAME,WHATSAPP_DISPLAY} from '../config/contact';
export default function Footer(){return <footer><div className="footer-main"><a className="footer-brand" href="#inicio"><img src={logo} alt="Logo oficial Los Ponches de Nonna" width="80" height="110"/><span>Los Ponches de Nonna<i>La Cocina de Nonna</i></span></a><nav aria-label="Navegación de pie de página">{links.map(([name,id])=><a href={`#${id}`} key={id}>{name}</a>)}</nav><div className="footer-social"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={16}/> @{INSTAGRAM_USERNAME} <ArrowUpRight size={14}/></a><a href={whatsappUrl()||'#pedidos'} target={whatsappUrl()?'_blank':undefined} rel="noreferrer"><WhatsAppIcon size={17}/><span>WhatsApp<strong>{WHATSAPP_DISPLAY}</strong></span> <ArrowUpRight size={14}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Los Ponches de Nonna. Todos los derechos reservados.</span><span>PONCHES ARTESANALES</span></div></footer>}
