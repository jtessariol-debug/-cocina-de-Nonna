import WhatsAppIcon from './WhatsAppIcon';
import React from 'react';
import {useEffect,useState} from 'react';
import {WHATSAPP_BASE_URL,whatsappUrl} from '../config/contact';
export default function WhatsAppButton(){const [show,setShow]=useState(false);useEffect(()=>{const update=()=>setShow(window.scrollY>450);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);const url=whatsappUrl();return url&&show?<a className="whatsapp-float" href={WHATSAPP_BASE_URL} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp: +1 (849) 206-5831"><WhatsAppIcon size={24}/><span className="whatsapp-tooltip">Escríbenos por WhatsApp</span></a>:null}
