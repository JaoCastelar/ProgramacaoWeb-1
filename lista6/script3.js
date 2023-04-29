let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    const text = document.getElementById("text");
    let table = document.getElementById("table");

    let row = table.insertRow();

    console.log(table.rows.length);

    let risk = document.createElement("i");
    risk.classList = 'fa-regular fa-circle';
    risk.style.marginLeft = '5%';

    let trash = document.createElement("i");
    trash.classList = 'fa-solid fa-trash';
    trash.style.marginRight = '5%';

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    cell1.appendChild(risk);
    cell2.innerHTML = text.value;
    cell3.appendChild(trash);

    let count = false;

    risk.addEventListener("click", function () {

        if (count == false) {
            cell2.style.textDecoration = 'line-through';
            risk.classList = 'fa-solid fa-circle-check';
            count = true;
        }else {
            cell2.style.textDecoration = 'none';
            risk.classList = 'fa-regular fa-circle';
            count = false;
        }
    });

    trash.addEventListener("click", function () {
        row.remove();
    });

});