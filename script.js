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
  gsap.fromTo(previousBtn, {opacity: 0}, {duration: 1, delay: 0.5, opacity: 1});
  gsap.fromTo(nextBtn, {opacity: 0}, {duration: 1, delay: 0.5, opacity: 1});
  }});
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