let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    let text = document.getElementById("text").value;
    let list = document.getElementById("list");
    
    let newItem = document.createElement("li");
    newItem.textContent = text

    list.appendChild(newItem);

});