function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 6 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else if (hora >= 0 && hora < 6) {
        img.src = 'madrugada.png'
        document.body.style.backgroundColor = '#c45b1e'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#1C375F'
    }
}