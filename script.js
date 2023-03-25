function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem") // O "imagem" e "msg" corresponde ao id
    var data = new Date() // Irá pegar a data atual
    var hora = data.getHours() // Irá pegar a hora atual do sistema
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = "assets/img/manha.jpg"; // Aqui o "img" corresponde a variável
        body.style.background = 'linear-gradient(120deg, hsla(198, 93%, 62%, 1), hsla(201, 94%, 41%, 1)'; // Altera a cor de fundo de acordo com a hora do dia
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = "assets/img/tarde.jpg";
        body.style.background = 'linear-gradient(120deg, hsla(22, 94%, 47%, 1), hsla(46, 94%, 41%, 1)'; // Cor Pura: document.body.style.background = "#C77D18"
    } else {
        //Boa Noite!
        img.src = "assets/img/noite.jpg";
        body.style.background = 'linear-gradient(120deg, hsla(236, 77%, 19%, 1), hsla(212, 95%, 2%, 1)';
    }
}

