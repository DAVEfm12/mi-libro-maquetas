// Alternar menú lateral en móviles
document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('wrapper').classList.toggle('toggled');
});

// Función para navegar entre secciones
function navegar(idSeccion) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.content-section');
    secciones.forEach(sec => {
        sec.classList.remove('active');
    });

    // 2. Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.add('active');
    }

    // 3. Cerrar menú en móviles tras clic
    if (window.innerWidth < 768) {
        document.getElementById('wrapper').classList.remove('toggled');
    }

    // 4. Volver al inicio de la página (scroll top)
    window.scrollTo(0, 0);
}
