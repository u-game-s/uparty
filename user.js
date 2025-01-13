function guardarNombreYRedirigir() {
    const nombre = document.getElementById('input-nombre').value.trim();
    if (nombre) {
        // Guardar el nombre en el almacenamiento local
        localStorage.setItem('nombreJugador', nombre);
        // Redirigir a la página de la historia
        window.location.href = 'juego.html';
    }
}