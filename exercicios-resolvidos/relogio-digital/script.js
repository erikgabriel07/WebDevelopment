function atualizar() {
    const resultado = document.querySelector('div#horario')
    const horario = new Date()
    const mensagem = document.querySelector('section#mensagem')
    const image = document.querySelector('div#image')

    let verificar = horario.getHours()
    let horas = horario.getHours().toString().padStart(2, '0')
    let minutos = horario.getMinutes().toString().padStart(2, '0')
    let segundos = horario.getSeconds().toString().padStart(2, '0')
    resultado.innerHTML = `${horas}:${minutos}.${segundos}`


    if (verificar >= 6 && verificar < 12) {
        mensagem.innerHTML = 'Bom dia! Que você tenha um ótimo dia!'
        image.style.backgroundImage = 'url(imgs/amanhecer.jpg)'
    } else if (verificar >= 12 && verificar < 18) {
        mensagem.innerHTML = 'Boa tarde! Espero que seu dia esteja indo bem!'
        image.style.backgroundImage = 'url(imgs/tarde.jpg)'
    } else if (verificar >= 18 || verificar < 6) {
        mensagem.innerHTML = 'Boa noite! Que amanhã seja melhor que hoje!'
        image.style.backgroundImage = 'url(imgs/estrelado.avif)'
    }

}



setInterval(atualizar, 1000)
atualizar()