// Selectores de elementos HTML
const openBtn = document.querySelector('#openBtn');
const openBtn2 = document.querySelector('#openBtn2');
const openBtn3 = document.querySelector('#openBtn3');
const closeBtn = document.querySelector('#closeBtn');
const closeBtn2 = document.querySelector('#closeBtn2');
const square = document.querySelector('#square');
const square2 = document.querySelector('#square2');



const background = document.querySelector('#background');


openBtn.addEventListener('click', function() {
    square.style.display = 'block';
    openBtn.style.display = 'none';
    openBtn2.style.display = 'none';
    openBtn3.style.display = 'none';
    background.classList.add('blur');
  });
  
  openBtn2.addEventListener('click', function() {
    square2.style.display = 'block';
    background.classList.add('blur');
  });
  
  
  closeBtn.addEventListener('click', function() {
    square.style.display = 'none';
    openBtn.style.display = 'block';
    openBtn2.style.display = 'block';
    openBtn3.style.display = 'block';
    background.classList.remove('blur');
  });



  closeBtn2.addEventListener('click', function() {
    square2.style.display = 'none';
    background.classList.remove('blur');
  });
  