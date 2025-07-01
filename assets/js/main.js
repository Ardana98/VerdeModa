// Función para desplegar la fecha y hora actuales en un contenedor específico
function mostrarFechaYHoraEnContenedor() {
    let fechaActual = new Date();

    // Obtener las partes de la fecha y hora
    let anio = fechaActual.getFullYear();
    let mesNum = fechaActual.getMonth();
    let diaDelMes = fechaActual.getDate();
    let diaSemanaNum = fechaActual.getDay();

    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    // Arrays para nombres de día y mes (asegúrate de que estén definidos dentro o fuera de la función si es global)
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Formatear horas, minutos y segundos para que siempre tengan dos dígitos (ej. 05 en lugar de 5)
    const formatoHoras = String(horas).padStart(2, '0');
    const formatoMinutos = String(minutos).padStart(2, '0');
    const formatoSegundos = String(segundos).padStart(2, '0');

    // Construir el mensaje final
    let mensaje = `Hoy es ${diasSemana[diaSemanaNum]} ${diaDelMes} de ${meses[mesNum]} del ${anio}, y son las ${formatoHoras}:${formatoMinutos}:${formatoSegundos}.`;

    // Seleccionar el contenedor en el HTML
    // ¡Aquí usamos el ID que definimos en el HTML!
    let contenedorFechaHora = document.querySelector("#fecha-hora-actual");

    // Verificar si el contenedor existe antes de intentar actualizarlo
    if (contenedorFechaHora) {
        contenedorFechaHora.textContent = mensaje;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Llama a la función una vez inmediatamente al cargar la página
    mostrarFechaYHoraEnContenedor();

    // Configura para que se actualice cada segundo
    setInterval(mostrarFechaYHoraEnContenedor, 1000);
    // 3. ¡Inicialización de Fancybox (al final del DOMContentLoaded)!
    // Esto asegura que Fancybox escanee el HTML después de que todo el DOM esté listo
    // y antes de cualquier otra manipulación posterior del script.
    Fancybox.bind("[data-fancybox]", {
        // Opciones globales de Fancybox aquí, si las necesito.
        // Por ejemplo, para Pulgastore, podría poner un tipo de transición específico, etc.
        // Puedo dejarlo vacío si las opciones por defecto son suficientes.
    });
const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("mensaje");

    
    if (emailInput && messageInput) {

                function checkInputs() {
            if (emailInput.value.length > 0 && messageInput.value.length > 0) {

                emailInput.classList.add("is-valid");
                messageInput.classList.add("is-valid");
                emailInput.classList.remove("is-invalid");
                messageInput.classList.remove("is-invalid");
            } else {

                emailInput.classList.remove("is-valid");
                messageInput.classList.remove("is-valid");
                emailInput.classList.add("is-invalid");
                messageInput.classList.add("is-invalid");
            }
        }


        emailInput.addEventListener("input", checkInputs);
        messageInput.addEventListener("input", checkInputs);

        checkInputs();
    }





});

