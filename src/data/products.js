import pistacho from '../assets/products/pistacho.webp';
import tradicional from '../assets/products/tradicional.webp';
import amaretto from '../assets/products/amaretto.webp';
import nutella from '../assets/products/nutella.webp';
import verdeNavidad from '../assets/products/verde-navidad.webp';
import chocolateDeNonnaImage from '../assets/products/chocolate-de-nonna.webp';
import dulceDeLecheImage from '../assets/products/dulce-de-leche.webp';
// Menú oficial. Precios en pesos dominicanos (DOP).
const presentations = (small, large) => [{size:'350 ml',price:small},{size:'750 ml',price:large}];
export const hasPrice = price => Number.isFinite(price) && price >= 0;
export const formatPrice = price => hasPrice(price) ? `RD$${price.toLocaleString('en-US')}` : 'Consultar precio';
export const formatSubtotal = (price, quantity) => hasPrice(price) ? formatPrice(price * quantity) : 'Por confirmar';
export const products = [
  {id:'pistacho',name:'Pistacho',description:'Cremoso y delicado, con el sabor característico del pistacho.',image:pistacho,width:1122,height:1402,badge:'',presentations:presentations(975,1275)},
  {id:'tradicional',name:'Tradicional',description:'La receta clásica de Nonna, cremosa y suave.',image:tradicional,width:1198,height:1313,badge:'',presentations:presentations(875,1175)},
  {id:'amaretto',name:'Amaretto',description:'Suave y aromático, con notas de almendra.',image:amaretto,width:1122,height:1402,badge:'',presentations:presentations(875,1175)},
  {id:'nutella',name:'Nutella',description:'Cremoso y chocolatoso, con un sabor intenso.',image:nutella,width:1122,height:1402,badge:'',presentations:presentations(875,1175)},
  {id:'verde-navidad',name:'Verde Navidad',description:'Una edición especial para celebrar la temporada.',image:verdeNavidad,width:1122,height:1402,badge:'Edición Navideña',presentations:presentations(975,1275)},
  {id:'chocolate-de-nonna',name:'Chocolate de Nonna',description:'Una opción cremosa de chocolate, pensada para los amantes del cacao.',image:chocolateDeNonnaImage,alt:'Chocolate de Nonna de Los Ponches de Nonna',width:1122,height:1402,badge:'Especialidad',presentations:presentations(975,1275)},
  // Pendiente confirmar precios oficiales de 350 ml y 750 ml. Sustituir null por cada importe confirmado.
  {id:'dulce-de-leche',name:'Dulce de Leche',description:'Cremoso y suave, con el característico sabor acaramelado del dulce de leche.',image:dulceDeLecheImage,alt:'Dulce de Leche de Los Ponches de Nonna',width:1122,height:1402,badge:'',presentations:presentations(null,null)},
];
