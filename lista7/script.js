let cont = 1
let url = `https://pokeapi.co/api/v2/pokemon/${cont}`;

let img;
let nome;
let num;
let types;

let bot1 = document.getElementById("esquerda");
let bot2 = document.getElementById("direita");

function cards(url, op) {
    p = new Promise(() => {
        fetch(url)
        .then((resposta) => {
            return resposta.json()
        })
        .then((pokemon) => {

            
            img = document.getElementById("img");
            img.setAttribute("src", pokemon.sprites.front_default);
            nome = document.getElementById("nome");
            nome.innerHTML = pokemon.name
            num = document.getElementById("num");
            num.innerHTML = "#"+pokemon.id
            types = document.getElementById("types");

            if (op == 1) {
                for (let i = 0; i < (types.childElementCount+1); i++) {
                    types.removeChild(types.lastElementChild)
                    console.log(types.childElementCount);
                }
            }

            for (let i = 0; i < pokemon.types.length; i++) {
                
                let type = pokemon.types[i].type.name;
                
                list = document.createElement("li");
                list.textContent = type;

                console.log(list.textContent);
                
                types.appendChild(list);

            }
    
        })
        .catch((erro) => {
            return erro
        })
    })
}

cards(url, 0)

bot1.addEventListener("click", () =>{
    cont -= 1;

    if (cont < 1) {
        cont = 1
    }
    
    let url = `https://pokeapi.co/api/v2/pokemon/${cont}`;

    cards(url, 1)
        
})

bot2.addEventListener("click", () =>{

    cont += 1;

    let url = `https://pokeapi.co/api/v2/pokemon/${cont}`;

    cards(url, 1)
        
})
