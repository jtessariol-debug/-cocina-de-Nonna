# Los Ponches de Nonna

Sitio comercial en React, Vite, JavaScript y CSS. Slogan oficial: **La Cocina de Nonna**. Pedidos y consultas por WhatsApp, sin backend ni checkout.

## Desarrollo

```sh
npm install
npm run dev
npm run build
npm run preview
```

En PowerShell con restricciones de ejecución, usar `npm.cmd` en lugar de `npm`.

## Datos y configuración

- `src/data/products.js`: los seis sabores oficiales, descripciones, imágenes aprobadas, presentaciones y precios en RD$.
- `src/data/order.js`: genera el mensaje compartido por tarjetas y formulario con producto, tamaño, cantidad y precio unitario.
- `src/config/contact.js`: WhatsApp oficial 18492065831, número visible e Instagram.
- `src/config/commerce.js`: formas de pago, cuentas opcionales, coordinación de entregas, cobertura, tarifas, horarios, conservación y vida útil. Los campos sin confirmar permanecen vacíos y no se muestran.
- `src/data/images.js`: catálogo de imágenes de marca y galería.

## Compra por WhatsApp

Las tarjetas y el formulario permiten elegir presentación y cantidad (mínimo 1), calculan precio y subtotal e indican «Delivery no incluido». El mensaje se prepara con los datos seleccionados; el visitante lo envía en WhatsApp para confirmar disponibilidad, pago y entrega. No se almacena información en un servidor.

## Componentes y estilos

- `Products.jsx`: catálogo responsive de 3/2/1 columnas.
- `QuantitySelector.jsx`: control accesible de cantidad reutilizado en catálogo y formulario.
- `OrderSection.jsx`: nombre, sabor, tamaño, cantidad, resumen y mensaje opcional.
- `CommerceInfo.jsx`: Formas de pago, Entrega y pedidos, Conservación.
- `ProductPhotoModal.jsx`: ampliación de fotos, cierre con Escape, retorno de foco.
- `MenuSection.jsx`: menú HTML con precios oficiales y soporte de imagen completa aprobada.
- `WhatsAppIcon.jsx`: logo reconocible de WhatsApp usando react-icons/si.
- `src/styles/`: estilos generales, refinamientos, catálogo, menú e información comercial.

## Fotografías

Se conservan los originales. Las fotografías individuales aprobadas se copiaron desde Descargas; el catálogo utiliza WebP a resolución original, con lazy loading, dimensiones explícitas y object-fit contain. No se modifica el texto incrustado en fotos o etiquetas.

Chocolate de Nonna utiliza la nueva fotografía oficial «Chocolate de Nonna Luxury Advertisement.png». Se conserva una copia PNG en src/assets/products/chocolate-de-nonna.png y se sirve la versión chocolate-de-nonna.webp (1122 × 1402, aproximadamente 260 KB). La tarjeta y el lightbox comparten imagen y alt oficial. Los archivos históricos originales permanecen intactos y sin importarse al catálogo.

El PNG del menú general todavía no está disponible como archivo local. Incorporar únicamente una versión con todos los nombres vigentes en `src/assets/menu/menu-ponches-nonna.png`. Mientras tanto se muestra el menú HTML actualizado; nunca reutilizar una imagen que contradiga los nombres oficiales.

## Información pendiente de la clienta

- Archivo del menú general con nombres vigentes.
- Datos bancarios oficiales, si desea publicarlos.
- Cobertura, tarifas, horarios y condiciones exactas de delivery.
- Vida útil y recomendaciones precisas de conservación. Las dos instrucciones provisionales del encargo figuran en `commerce.js` con comentario de confirmación pendiente.
- Dominio definitivo para convertir og:image a una URL absoluta al publicar.

## Verificación de esta actualización

Build correcto. Chrome a 375, 390, 430, 768, 1024 y 1440 px: seis productos, columnas correctas, sin imágenes rotas ni desbordamientos. Se comprobaron precios, tamaños, cantidad mínima, subtotales, mensajes de seis tarjetas y seis pedidos del formulario, Instagram y modales de las fotografías publicadas. Sin excepciones JavaScript. Resultados y capturas internas en `.qa/commercial-results.json` y `.qa/commercial-*.png`.


Verificación de la imagen de chocolate: build correcto; imagen completa y sin desbordamientos en 375, 390, 430, 768, 1024 y 1440 px. Precios 350 ml/RD$975 y 750 ml/RD$1,275, cantidades, subtotal, enlace de WhatsApp y apertura/cierre del lightbox comprobados. Sin errores JavaScript. Resultados internos: .qa/chocolate-results.json.
