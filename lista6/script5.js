let p = document.getElementById("nomeEmp");

p.addEventListener("click", function () {
    let nomeEmp = document.getElementById("divNomeEmp");

    let inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "Empresa aqui...";
    let bot = document.createElement("button");
    bot.textContent = "OK";

    p.style.display = "none"
    nomeEmp.appendChild(inp);
    nomeEmp.appendChild(bot);

    bot.addEventListener("click", function () {
        let nome = inp.value;

        if (nome == "") {
            p.innerHTML = "Nome da empresa"
        } else {
            p.innerHTML = nome;
        }

        p.style.display = "block";
        nomeEmp.removeChild(inp);
        nomeEmp.removeChild(bot);
    })

});

let nome = document.getElementById("nomeFun");

nome.addEventListener("click", function () {
    let nomeFun = document.getElementById("divNomeFun");

    let inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "Funcionário aqui...";
    let bot = document.createElement("button");
    bot.textContent = "OK";

    nome.style.display = "none"
    nomeFun.appendChild(inp);
    nomeFun.appendChild(bot);

    bot.addEventListener("click", function () {
        let fun = inp.value;

        if (fun == "") {
            nome.innerHTML = "Nome"
        } else {
            nome.innerHTML = fun;
        }

        nome.style.display = "block";
        nomeFun.removeChild(inp);
        nomeFun.removeChild(bot);
    });
});

let fun = document.getElementById("func");

fun.addEventListener("click", function () {
    let funca = document.getElementById("divFun");

    let inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "Função aqui...";
    let bot = document.createElement("button");
    bot.textContent = "OK";

    fun.style.display = "none"
    funca.appendChild(inp);
    funca.appendChild(bot);

    bot.addEventListener("click", function () {
        let func = inp.value;

        if (func == "") {
            fun.innerHTML = "Função desempenhada"
        } else {
            fun.innerHTML = func;
        }

        fun.style.display = "block";
        funca.removeChild(inp);
        funca.removeChild(bot);
    });
});

let img = document.getElementById("foto");

img.addEventListener("click", function () {
    let divFoto = document.getElementById("divFoto");

    let inp = document.createElement("input");
    inp.type = "file";
    inp.alt = "Perfil..." 
    let bot = document.createElement("button");
    bot.textContent = "OK";

    img.style.display = "none"
    divFoto.appendChild(inp);
    divFoto.appendChild(bot);

    bot.addEventListener("click", function () {
        let perfil = inp.files[0];
        let foto = inp.value;
        
        if (foto == "") {
            img.setAttribute("src", "img/foto.png");
        } else {
            const urlImagem = URL.createObjectURL(perfil);
            img.setAttribute("src", urlImagem);
            img.style.marginBottom = "5%";
        }

        img.style.display = "block";
        divFoto.removeChild(inp);
        divFoto.removeChild(bot);
    });
});