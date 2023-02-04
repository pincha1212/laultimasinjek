function toggleDisplay(openBtnId, closeBtnId, squareId) {
  const openBtn = document.getElementById(openBtnId);
  const closeBtn = document.getElementById(closeBtnId);
  const square = document.getElementById(squareId);
  const blurElements = document.getElementById("blurElements");

  openBtn.addEventListener("click", function() {
    openBtn.style.display = "none";
    square.style.display = "block";
    closeBtn.style.display = "block";
    blurElements.classList.add("blur");
  });

  closeBtn.addEventListener("click", function() {
    openBtn.style.display = "block";
    square.style.display = "none";
    closeBtn.style.display = "none";
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
