import hero from '../assets/hero/ponches-lazo-borgona.jpeg';
import logo from '../assets/logo/logo-nonna.jpeg';
import kitchen from '../assets/gallery/cocina-artesanal.jpeg';
import christmas from '../assets/gallery/regalos-navidad.jpeg';
const files = import.meta.glob('../assets/**/*.jpeg', {eager:true,query:'?url',import:'default'});
const descriptions = {'botellas-borgona':'Botellas de Nonna con lazos borgoña y luces cálidas','regalos-navidad':'Ponches con lazos para regalar junto al árbol de Navidad','ponche-santa-contacto':'Ponche de Nonna junto a Santa y contacto de la marca','mesa-navidad':'Ponches sobre una mesa navideña','arbol-navidad':'Botellas de Nonna al pie del árbol de Navidad','cocina-artesanal':'Composición de ponches en una cocina con utensilios de cobre','brindis-pistacho':'Botellas, copas y pistachos en una mesa','botellas-orquideas':'Botellas de Nonna junto a orquídeas blancas','promocional-nonna':'Fotografía promocional de Nonna con su identidad de marca','pistacho':'Botella de ponche de pistacho sobre madera','ponches-lazo-borgona':'Ponches de Nonna con un gran lazo borgoña'};
const galleryOrder = ['botellas-orquideas','ponches-lazo-borgona','regalos-navidad','cocina-artesanal','pistacho','brindis-pistacho','botellas-borgona','mesa-navidad','arbol-navidad','promocional-nonna','ponche-santa-contacto'];
export const gallery = Object.entries(files).filter(([path])=>!path.includes('/logo/') && !path.includes('/menu/')).map(([path,src])=>({src,key:path.split('/').pop().replace('.jpeg',''),alt:descriptions[path.split('/').pop().replace('.jpeg','')] })).sort((a,b)=>galleryOrder.indexOf(a.key)-galleryOrder.indexOf(b.key));
export {hero,logo,kitchen,christmas};
