# Los Ponches de Nonna

Sitio local en React + Vite, JavaScript y CSS, sin backend.

## Ejecutar

```sh
npm install
npm run dev
npm run build
npm run preview
```

En PowerShell con scripts restringidos, usar `npm.cmd` en lugar de `npm`.

## Editar contenido

- `src/config/contact.js`: WhatsApp e Instagram. El número 1 849 206 5831 se transcribió de la foto promocional original `WhatsApp Image 2026-10-18 at 9.13.05 PM (2).jpeg`. Si se deja vacío, los enlaces ofrecen el formulario o Instagram sin abrir enlaces rotos.
- `src/data/products.js`: sabores, descripciones, imágenes, tamaños y precios. Solo Pistacho está confirmado. Precio y tamaño vacíos no se muestran. Confirmar moneda antes de agregar un precio con su formato completo.
- `src/data/images.js`: catálogo visual y descripciones accesibles.
- `src/components/`: secciones independientes.
- `src/styles/index.css`: identidad visual y responsive.

## Selección visual

Se revisaron el logo y las 11 fotografías aportadas. No se generaron ni descargaron fotografías. Los originales permanecen intactos en la raíz.

| Original | Copia organizada | Uso |
| --- | --- | --- |
| Logo.jpeg | assets/logo/logo-nonna.jpeg | Navbar y footer; copia en public para favicon |
| 9.13.04 PM | gallery/botellas-borgona.jpeg | Galería, sabor sin identificar |
| 9.13.05 PM (1) | gallery/regalos-navidad.jpeg | Temporada y galería |
| 9.13.05 PM (2) | gallery/ponche-santa-contacto.jpeg | Galería y fuente del contacto |
| 9.13.05 PM (3) | gallery/mesa-navidad.jpeg | Galería |
| 9.13.05 PM | gallery/arbol-navidad.jpeg | Galería |
| 9.14.09 PM (1) | gallery/cocina-artesanal.jpeg | About y galería |
| 9.14.09 PM (2) | gallery/brindis-pistacho.jpeg | Galería |
| 9.14.09 PM (3) | gallery/botellas-orquideas.jpeg | Galería |
| 9.14.09 PM (4) | gallery/promocional-nonna.jpeg | Galería, composición promocional |
| 9.14.09 PM | products/pistacho.jpeg | Producto confirmado y galería |
| 9.14.10 PM | hero/ponches-lazo-borgona.jpeg | Hero, galería y copia Open Graph |

Las rutas de la tabla son relativas a `src/assets/`. Todos los originales fotográficos comienzan con `WhatsApp Image 2026-10-18 at` y terminan en `.jpeg`. Algunas piezas incluyen elementos gráficos y márgenes incrustados en el archivo original, que se conservaron.

## Datos pendientes

Precios, moneda, tamaños, otros sabores confirmados, entregas, horarios y dominio definitivo. El formulario prepara una consulta por WhatsApp; el pedido se envía cuando el visitante lo confirma en WhatsApp. No almacena datos ni confirma disponibilidad. Al publicar, configurar `og:image` con la URL absoluta del dominio definitivo.

## Refinamiento de presentación

Se ajustaron los componentes de navegación, hero, About, productos, temporada, galería, historia, pedidos, botón flotante y footer. `src/styles/refinements.css` contiene los ajustes visuales sobre los estilos existentes. `src/components/WhatsAppIcon.jsx` unifica el logo de WhatsApp usando react-icons/si. El número oficial confirmado se centraliza en `src/config/contact.js`, incluyendo su formato visible.

La galería presenta seis fotografías seleccionadas y permite ampliar a las once originales. No se reemplazó ninguna imagen ni se agregaron sabores o precios.

Verificación final: build correcto; Chrome a 375, 390, 430, 768, 1024, 1440 y 1920 px; sin imágenes rotas ni excepciones de JavaScript. Menú móvil, galería, expansión a 11 fotos y mensaje del formulario verificados. Todos los enlaces de WhatsApp usan 18492065831. Capturas de revisión en .qa/.

## Menú oficial

`src/components/MenuSection.jsx` se ubica después de Nuestros Ponches y antes de la galería. `src/styles/menu.css` define la presentación y el modal. `src/data/products.js` contiene los seis sabores y los doce precios oficiales en RD$, que también alimentan el selector de pedidos. La sección de productos mantiene únicamente fotografías identificadas, sin atribuir imágenes de Pistacho a otros sabores.

Pendiente: el PNG aprobado del menú no estaba disponible como archivo local. Guardarlo en `src/assets/menu/menu-ponches-nonna.png` permite que el componente lo incorpore automáticamente, con imagen completa y ampliación accesible. Mientras falta, los precios oficiales se muestran en HTML sin imagen sustituta. Es necesario verificar carga del archivo y modal con el PNG real. No se modificó el slogan incrustado en la imagen aprobada.

Build y navegación comprobados; precios, enlace de WhatsApp, selector de sabores y responsive verificados en Chrome a 375, 390, 430, 768, 1024, 1440 y 1920 px, sin excepciones JavaScript.

## Catálogo con fotografías individuales oficiales

La sección Nuestros Ponches muestra ahora los seis sabores en un grid de 3/2/1 columnas (escritorio/tablet/móvil). Cada producto tiene su fotografía correcta, ambos precios, selector de presentación, importe actualizado y enlace de WhatsApp con sabor, tamaño y precio. Verde Navidad conserva su nombre y lleva «Edición Navideña»; Chocolate Dubai lleva «Especialidad».

Archivos actualizados: `src/data/products.js`, `src/components/Products.jsx`. Archivos nuevos: `src/components/ProductPhotoModal.jsx`, `src/styles/products.css` y seis pares JPG/WebP en `src/assets/products/`. Los originales proceden de Descargas, con sus nombres Pistacho.jpeg, tradicional.jpeg, Amaretto.jpeg, Nutella.jpeg, Verde navidad.jpeg y Chocolate Dubai.jpeg. Se conservaron tanto en Descargas como en las copias JPG del proyecto. La foto anterior pistacho.jpeg permanece para la galería histórica; las tarjetas usan exclusivamente las nuevas WebP.

WebP a resolución original: 1.33 MB en total frente a 2.36 MB de los JPG (aproximadamente 43 % menos). Las imágenes usan contain para conservar nombre, botella y precios completos. No se retocaron los textos incrustados en las fotografías.

Verificación: build correcto. Chrome a 375, 390, 430, 768, 1024 y 1440 px: seis imágenes cargadas, sin desbordamiento y columnas correctas. Verificados los doce precios, cambio de tamaño de los seis productos, mensajes de WhatsApp y modales, foco y cierre con Escape. Sin errores JavaScript. Resultados y capturas internas en .qa/.

La integración del menú completo permanece; el PNG del menú general todavía no está presente en src/assets/menu/.
