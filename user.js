function Redirigir() {
    const nombre = document.getElementById('input-nombre').value.trim();
    if (nombre) {
        // Redirigir a la página de la historia
        window.location.href = 'juego.html';
    }
}
