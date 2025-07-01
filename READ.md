# Pulga Store - Tu Tienda Online de Confianza ( equipo 2 Daniela Rodríguez)

Este repositorio contiene el código fuente de "Pulga Store", un emprendimiento online dedicado a la venta de "mini" gadgets.

---

## Implementación de Fancybox (Galería de Imágenes y Contenido Emergente)

Para mejorar la experiencia de usuario y la presentación de los productos, se ha integrado el plugin **Fancybox v5** en el proyecto.

### **¿Qué es Fancybox?**
Fancybox es un plugin de JavaScript (con estilos CSS asociados) que permite mostrar imágenes, videos, mapas y otros contenidos en ventanas emergentes responsivas (lightboxes) sobre el contenido principal de la página.

### **Funcionalidades Implementadas con Fancybox:**

* **Galería de Productos Interactiva:** Al hacer clic en las imágenes de los productos en la sección "Nuestros Productos" (en `index.html`), estas se abren en una ventana emergente de mayor tamaño, permitiendo una visualización detallada. Los usuarios pueden navegar entre las imágenes de la galería con las flechas de navegación.
* **Visualización de Mapa:** En la página de contacto (`contacto.html`), se ha añadido un botón "Encuéntranos en el Mapa" que al ser pulsado, despliega un mapa de Google Maps en una ventana emergente, facilitando a los usuarios la ubicación física de "Pulga Store" sin abandonar la página.

### **Detalles Técnicos de la Implementación:**

1.  **Carga del Plugin:** Se optó por la carga de Fancybox vía **CDN (Content Delivery Network)**, lo que asegura que los archivos necesarios (`fancybox.css` y `fancybox.umd.js`) se carguen eficientemente desde servidores externos.
    * **Ubicación en el HTML:**
        * El CSS de Fancybox se enlaza en la sección `<head>`.
        * El JavaScript de Fancybox se enlaza al final del `<body>`, **después** de los scripts de Bootstrap y **antes** del `scripts/main.js` personalizado.

2.  **Inicialización:** El plugin se inicializa en el archivo `scripts/main.js` dentro del evento `DOMContentLoaded`, asegurando que Fancybox escanee y active los elementos relevantes solo cuando la página está completamente cargada:
    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
        // ... otras funciones ...

        Fancybox.bind("[data-fancybox]", {}); // Inicialización de Fancybox
    });
    ```

3.  **Integración en el HTML:**
    * Para las imágenes de la galería, cada `<img>` fue envuelta en una etiqueta `<a>` con el atributo `data-fancybox` (ej., `data-fancybox="pulgastore-gallery"`) y `data-src` apuntando a la ruta de la imagen.
    * Para el mapa, se utilizó un enlace `<a>` con `data-fancybox`, `data-type="iframe"` y el `href` apuntando a la URL de incrustar del mapa de Google Maps.

---

