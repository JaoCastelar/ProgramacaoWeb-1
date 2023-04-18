let liga = document.getElementById("liga");

let desliga = document.getElementById("desliga");

liga.addEventListener("click", function(){
    let img = document.getElementById("img");

    img.setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif")
});

desliga.addEventListener("click", function(){
    let img = document.getElementById("img");

    img.setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif")
});