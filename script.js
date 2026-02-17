// Función para ocultar la portada y mostrar el contenido
function entrarAlLibro() {
    const portada = document.getElementById('portada');
    const contenido = document.getElementById('libro-content');
    
    portada.classList.add('vh-100-hide');
    setTimeout(() => {
        portada.classList.add('d-none');
        contenido.classList.remove('d-none');
    }, 800);
}

// Navegación entre capítulos
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Obtener el ID de la sección a mostrar
        const sectionId = this.getAttribute('data-section');
        
        // Ocultar todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('d-none');
        });
        
        // Mostrar la sección seleccionada
        document.getElementById('section-' + sectionId).classList.remove('d-none');
        
        // Actualizar estado activo en el menú
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
