let ativa = document.getElementById("ativa");
ativa.addEventListener("click", function() {
    let tr = document.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        if (i % 2 == 0 && i != 0) {
            tr[i].style.backgroundColor = "rgba(0, 0, 0, 0.301)";
        }
    }
});

let desativa = document.getElementById("desativa");
desativa.addEventListener("click", function() {
    let tr = document.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        tr[i].style.backgroundColor = "rgba(0,0,0, 0)";
    }
});