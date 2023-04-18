let env = document.getElementById("env");
env.addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    let p = document.getElementById("cont");
    let cor = document.getElementById("color").value;

    p.style.color = cor;
    p.innerHTML = nome;

});
