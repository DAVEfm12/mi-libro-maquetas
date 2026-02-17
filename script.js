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
