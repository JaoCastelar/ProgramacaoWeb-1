let fundo = document.getElementById("fundo");
fundo.addEventListener("click", function(){

    let tit = document.getElementById("tit");
    let cont1 = document.getElementById("cont1");
    let cont2 = document.getElementById("cont2");

    let cor1 = document.getElementById("color-fundo").value;

    tit.style.backgroundColor = cor1;
    cont1.style.backgroundColor = cor1;
    cont2.style.backgroundColor = cor1;
});

let font = document.getElementById("fonte");
font.addEventListener("click", function(){

    let tit = document.getElementById("tit");
    let cont1 = document.getElementById("cont1");
    let cont2 = document.getElementById("cont2");

    let cor2 = document.getElementById("color-fonte").value;
    console.log(cor2)

    tit.style.color = cor2;
    cont1.style.color = cor2;
    cont2.style.color = cor2;
});