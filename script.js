// Obtenemos el elemento con id "loading"
const loading = document.getElementById("loading");

// Obtenemos todos los elementos con clase "loading-circle"
const loadingCircles = document.querySelectorAll(".loading-circle");

// Utilizamos la librería GSAP para añadir una animación a los elementos "loading-circle"
gsap.from(loadingCircles, {
  duration: 1, // Duración de la animación en segundos
  opacity: 0, // Comenzamos con una opacidad de 0 (invisible)
  scale: 0.5, // Reducimos el tamaño de los elementos a la mitad
  ease: "bounce", // Utilizamos el easing "bounce" para la animación
  stagger: 0.2, // Espacio entre cada animación en segundos
  repeat: -1, // Repetimos la animación indefinidamente
  yoyo: true // La animación yoyo, es decir, se anima hacia adelante y hacia atrás
});

// Establecemos un temporizador de 5000 milisegundos (5 segundos)
setTimeout(function() {
  // Utilizamos GSAP para animar el elemento "loading"
  gsap.to(loading, {
    duration: 0.5, // Duración de la animación en segundos
    opacity: 0, // Cambiamos la opacidad a 0 (invisible)
    // Función que se ejecuta al final de la animación
    onComplete: function() {
      // Ocultamos el elemento "loading"
      loading.style.display = "none";
    }
  });
}, 5000);



function toggleDisplay(openBtnId, closeBtnId, squareId) {
  const openBtn = document.getElementById(openBtnId);
  const closeBtn = document.getElementById(closeBtnId);
  const square = document.getElementById(squareId);
  const blurElements = document.getElementById("blurElements");
  const previousBtn = square.querySelector('.previous');
  const nextBtn = square.querySelector('.next');


  
openBtn.addEventListener("click", function() {
openBtn.style.display = "none";
square.style.display = "block";
gsap.to(square, {duration: 1, x: '134.5%', y: '0%', onComplete: function() {
blurElements.classList.add("blur");
closeBtn.style.display = "block";
  
}});
});


var descripcion1 = document.querySelector(".descripcion1");

descripcion1.addEventListener("mouseenter", function() {
  gsap.to(descripcion1, {duration: 1, scale: 1.2, backgroundColor: "black", borderRadius: "20px", delay: 0.5});
});

descripcion1.addEventListener("mouseleave", function() {
  gsap.to(descripcion1, {duration: 1, scale: 1, backgroundColor: "transparent", borderRadius: "0",delay: 0.5});
});



var titulo1 = document.querySelector(".titulo1");

openBtn.addEventListener("click", function() {

  gsap.from(titulo1, {duration: 1, opacity: 0, y: -25, ease: "bounce", delay: 2});
});

var subtitulo1 = document.querySelectorAll(".subtitulo1");

openBtn.addEventListener("click", function() {
  gsap.from(subtitulo1, {duration: 1, opacity: 0, y: -25, ease: "bounce", delay: 2.5}); 
});

var info = document.querySelectorAll(".info");

openBtn.addEventListener("click", function(){

  gsap.from(info, {duration: 1, opacity: 0, y: -25, ease: "bounce", delay: 3.5});
});

var socialIcons = document.querySelector(".social-icon");

openBtn.addEventListener("click", function(){

  gsap.from(socialIcons, {
    duration: 1,
    opacity: 0,
    y: -25,
    ease: "bounce",
    delay: 4
  });
});

const footer1 = document.querySelector('.footer1');

openBtn.addEventListener("click", function(){
  gsap.from(footer1, {duration: 1, opacity: 0, y: 25, ease: "power2", delay: 4.5});
});




var playButton = document.querySelector(".music-button");
var audio = document.querySelector("#audio");

playButton.addEventListener("click", function() {
  playButton.style.display = "none";
  audio.style.display = "block";
  closeButton.style.display = "block";
  
});

var closeButton = document.querySelector("#close-button");
var audio = document.querySelector("#audio");

closeButton.addEventListener("click", function() {
  playButton.style.display = "block";
  audio.style.display = "none";
  closeButton.style.display = "none";
});

  
  closeBtn.addEventListener("click", function() {
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  gsap.to(square, {duration: 0.5, x: '-134.5%', y: '0%'});
  blurElements.classList.remove("blur");
  });
  }
  
  toggleDisplay("openBtn", "closeBtn", "square");
  toggleDisplay("openBtn2", "closeBtn2", "square2");
  toggleDisplay("openBtn3", "closeBtn3", "square3");




const carousel = document.querySelector("#carousel-img");
const squares = carousel.querySelectorAll(".square-item");
const previousButton = carousel.querySelector(".previous");
const nextButton = carousel.querySelector(".next");

let currentIndex = 0;

function showSquare(index) {
  squares.forEach((square, i) => {
    square.style.display = "none";
  });
  squares[index].style.display = "block";
}

previousButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = squares.length - 1;
  }
  showSquare(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= squares.length) {
    currentIndex = 0;
  }
  showSquare(currentIndex);
});

showSquare(currentIndex);



const nombre = document.querySelector('.nombre');

const animation = gsap.from(nombre, {
duration: 3,
opacity: 0,
scale: 0.5,
ease: 'bounce'
});

nombre.addEventListener('mouseenter', () => {
animation.reverse(1);
});

nombre.addEventListener('mouseleave', () => {
animation.play();
});
