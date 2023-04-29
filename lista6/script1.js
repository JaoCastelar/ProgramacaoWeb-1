let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");

let cont1 = document.getElementById("cont1");
let cont2 = document.getElementById("cont2");
let cont3 = document.getElementById("cont3");
let cont4 = document.getElementById("cont4");

let click1 = false;
let click2 = false;
let click3 = false;
let click4 = false;

div1.addEventListener("click", function (){
    if (click1 == false) {
        cont1.style.display = "block";
        click1 = true;
    } else {
        cont1.style.display = "none";
        click1 = false;
    }
});
div2.addEventListener("click", function (){
    if (click2 == false) {
        cont2.style.display = "block";
        click2 = true;
    } else {
        cont2.style.display = "none";
        click2 = false;
    }
});
div3.addEventListener("click", function (){
    if (click3 == false) {
        cont3.style.display = "block";
        click3 = true;
    } else {
        cont3.style.display = "none";
        click3 = false;
    }
});
div4.addEventListener("click", function (){
    if (click4 == false) {
        cont4.style.display = "block";
        click4 = true;
    } else {
        cont4.style.display = "none";
        click4 = false;
    }
});