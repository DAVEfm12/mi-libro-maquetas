document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("#menu-toggle");
    const wrapper = document.querySelector("#wrapper");
    const navLinks = document.querySelectorAll("[data-target]");
    const sections = document.querySelectorAll(".content-section");
    const chapterTitle = document.querySelector("#current-chapter-title");

    // Toggle Menu lateral
    menuToggle.addEventListener("click", e => {
        e.preventDefault();
        wrapper.classList.toggle("toggled");
    });

    // Función para cambiar de sección
    function navigateTo(targetId) {
        // Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Quitar 'active' de todos los links
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        // Mostrar la sección destino
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
            
            // Actualizar título en el navbar
            const sourceLink = document.querySelector(`[data-target="${targetId}"]`);
            if (sourceLink) {
                sourceLink.classList.add("active");
                chapterTitle.textContent = sourceLink.textContent;
            }
            
            // Si estamos en móvil, cerrar el menú al hacer click
            if (window.innerWidth < 768) {
                wrapper.classList.remove("toggled");
            }

            // Scroll al inicio de la página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Event Listeners para los links del menú e índice
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("data-target");
            navigateTo(target);
        });
    });

    // Hacer que la función sea accesible globalmente para el índice
    window.navigateTo = navigateTo;
});
