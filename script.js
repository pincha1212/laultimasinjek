document.querySelector(".custom-button").addEventListener("click", function() {
    document.querySelector("#square").style.display = "block";
    document.querySelector(".custom-button").style.display = "none";
    });
    
    document.querySelector("#closeBtn").addEventListener("click", function() {
    document.querySelector("#square").style.display = "none";
    document.querySelector(".custom-button").style.display = "block";
    });