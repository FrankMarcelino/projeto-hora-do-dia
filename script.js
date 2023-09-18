function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('iimagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Horas!`
    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = 'manha.png'
    } else if (hora >= 12 && hora < 18 ) {
        // Boa tarde
        img.src = 'tarde.png'
    } else {
        // boa noite
        img.src = 'noite.png'
    }
}


