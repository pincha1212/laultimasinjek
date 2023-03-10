const toggleBtn = document.querySelector(".toggle-btn"),
    botones = document.querySelectorAll(".boton");
let isOpen = !1;
toggleBtn.addEventListener("click", function() {
    isOpen ? botones.forEach(e => e.style.display = "none") : botones.forEach(e => e.style.display = "block"), isOpen = !isOpen
});
