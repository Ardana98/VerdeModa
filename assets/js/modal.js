document.addEventListener('DOMContentLoaded', () => {
    const productModal = document.getElementById('productModal');
    const closeButton = productModal.querySelector('.modal__close-button');
    const detailButtons = document.querySelectorAll('.product-card__button'); // Todos los botones "Ver Detalle"

    // Función para abrir el modal
    const openModal = () => {
        productModal.style.display = 'flex'; // Cambia a flex para mostrarlo y centrarlo
        // Opcional: para transiciones suaves(opacity/transform en CSS)
        // setTimeout(() => {
        //     productModal.style.opacity = '1';
        //     productModal.querySelector('.modal__content').style.transform = 'translateY(0)';
        // }, 10);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        productModal.style.display = 'none'; // Vuelve a ocultar el modal
        // Opcional: para transiciones suaves
        // productModal.style.opacity = '0';
        // productModal.querySelector('.modal__content').style.transform = 'translateY(-50px)';
    };

    // Asignar eventos a los botones "Ver Detalle"
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aquí se podrían cargar datos del producto dinámicamente si tuviera un array de productos
            // Por ahora, solo abrimos el modal genérico
            openModal();
        });
    });

    // Asignar evento al botón de cerrar "X"
    closeButton.addEventListener('click', closeModal);

    // Asignar evento para cerrar el modal al hacer clic fuera de su contenido
    window.addEventListener('click', (event) => {
        if (event.target === productModal) {
            closeModal();
        }
    });

    // Asignar evento para cerrar con la tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && productModal.style.display === 'flex') {
            closeModal();
        }
    });
});