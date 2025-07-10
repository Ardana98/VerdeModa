Proyecto: VerdeModa 🌿🛍️
# Descripción General del Proyecto

VerdeModa es una plataforma web de comercio electrónico (e-commerce) simulada, diseñada para showcasing productos de moda sostenible y ecológica. El objetivo principal es ofrecer una experiencia de usuario intuitiva y visualmente atractiva, destacando el compromiso con la sostenibilidad a través de su diseño y funcionalidad.

En esta versión del proyecto, el enfoque se ha centrado en la implementación de un diseño basado en el modelo de cajas (box model) de CSS, ajustando los elementos de la interfaz para que se adapten de forma correcta y responsiva a diferentes tamaños de pantalla, siguiendo un prototipo de diseño específico.

# Estructura de Carpetas

El proyecto está organizado de manera modular y lógica para facilitar la navegación y el mantenimiento del código. En esta rama, los archivos Sass (.scss) han sido actualizados para reflejar los nuevos requerimientos de diseño.

```Fragmento de código
├── assets/
│   ├── css/          # Archivos CSS compilados (generados por Sass)
│   │   └── style.css
│   ├── img/          # Imágenes del proyecto (logo, hero, productos, etc.)
│   ├── js/           # Archivos JavaScript
│   └── scss/         # Archivos fuente de Sass (pre-procesador CSS)
│       ├── _variables.scss      # Variables de configuración (colores, fuentes, espaciados, breakpoints)
│       ├── _base.scss        # Estilos base y resets
│       ├── _components.scss  # Estilos para componentes reutilizables (botones, tarjetas)
│       ├── _layout.scss      # Estructura y diseño de secciones principales (header, hero, footer)
│       └── style.scss        # Archivo principal de Sass que importa todos los demás
├── index.html        # Página principal del sitio
└── README.md        # Este archivo de documentación
```

# Paleta de Colores y Estilo

La selección de colores busca equilibrar la temática de sostenibilidad con un diseño moderno y fresco.

Verde Principal ($color-primary): Representa la naturaleza y la sostenibilidad.

Color Secundario ($color-secondary): Un tono beige/gris cálido (#F5DEB3) que proporciona un contraste suave.

Tonos Oscuros ($color-dark): Para texto principal y fondo del footer, asegurando legibilidad.

Blanco ($color-white): Para fondos limpios y texto sobre colores oscuros.

Los colores de fondo para el header ($color-header-bg) y el footer ($color-footer-bg) han sido definidos específicamente para cumplir con los requerimientos de contraste del nuevo diseño.

# Características Principales

Las funcionalidades principales del sitio se mantienen, pero su presentación visual ha sido completamente ajustada a las especificaciones del prototipo:

Catálogo de Productos: Presentación de productos en una grilla adaptable.

Filtros por Categoría: Mejora la navegación del usuario.

Detalle de Producto (Modal): Muestra información ampliada de forma interactiva.

Botón de Contacto: Facilita la comunicación con los usuarios.

Diseño Responsivo: Se ha implementado una estrategia de diseño responsivo robusta, ajustando el modelo de cajas en diferentes tamaños de pantalla.

# Implementación de Requerimientos (Box Model)

Para esta tarea, se han aplicado las siguientes especificaciones de diseño:

## 1-Caja del Contenedor Principal:

El contenedor principal (.container) **ocupa el 80% del ancho del viewport (80vw), centrado con **margin: 0 auto;**.

Se ha añadido un **borde de 1px ($color-border-light-gray) y un padding de 20px** para separar el contenido de los bordes.

## 2- Header:

Se ha definido con un **padding de 10px** en todos los lados, asegurando un espacio uniforme para su contenido.

Su fondo de **color ($color-header-bg)** se extiende a lo largo de todo el ancho de la pantalla, mientras que su contenido se mantiene dentro de un **.container**.

## 3- Footer:

Es un contenedor con una **altura fija de 100px**.

Tiene un **padding de 20px y un background-color ($color-footer-bg) que contrasta con el header**.

Se ha añadido un **margin-top de 50px para separarlo claramente del contenido principal**.

## 4- Botones:

Utilizan el modelo de cajas con **padding interno y un border definido**.

Se utiliza **gap** en los contenedores flex para mantener una separación consistente entre ellos.

Las esquinas se han **redondeado con border-radius**, y se ha agregado un **efecto hover** para una mejor interacción.

## 5- Responsividad:

Se han utilizado media queries (@media) para ajustar el modelo de cajas en pantallas más pequeñas.

El padding y el margin de secciones clave como el header, footer y la grilla de productos se reducen para optimizar el espacio en dispositivos móviles.

El layout de las grillas (grid-template-columns) y los flexbox (flex-direction) se han adaptado para apilar los elementos verticalmente cuando es necesario.

# Tecnologías Utilizadas

HTML5: Estructura del contenido.

Sass (SCSS): Preprocesador CSS para estilos modulares y mantenibles.

JavaScript: Para la interactividad del sitio (filtros, modal, etc.).

