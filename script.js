// Barra de Progreso y Revelación al Scroll
window.onscroll = function() {
    // Progreso
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    // Revelar Secciones
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
};

// Función para abrir modal de imagen
function openImg(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("myModal").style.display = "block";
}
