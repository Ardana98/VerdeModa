Proyecto: VerdeModa 🌿🛍️
# Descripción General del Proyecto
VerdeModa es una plataforma web de comercio electrónico (e-commerce) simulada. El objetivo principal es ofrecer una experiencia de usuario intuitiva y visualmente atractiva.

En esta nueva versión, el proyecto ha sido migrado y reconstruido utilizando Bootstrap 5.3.7. Esto ha permitido crear una interfaz moderna y completamente responsiva, aprovechando los componentes y las utilidades del framework para asegurar que el diseño se adapte de forma correcta a cualquier dispositivo.

# Estructura de Carpetas
```
├── assets/
│   ├── css/          # Archivos CSS compilados (generados por Sass)
│   │   └── style.css
│   ├── img/          # Imágenes del proyecto (logo, hero, productos, etc.)
│   ├── js/           # Archivos JavaScript
│   └── scss/         # Archivos fuente de Sass (pre-procesador CSS)
│       ├── _variables.scss          # Variables de configuración del proyecto
│       ├── _base.scss               # Estilos base y resets
│       ├── _components.scss         
│       ├── _layout.scss             
│       ├── _bootstrap-custom.scss   # Archivo para sobrescribir variables de Bootstrap
│       └── style.scss               # Archivo principal de Sass que importa todos los demás
```


# Paleta de Colores y Estilo

La paleta de colores de la marca se ha mantenido y se ha integrado directamente en Bootstrap mediante Sass. Esto asegura una coherencia total en todos los componentes del framework.

Verde Principal ($color-primary): Representa la naturaleza y la sostenibilidad.

Color Secundario ($color-secondary): Un tono gris cálido que proporciona un contraste suave.

Tonos Oscuros ($color-dark): Para texto principal, asegurando legibilidad.

Blanco ($color-white): Para fondos limpios y texto sobre colores oscuros.

# Características Principales
Las funcionalidades del sitio se mantienen, pero su presentación visual ha sido mejorada gracias a los componentes de Bootstrap:

Catálogo de Productos: Presentación de productos en una grilla adaptable y responsiva.

Filtros por Categoría: Mejora la navegación del usuario.

Detalle de Producto (Modal): Muestra información ampliada de forma interactiva.

Diseño Responsivo: Se ha implementado de manera nativa utilizando las clases de Bootstrap.

# Implementación de Requerimientos con Bootstrap
Los requerimientos de diseño han sido implementados utilizando las clases y componentes de Bootstrap 5.3.7.

1. **Contenedor Principal**

El contenedor principal utiliza la clase .container de Bootstrap para centrar el contenido. El espaciado vertical se maneja con la utilidad my-5 y el padding interno con p-4. Para el ancho del 80% y los estilos de borde, se ha combinado una clase Sass (.main-wrapper) con las utilidades de Bootstrap border y border-secondary.

2. **Navbar (Barra de Navegación)**

La barra de navegación fue construida con el componente navbar de Bootstrap. La responsividad para dispositivos móviles se logra automáticamente con el uso del navbar-toggler y la clase navbar-expand-lg, que colapsa el menú en pantallas más pequeñas.

3. **Sección de Contenido Principal (Grilla)**

Para la sección de productos, se utilizó el sistema de grillas de Bootstrap. La estructura se basa en las clases .row y .col. La responsividad se maneja con las clases row-cols-1 row-cols-md-2 row-cols-lg-3, que ajustan el número de columnas de forma dinámica.

4. **Footer**

El pie de página es un bloque simple que utiliza las utilidades de Bootstrap para su espaciado y alineación. La clase py-3 le da padding vertical, text-center centra el texto y mt-auto lo posiciona en la parte inferior de la página.

5. **Responsividad**

La responsividad del proyecto se logra principalmente a través del sistema de grillas y las clases de utilidad de Bootstrap. Ya no se utilizan media queries de Sass para ajustar el layout, lo que hace el código más limpio y escalable. Los estilos visuales únicos se siguen definiendo en Sass, complementando al framework.

6. **Uso de Sass para Modularización y Personalización**

El proyecto utiliza Sass* para una gestión de estilos más eficiente y modular, trabajando en conjunto con Bootstrap para una personalización completa.

#### Variables Globales: Se ha definido una paleta de colores, fuentes y tamaños en el archivo _variables.scss. Estas variables no solo se usan en el código propio del proyecto, sino que también se aplican a todo el framework de Bootstrap.

####  Personalización de Bootstrap: En el archivo principal style.scss, se utiliza la regla @use para cargar los estilos de Bootstrap, sobrescribiendo sus variables por defecto con las variables del proyecto. Esto asegura una coherencia total en la tipografía y los colores de todos los componentes.

#### Estilos Adicionales: Se han creado archivos Sass específicos para personalizar el diseño de componentes de Bootstrap sin afectar la flexibilidad del framework. Por ejemplo, en _components.scss, se agregan estilos para elementos como las tarjetas de producto, mientras que en _custom.scss, se personalizan los estilos de componentes existentes (como border-radius y efectos hover en los botones). Esta separación mantiene el código limpio, escalable y fácil de mantener.

# Tecnologías Utilizadas
HTML5: Estructura del contenido.

Sass (SCSS): Preprocesador CSS para estilos modulares y mantenibles.

JavaScript: Con clases de Bootstrap para la interactividad del sitio (filtros, modal, etc.).

Bootstrap 5.3.7: Framework CSS para el diseño y la responsividad.


