function toggleSound() {
    const video = document.getElementById('invitation-video'); // Asegúrate de que este ID coincida con el del HTML
    const button = document.getElementById('sound-button');

    // Verifica el estado de 'muted' y cambia según corresponda
    if (video) { // Asegúrate de que el video exista
        if (video.muted) {
            video.muted = false; // Activa el sonido
            button.textContent = 'Desactivar sonido'; // Cambia el texto del botón
            button.classList.add('active'); // Cambia el estilo del botón
        } else {
            video.muted = true; // Desactiva el sonido
            button.textContent = 'Activar sonido'; // Cambia el texto del botón
            button.classList.remove('active'); // Reestablece el estilo del botón
        }

        // Intenta reproducir el video si está en modo "muted"
        video.play().catch(error => {
            console.error('Error al intentar reproducir el video:', error);
        });
    } else {
        console.error('El video no se encontró');
    }
}

// Establece la fecha de la boda
const weddingDate = new Date('2024-11-23T18:00:00');

function updateCountdown() {
    const now = new Date();
    const distance = weddingDate - now; // Diferencia entre la fecha de la boda y la fecha actual

    // Calcula el tiempo restante en días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualiza el contenido del DOM
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "¡Ya llegó el gran día!";
    }
}

// Actualiza el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);