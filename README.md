Proyecto: VerdeModa 🌿🛍️
📄 Descripción General del Proyecto
VerdeModa es una plataforma web de comercio electrónico (e-commerce) simulada, diseñada para showcasing productos de moda sostenible y ecológica. El objetivo principal es ofrecer una experiencia de usuario intuitiva y visualmente atractiva, destacando el compromiso con la sostenibilidad a través de su diseño y funcionalidad. Este proyecto se enfoca en las bases del desarrollo web con HTML, Sass (CSS) y JavaScript.

📁 Estructura de Carpetas
El proyecto está organizado de manera modular y lógica para facilitar la navegación y el mantenimiento del código:

```.
├── assets/
│   ├── css/          # Archivos CSS compilados (generados por Sass)
│   │   └── style.css
│   ├── img/          # Imágenes del proyecto (logo, hero, productos, etc.)
│   │   ├── hero.png
│   │   ├── logo.png
│   │   ├── producto-camiseta.png
│   │   ├── producto-lino.png
│   │   ├── producto-vestido.png
│   │   ├── producto-bolso.png
│   │   └── producto-collar.png
│   ├── js/           # Archivos JavaScript
│   │   └── main.js   # Lógica principal del sitio (filtros, modal, etc.)
│   │   └── modal.js  # ( el código del modal está separado)
│   └── scss/         # Archivos fuente de Sass (pre-procesador CSS)
│       ├── _config.scss      # Variables de configuración (colores, fuentes, espaciados)
│       ├── _base.scss        # Estilos base y resets
│       ├── _components.scss  # Estilos para componentes reutilizables (botones, tarjetas)
│       ├── _layout.scss      # Estructura y diseño de secciones principales (header, hero, footer)
│       └── style.scss        # Archivo principal de Sass que importa todos los demás
├── index.html        # Página principal del sitio
└── README.md```        # Este archivo de documentación
🎨 Paleta de Colores y Estilo
La selección de colores busca equilibrar la temática de sostenibilidad con un diseño moderno y fresco.

Verde Principal ($color-primary): Representa la naturaleza y la sostenibilidad. Se utiliza para elementos clave como el logo, títulos principales y botones de acción primarios.

Color Secundario ($color-secondary): Un tono [Ejemplo: beige/gris cálido - #F5DEB3] que proporciona un contraste suave y una sensación de calidez/neutralidad. Utilizado en botones secundarios y elementos de énfasis sutil.

Tonos Oscuros ($color-dark): Para texto principal y fondo del footer, asegurando legibilidad.

Blanco ($color-white): Para fondos limpios y texto sobre colores oscuros, manteniendo la claridad.

La sección Hero incorpora una imagen de fondo con un overlay semitransparente del $color-primary, lo que permite un impacto visual sin comprometer la legibilidad del texto principal, que se ha cambiado a $color-white para un mejor contraste.

✨ Características Principales
Catálogo de Productos: Presentación de productos con imágenes, nombres y precios.

Filtros por Categoría: Permite a los usuarios filtrar productos por "Vestuario", "Accesorios" o ver "Todos" los productos, mejorando la navegación.

Detalle de Producto (Modal): Al hacer clic en "Ver Detalle", se abre un modal con información ampliada del producto, incluyendo su descripción completa y tallas disponibles.

Botón de Contacto: El modal incluye un botón "Contactar" que simula un enlace a un formulario de contacto, facilitando la interacción del usuario.

Diseño Responsivo: Adaptabilidad a diferentes dispositivos y tamaños de pantalla para una experiencia de usuario consistente.

🛠️ Tecnologías Utilizadas
HTML5: Estructura del contenido.

Sass (SCSS): Preprocesador CSS para estilos modulares y mantenibles.

JavaScript: Para la interactividad del sitio (filtros, modal, etc.).

