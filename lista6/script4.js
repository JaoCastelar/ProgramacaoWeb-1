let btn1 = document.getElementById("btn1");

let rand = Math.floor(Math.random()*100);

console.log(rand)

btn1.addEventListener("click", function () {

    let text = document.getElementById("text").value;

    let list = document.getElementById("list");
    
    let newItem = document.createElement("li");
    
    if (text > rand) {
        newItem.textContent = `${text} é muito alto`;
    }else if (text < rand) {
        newItem.textContent = `${text} é muito baixo`;
    }else {
        newItem.textContent = `${text} é o número certo`
        newItem.style.fontWeight = "bolder";
    }


    list.appendChild(newItem);

});