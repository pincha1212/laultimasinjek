// Función para mostrar u ocultar botones "toggle-btn"
function toggleAll() {
    var botones = document.querySelectorAll(".toggle-btn");
    for (var i = 0; i < botones.length; i++) {
    botones[i].classList.toggle("show");
    }
    }
    
    // Agregar evento click al botón "toggle-all"
    document.querySelector(".toggle-all").addEventListener("click", toggleAll);
    
