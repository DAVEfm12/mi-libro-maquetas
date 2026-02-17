const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 550,
    height: 733,
    size: "stretch",
    showCover: true,
    usePortrait: false // Mostrar dos páginas en escritorio
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// Actualizar barra de progreso
pageFlip.on('flip', (e) => {
    const total = pageFlip.getPageCount();
    const current = e.data + 1;
    document.getElementById('progress-bar').style.width = (current / total) * 100 + "%";
});

// Calculadora de Escala (Capítulo VII)
function calcularEscala() {
    const real = document.getElementById('realSize').value;
    const res = real / 50; // Ejemplo escala 1:50
    document.getElementById('result').innerText = `En la maqueta medirá: ${res.toFixed(2)} cm`;
}

// Controles
document.getElementById('prevBtn').onclick = () => pageFlip.flipPrev();
document.getElementById('nextBtn').onclick = () => pageFlip.flipNext();
window.goTo = (n) => pageFlip.turnToPage(n);
