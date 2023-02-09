const loading = document.getElementById("loading");
const loadingCircles = document.querySelectorAll(".loading-circle");

gsap.from(loadingCircles, {
  duration: 1,
  opacity: 0,
  scale: 0.5,
  ease: "bounce",
  stagger: 0.2,
  repeat: -1,
  yoyo: true
});

setTimeout(function() {
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

descripcion1.addEventListener("mouseenter", function() {
  gsap.to(descripcion1, {duration: 1, scale: 1.2, backgroundColor: "black", borderRadius: "20px"});
});

descripcion1.addEventListener("mouseleave", function() {
  gsap.to(descripcion1, {duration: 1, scale: 1, backgroundColor: "transparent", borderRadius: "0"});
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

var playButton = document.querySelector(".music-button");
var audio = document.querySelector("#audio");

playButton.addEventListener("click", function() {
  playButton.style.display = "none";
  audio.style.display = "block";
  closeButton.style.display = "block";
  gsap.from(audio, {duration: 2, opacity: 1, y: 0, ease: "bounce",delay: 2});
});

var closeButton = document.querySelector("#close-button");
var audio = document.querySelector("#audio");

closeButton.addEventListener("click", function() {
  playButton.style.display = "block";
  audio.style.display = "none";
  closeButton.style.display = "none";
  gsap.to(audio, {duration: 1, opacity: 0, y: 0, ease: "bounce", delay:2});
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

//ANIMACIONES FOR GSAP

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
