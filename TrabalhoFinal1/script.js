

let table = document.getElementById("table");

let cartela = []

function geraCartela() {
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            
            let cont = Math.floor(Math.random() * 50) + 1;
            let url = `https://pokeapi.co/api/v2/pokemon/${cont}`;

            if (!cartela.includes(cont)) {
                cartela.push(cont)

                p = new Promise(() => {
                    fetch(url)
                    .then((resposta) => {
                        return resposta.json()
                    })
                    .then((pokemon) => {
                        
                        let id = (i+1) + "-" + (j+1);
                        
                        if (id != "2-2") {
        
                            let cel = document.getElementById(id);
                
                            sprite = pokemon.sprites.front_default;
                
                            let poke = document.createElement("img");
                            poke.setAttribute("src", sprite);
                
                            cel.appendChild(poke);
                        }               
                
                    })
                    .catch((erro) => {
                        return erro;
                    })
                }) 
            }else {
                j--;
                continue;
            }

        }
    }
}

geraCartela()

let bot1 = document.getElementById("next");

let pokeSorted = [];
let poke;


bot1.addEventListener("click", function() {
    
    let inc = false;
    
    bot1.innerHTML = "Próximo";

    do {
        poke = Math.floor(Math.random() * 50) + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    
        if (!pokeSorted.includes(poke)) {
            pokeSorted.push(poke)
            inc = true;
    
            p = new Promise(() => {
                fetch(url)
                .then((resposta) => {
                    return resposta.json()
                })
                .then((pokemon) => {
                    
                    let img = document.getElementById("pokeSort");
                    img.style.border = "1px solid";
    
                    sprite = pokemon.sprites.front_default;
    
                    img.setAttribute("src", sprite);
            
                })
                .catch((erro) => {
                    return erro;
                })
            }) 
        }
        
    } while (inc == false);

})

let cells = 0;
let contBot = 0;

let cell1 = document.getElementById("1-1");
let cell2 = document.getElementById("1-2");
let cell3 = document.getElementById("1-3");
let cell4 = document.getElementById("2-1");
let cell5 = document.getElementById("2-3");
let cell6 = document.getElementById("3-1");
let cell7 = document.getElementById("3-2");
let cell8 = document.getElementById("3-3");

cell1.addEventListener("click", ()=>checaPoke(cell1));
cell2.addEventListener("click", ()=>checaPoke(cell2));
cell3.addEventListener("click", ()=>checaPoke(cell3));
cell4.addEventListener("click", ()=>checaPoke(cell4));
cell5.addEventListener("click", ()=>checaPoke(cell5));
cell6.addEventListener("click", ()=>checaPoke(cell6));
cell7.addEventListener("click", ()=>checaPoke(cell7));
cell8.addEventListener("click", ()=>checaPoke(cell8));

function checaPoke(cell) {

    if (cell.style.backgroundColor != "#ff03038a") {
        cells++;
    }

    cell.style.backgroundColor = "#ff03038a";
    
    if (cells == 8) {
        
        let bots = document.getElementById("bots");

        bot1.remove();

        let bot2 = document.createElement("button");
        bot2.innerHTML = "Bingo!!!";

        bot2.addEventListener("click", function () {

            let ganhar = 0;

            for (let i = 0; i < cartela.length; i++) {

                if(pokeSorted.includes(cartela[i]))
                    ++ganhar;

            }

            if (ganhar == 9) {
                alert("Você ganhou!!!");
            }else {
                alert("Você perdeu, quem sabe na próxima");
            }
            location.reload();
        });

        bots.appendChild(bot2);
    }

}