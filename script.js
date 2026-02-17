// Toggle Sidebar
document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('wrapper').classList.toggle('toggled');
});

// Navegación de secciones
function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.remove('active'));

    const activeSection = document.getElementById(id);
    activeSection.classList.add('active');
    
    // Scroll al inicio
    window.scrollTo({top: 0, behavior: 'smooth'});

    // Marcar activo en el sidebar
    const links = document.querySelectorAll('.list-group-item');
    links.forEach(l => l.classList.remove('active'));
    // (Opcional: lógica para marcar el link específico)
}

// Barra de progreso de lectura
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};

// Buscador de Capítulos
document.getElementById('chapterSearch').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let links = document.querySelectorAll('#sidebarMenu .list-group-item');
    
    links.forEach(link => {
        let text = link.textContent.toLowerCase();
        link.style.display = text.includes(filter) ? "" : "none";
    });
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    showSection('portada');
});
