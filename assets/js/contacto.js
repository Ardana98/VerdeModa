// assets/js/contacto.js

document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    // Selecciona el formulario que tiene la clase 'needs-validation'
    const form = document.querySelector('.contact-form');

    // Añade un event listener para el evento de 'submit'
    form.addEventListener('submit', event => {
        // Si el formulario no es válido
        if (!form.checkValidity()) {
            // Previene el envío del formulario
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Si es válido, se puede simular el envío
            event.preventDefault();
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            form.reset();
        }

        // Agrega la clase de Bootstrap para mostrar los estados de validación
        form.classList.add('was-validated');
    }, false);
});