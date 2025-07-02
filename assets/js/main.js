// assets/js/main.js

// --- Funcionalidad de Filtro de Productos ---

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const productCards = document.querySelectorAll('.product-card');
    const productsGrid = document.querySelector('.products__grid'); // Para manejar la visualización del grid

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. Quitar la clase 'active' del botón actualmente activo
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // 2. Añadir la clase 'active' al botón clickeado
                button.classList.add('active');

                // 3. Obtener el filtro seleccionado
                const filter = button.dataset.filter; // 'all', 'vestuario', 'accesorios'

                // 4. Filtrar los productos
                productCards.forEach(card => {
                    const category = card.dataset.category;

                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block'; // Mostrar la tarjeta
                        // Si estás usando CSS Grid, 'block' suele funcionar bien.
                        // Para animaciones o transiciones, 'flex' o 'grid' podrían ser necesarios,
                        // pero 'block' es lo más simple para mostrar/ocultar.
                    } else {
                        card.style.display = 'none'; // Ocultar la tarjeta
                    }
                });

                // Opcional: Si los productos se reorganizan de forma extraña al ocultar,
                // considerar añadir una clase para ocultar con CSS y animaciones
                // ejemplo: card.classList.add('hidden') y card.classList.remove('hidden')
                // y enCSS: .product-card.hidden { display: none; }
                // o .product-card.hidden { opacity: 0; transform: scale(0.8); height: 0; overflow: hidden; transition: all 0.3s ease; }
            });
        });
    }

    // --- Asegurarse de que el modal de producto también funcione si está en main.js ---
    // Si el código del modal está en un archivo separado como assets/js/modal.js,
    // esta parte no es necesaria aquí.
    const productModal = document.getElementById('productModal');
    const modalCloseButton = document.querySelector('.modal__close-button');
    const productDetailButtons = document.querySelectorAll('.product-card__button');
    const modalImage = productModal ? productModal.querySelector('.modal__image') : null;
    const modalTitle = productModal ? productModal.querySelector('.modal__body h2') : null;
    const modalDescription = productModal ? productModal.querySelector('.modal__description') : null;

    if (productModal && modalCloseButton && productDetailButtons.length > 0) {
        productDetailButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const card = event.target.closest('.product-card');
                if (card) {
                    // Obtener datos del producto 
                    const imgSrc = card.querySelector('.product-card__image').src;
                    const title = card.querySelector('.product-card__name').textContent;
                    const description = "Esta es una descripción detallada del " + title + ". Elaborado con materiales sostenibles y procesos éticos."; // Puedes personalizar esto
                    const sizes = "Tallas disponibles: S, M, L, XL"; // O leer de un data-attribute si lo añades

                    // Llenar el modal con la información
                    if (modalImage) modalImage.src = imgSrc;
                    if (modalTitle) modalTitle.textContent = title;
                    if (modalDescription) modalDescription.textContent = description;
                    const modalSizes = productModal.querySelector('.modal__sizes');
                    if (modalSizes) modalSizes.textContent = sizes;

                    productModal.style.display = 'block'; // Mostrar el modal
                }
            });
        });

        modalCloseButton.addEventListener('click', () => {
            productModal.style.display = 'none'; // Ocultar el modal
        });

        // Cerrar modal al hacer clic fuera de él
        window.addEventListener('click', (event) => {
            if (event.target === productModal) {
                productModal.style.display = 'none';
            }
        });
    }

    // --- FIN de Funcionalidad de Filtro de Productos y Modal ---
});

