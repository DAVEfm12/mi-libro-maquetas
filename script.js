document.addEventListener('DOMContentLoaded', function() {

    // Inicializar el libro
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: 400, // ancho de página
        height: 600, // alto de página
        size: "stretch",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false
    });

    // Cargar las páginas
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // Función para navegar desde el índice
    window.irAPagina = (num) => {
        pageFlip.turnToPage(num);
    };

    // Calculadora de Escala Interactiva
    window.calcular = () => {
        const real = document.getElementById('medidaReal').value;
        const escala = document.getElementById('escalaSel').value;
        if(real > 0) {
            const resultado = (real * 100) / escala;
            document.getElementById('resultadoEscala').innerHTML = 
                `En la maqueta mide: <strong>${resultado.toFixed(2)} cm</strong>`;
        }
    };

    // Mostrar/Ocultar detalles
    window.toggleDetalle = (id) => {
        const el = document.getElementById('detalle-' + id);
        el.classList.toggle('hidden');
    };
});
