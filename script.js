function navegar(seccionId) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.content-section');
    secciones.forEach(sec => {
        sec.classList.add('d-none');
    });

    // 2. Mostrar la sección solicitada
    const destino = document.getElementById(seccionId);
    
    if (seccionId === 'portada') {
        document.getElementById('portada').classList.remove('d-none');
        document.getElementById('mainNav').classList.add('d-none');
        window.scrollTo(0, 0);
    } else {
        // Si no es la portada, mostramos el menú y la sección
        document.getElementById('portada').classList.add('d-none');
        document.getElementById('mainNav').classList.remove('d-none');
        destino.classList.remove('d-none');
        window.scrollTo(0, 0);
    }
}

// Inicializar el proyecto mostrando solo la portada al cargar
document.addEventListener('DOMContentLoaded', () => {
    console.log("Libro Interactivo Cargado");
});
