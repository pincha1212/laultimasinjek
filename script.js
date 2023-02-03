//boton 1 abrir

document.getElementById("openBtn").addEventListener("click", function(){
document.getElementById("openBtn").style.display = "none";
document.getElementById("square").style.display = "block";
document.getElementById("closeBtn").style.display = "block";
document.getElementById("blurElements").classList.add("blur");
});

//boton 1 cerrar

document.getElementById("closeBtn").addEventListener("click", function(){
document.getElementById("openBtn").style.display = "block";
document.getElementById("square").style.display = "none";
document.getElementById("closeBtn").style.display = "none";
document.getElementById("blurElements").classList.remove("blur");
});

//boton 2 abrir

document.getElementById("openBtn2").addEventListener("click", function(){
  document.getElementById("openBtn2").style.display = "none";
  document.getElementById("square2").style.display = "block";
  document.getElementById("closeBtn2").style.display = "block";
  document.getElementById("blurElements").classList.add("blur");
  });
  
  //boton 2 cerrar
  
  document.getElementById("closeBtn2").addEventListener("click", function(){
 
  document.getElementById("openBtn2").style.display = "block";
  document.getElementById("square2").style.display = "none";
  document.getElementById("closeBtn2").style.display = "none";
  document.getElementById("blurElements").classList.remove("blur");
  });
  
//boton 3 abrir

document.getElementById("openBtn3").addEventListener("click", function(){
  document.getElementById("openBtn3").style.display = "none";
  document.getElementById("square3").style.display = "block";
  document.getElementById("closeBtn3").style.display = "block";
  document.getElementById("blurElements").classList.add("blur");
  });
  
  //boton 3 cerrar
  
  document.getElementById("closeBtn3").addEventListener("click", function(){
    document.getElementById("openBtn3").style.display = "block";
  document.getElementById("square3").style.display = "none";
  document.getElementById("closeBtn3").style.display = "none";
  document.getElementById("blurElements").classList.remove("blur");
  });
  


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
