let btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    let cont1 = document.getElementById("cont1");
    let cont2 = document.getElementById("cont2");

    let a = cont1.innerHTML;
    let b = cont2.innerHTML;

    cont1.innerHTML = b;
    cont2.innerHTML = a;
});