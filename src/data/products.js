import pistacho from '../assets/products/pistacho.webp';
import tradicional from '../assets/products/tradicional.webp';
import amaretto from '../assets/products/amaretto.webp';
import nutella from '../assets/products/nutella.webp';
import verdeNavidad from '../assets/products/verde-navidad.webp';
import chocolateDubai from '../assets/products/chocolate-dubai.webp';
// Menú oficial. Precios en pesos dominicanos (DOP).
const presentations = (small, large) => [{size:'350 ml',price:small},{size:'750 ml',price:large}];
export const formatPrice = price => `RD$${price.toLocaleString('en-US')}`;
export const products = [
  {id:'pistacho',name:'Pistacho',image:pistacho,width:1122,height:1402,badge:'',presentations:presentations(975,1275)},
  {id:'tradicional',name:'Tradicional',image:tradicional,width:1198,height:1313,badge:'',presentations:presentations(875,1175)},
  {id:'amaretto',name:'Amaretto',image:amaretto,width:1122,height:1402,badge:'',presentations:presentations(875,1175)},
  {id:'nutella',name:'Nutella',image:nutella,width:1122,height:1402,badge:'',presentations:presentations(875,1175)},
  {id:'verde-navidad',name:'Verde Navidad',image:verdeNavidad,width:1122,height:1402,badge:'Edición Navideña',presentations:presentations(975,1275)},
  {id:'chocolate-dubai',name:'Chocolate Dubai',image:chocolateDubai,width:1122,height:1402,badge:'Especialidad',presentations:presentations(975,1275)},
];
