// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidad de Filtro de Productos ---
    const filterButtons = document.querySelectorAll('.filter-button');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.dataset.filter;

                productCards.forEach(card => {
                    const category = card.dataset.category;
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Funcionalidad del Modal de Producto (con evento de Bootstrap) ---
    const productModal = document.getElementById('productModal');

    // Escucha el evento `show.bs.modal` del modal de Bootstrap
    productModal.addEventListener('show.bs.modal', (event) => {
        // `relatedTarget` es el botón que activó el modal
        const button = event.relatedTarget; 
        
        // El botón está dentro de la card. Busca la card más cercana.
        const card = button.closest('.product-card');
        
        // Obtener datos de la card
        const imgSrc = card.querySelector('.product-card__image').src;
        const title = card.querySelector('.product-card__name').textContent;
        const price = card.querySelector('.product-card__price').textContent;
        
        // Personaliza la descripción (esto es solo un ejemplo)
        const description = `Este producto, ${title.toLowerCase()}, está elaborado con materiales sostenibles de alta calidad.`; 
        
        // Llenar el modal con la información
        const modalImage = productModal.querySelector('#modalImage');
        const modalTitle = productModal.querySelector('#modalTitle');
        const modalDescription = productModal.querySelector('#modalDescription');
        const modalPrice = productModal.querySelector('#modalPrice');
        
        if (modalImage) modalImage.src = imgSrc;
        if (modalTitle) modalTitle.textContent = title;
        if (modalDescription) modalDescription.textContent = description;
        if (modalPrice) modalPrice.textContent = price;
    });

});