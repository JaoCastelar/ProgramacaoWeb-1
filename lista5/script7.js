
let nomes = ["Maria", "José", "João", "Eduardo", "Ana", "Beatriz", "Carlos", "Elisa", "Emily", "Pedro"];

let add = document.getElementById("add");
add.addEventListener("click", function(){
    let table = document.getElementById("table");
    let row = table.insertRow(table.rows.length);

    let rand = Math.floor(Math.random() * 10);

    let nome = row.insertCell(0);
    let num = row.insertCell(1);
    
    nome.innerHTML = nomes[rand];
    num.innerHTML = rand;

});

let del = document.getElementById("del");
del.addEventListener("click", function(){
    var table = document.getElementById("table");
    var rowCount = table.rows.length;

    if (rowCount > 1) {
        table.deleteRow(rowCount - 1);
    }

});