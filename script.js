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
  
    