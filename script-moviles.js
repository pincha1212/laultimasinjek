const toggleBtn = document.querySelector('.toggle-btn');
const botones = document.querySelectorAll('.boton');
let isOpen = false;

toggleBtn.addEventListener('click', function() {
  if (!isOpen) {
    botones.forEach(boton => boton.style.display = 'block');
  } else {
    botones.forEach(boton => boton.style.display = 'none');
  }
  isOpen = !isOpen;
});
