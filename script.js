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
    duration: 0.5, 
    opacity: 0, 
    onComplete: function() {

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
var titulo1 = document.querySelector(".titulo1");
var subtitulo1 = document.querySelectorAll(".subtitulo1");
var info = document.querySelectorAll(".info");
var socialIcons = document.querySelector(".social-icon");
var footer1 = document.querySelector('.footer1');
var musicIcon = document.querySelector ('.music-container');

descripcion1.addEventListener("mouseenter", function() {
gsap.to(descripcion1, {duration: 1, scale: 1.2, backgroundColor: "black", borderRadius: "20px", delay: 0.5});
});

descripcion1.addEventListener("mouseleave", function() {
gsap.to(descripcion1, {duration: 1, scale: 1, backgroundColor: "transparent", borderRadius: "0",delay: 0.5});
});

openBtn.addEventListener("click", function() {
gsap.from([titulo1, subtitulo1, info, socialIcons, footer1, musicIcon], {
duration: 0,
opacity: 0,
y: -25,
ease: "bounce",
stagger: 0.5,

});
});


var subtitulos = document.querySelectorAll('.subtitulo2');
var abierto = null;
const skillItems = document.querySelectorAll('.menu-desplegable2 li');

for (var i = 0; i < subtitulos.length; i++) {
  subtitulos[i].addEventListener('click', function() {
    var menuDesplegable = this.nextElementSibling;
    var lista = menuDesplegable.querySelector('ul');
    var elementosLista = menuDesplegable.querySelectorAll('li');

    if (abierto && abierto !== menuDesplegable) {
      gsap.to(abierto, {duration: 0.5, height: 0, display: 'none'});
      gsap.to(elementosLista, {duration: 0.5, opacity: 0, y: -20});
    }

    if (menuDesplegable.style.display === 'block') {
      abierto = null;
      gsap.to(menuDesplegable, {duration: 0.5, height: 0, display: 'none', onComplete: function() {
        menuDesplegable.style.display = 'none';
      }});
      gsap.to(elementosLista, {duration: 0.5, opacity: 0, y: -20});
    } else {
      abierto = menuDesplegable;
      gsap.to(menuDesplegable, {duration: 0.5, height: 'auto', display: 'block', ease: "bounce"});
      gsap.to(elementosLista, {duration: 0.5, opacity: 1, y: 0, stagger: 0.1});
    }
  });
  for (let i = 0; i < skillItems.length; i++) {
    skillItems[i].addEventListener('mouseenter', function() {
      gsap.to(skillItems, {
        duration: 0,
        scale: 1.1,
        ease: 'power1.out'
      });
    });
    skillItems[i].addEventListener('mouseleave', function() {
      gsap.to(skillItems, {
        duration: 0,
        scale: 1,
        ease: 'power1.out'
      });
    });
  }
  subtitulos[i].addEventListener('mouseenter', function() {
    gsap.to(this, {duration: 0.5, scale: 1.1, textShadow: "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #CE5937, 0 0 30px #CE5937, 0 0 40px #CE5937, 0 0 55px #CE5937, 0 0 75px #CE5937, 2px 2px 2px rgba(206,89,55,0)"});
  });
  subtitulos[i].addEventListener('mouseleave', function() {
    gsap.to(this, {duration: 0.5, scale: 1, textShadow: "none"});
  });
    
}






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







// // Botón de apertura para HTML
// const openBtnHTML = document.querySelector('.btn-html');
// // Botón de cierre para HTML
// const closeBtnHTML = document.querySelector('.close-html');
// // Cuadrado HTML
// const squareHTML = document.querySelector('.cuadrado4-html');

// const closeBtn2 = document.querySelector('#closeBtn2');

// openBtnHTML.addEventListener("click", function() {
// previousButton.style.display = 'none';
// nextButton.style.display = 'none';
// squareHTML.style.display = "block";
// closeBtnHTML.style.display = "block";
// closeBtn2.style.display = "none";
// });

// closeBtnHTML.addEventListener("click", function() {
//   squareHTML.style.display = "none";
//   closeBtnHTML.style.display = "none";
//   previousButton.style.display = 'block';
//   closeBtn2.style.display = "block";
//   nextButton.style.display = 'block';

// });


const title1 = document.querySelector('.title1');
const subtitle1 = document.querySelector('.subtitle1');
const code1 = document.querySelector('.code');
const iframe1 = document.querySelector('.iframe1');
const description1 = document.querySelector('.description1');


gsap.to(title1, { duration: 1, y: -50, opacity: 1 });
gsap.to(subtitle1, { duration: 1, y: 50, opacity: 1 });
gsap.to(code1, { duration: 1, x: -50, opacity: 1 });
gsap.to(iframe1, { duration: 1, x: 50, opacity: 1 });
gsap.to(description1, { duration: 1, y: -50, opacity: 1 });




// // Botón de apertura para CSS
// const openBtnCSS = document.querySelector('.btn-css');
// // Botón de cierre para CSS
// const closeBtnCSS = document.querySelector('.close-css');
// // Cuadrado CSS
// const squareCSS = document.querySelector('.cuadrado4-css');

// openBtnCSS.addEventListener("click", function() {
// previousButton.style.display = 'none';
// nextButton.style.display = 'none';
// squareCSS.style.display = "block";
// closeBtnCSS.style.display = "block";focus
// closeBtn2.style.display = "none";
// });

// closeBtnCSS.addEventListener("click", function() {
//   squareCSS.style.display = "none";
//   closeBtnCSS.style.display = "none";
//   previousButton.style.display = 'block';
//   nextButton.style.display = 'block';
//   closeBtn2.style.display = "block";
// });

// // Botón de apertura para JavaScript
// const openBtnJS = document.querySelector('.btn-javascript');
// // Botón de cierre para JavaScript
// const closeBtnJS = document.querySelector('.close-javascript');
// // Cuadrado JavaScript
// const squareJS = document.querySelector('.cuadrado4-javascript');

// openBtnJS.addEventListener("click", function() {
// squareJS.style.display = "block";
// closeBtnJS.style.display = "block";
// previousButton.style.display = 'none';
// nextButton.style.display = 'none';
// closeBtn2.style.display = "none";
// });

// closeBtnJS.addEventListener("click", function() {
//   squareJS.style.display = "none";
//   closeBtnJS.style.display = "none";
//   previousButton.style.display = 'block';
// nextButton.style.display = 'block';
// closeBtn2.style.display = "block";
// });





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








