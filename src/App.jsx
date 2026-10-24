import React from 'react';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import MenuSection from './components/MenuSection';
import Features from './components/Features';
import Gallery from './components/Gallery';
import SeasonalSection from './components/SeasonalSection';
import Story from './components/Story';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
export default function App(){useEffect(()=>{if(!('IntersectionObserver' in window))return;const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('will-reveal');observer.observe(el)});return()=>observer.disconnect()},[]);return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Navbar/><main id="contenido"><Hero/><div className="brand-strip"><span>RECETA DE FAMILIA</span><span>✳</span><span>100% ARTESANAL</span><span>✳</span><span>HECHO CON AMOR</span><span>✳</span><span>PARA COMPARTIR</span></div><About/><Features/><Products/><MenuSection/><SeasonalSection/><Gallery/><Story/><OrderSection/></main><Footer/><WhatsAppButton/></>}
