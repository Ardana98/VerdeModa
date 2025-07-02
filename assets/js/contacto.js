document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el formulario de contacto
    const contactForm = document.querySelector('.contact-form');

    // Seleccionamos los campos de entrada
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Función para mostrar un mensaje de error
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        let errorText = formGroup.querySelector('.error-message');
        if (!errorText) {
            errorText = document.createElement('small');
            errorText.className = 'error-message';
            formGroup.appendChild(errorText);
        }
        errorText.textContent = message;
        formGroup.classList.add('error'); // Añadir clase para estilos de error (opcional)
    }

    // Función para limpiar un mensaje de error
    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorText = formGroup.querySelector('.error-message');
        if (errorText) {
            errorText.remove();
        }
        formGroup.classList.remove('error'); // Quitar clase de error
    }

    // Función para validar el formato del email
    function isValidEmail(email) {
        // Expresión regular simple para validar email
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Manejador del evento 'submit' del formulario
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío por defecto del formulario

        let isValid = true; // Bandera para controlar si el formulario es válido

        // Limpiar errores previos
        clearError(nameInput);
        clearError(emailInput);
        clearError(subjectInput);
        clearError(messageInput);

        // Validar Nombre
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'El nombre es obligatorio.');
            isValid = false;
        }

        // Validar Email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'El email es obligatorio.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Introduce un email válido.');
            isValid = false;
        }

        // Validar Asunto
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'El asunto es obligatorio.');
            isValid = false;
        }

        // Validar Mensaje
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'El mensaje es obligatorio.');
            isValid = false;
        }

        // Si el formulario es válido, simular el envío
        if (isValid) {
            // Aquí puedes recopilar los datos del formulario si los necesitaras para una simulación más avanzada
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                subject: subjectInput.value.trim(),
                message: messageInput.value.trim()
            };
            console.log('Datos del formulario a enviar (simulado):', formData);

            // Simulación de envío exitoso
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');

            contactForm.reset(); // Limpia el formulario después del "envío"
        }
    });

    // Opcional: limpiar errores al escribir
    nameInput.addEventListener('input', () => clearError(nameInput));
    emailInput.addEventListener('input', () => clearError(emailInput));
    subjectInput.addEventListener('input', () => clearError(subjectInput));
    messageInput.addEventListener('input', () => clearError(messageInput));
});