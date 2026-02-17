document.addEventListener('DOMContentLoaded', () => {
    console.log("Libro de Maquetas cargado correctamente.");

    // Efecto de scroll suave para el botón de la portada
    const scrollBtn = document.querySelector('.btn-gold');
    scrollBtn.addEventListener('click', (e) => {
        if(scrollBtn.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector('#indice');
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Animación de entrada para los ítems del índice
    const items = document.querySelectorAll('.index-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Manejo de eventos para la navegación interactiva
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Libro Interactivo Iniciado");

    // Smooth scroll para el botón de índice
    const scrollBtn = document.querySelector('a[href="#indice-interactivo"]');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#indice-interactivo').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Efecto de carga progresiva en los ítems del índice
    const caps = document.querySelectorAll('.item-cap');
    caps.forEach((cap, index) => {
        cap.style.opacity = "0";
        setTimeout(() => {
            cap.style.transition = "all 0.5s ease";
            cap.style.opacity = "1";
        }, 150 * index);
    });
});
