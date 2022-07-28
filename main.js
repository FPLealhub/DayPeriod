function carregar() {
  const msg = document.querySelector('#msg')
  const foto = document.querySelector('#foto')
  const imagem = document.querySelector('#imagem')
  const agora = new Date()
  const hora = agora.getHours()
  const body = document.body

  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora < 12) {
    //Bom Dia
    body.style.background = '#f69b60'
    imagem.src =
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
  } else if (hora < 18) {
    //Boa Tarde
    body.style.background = '#627314'
    imagem.src =
      'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  } else {
    //Boa Noite
    body.style.background = '#4e4c8d'
    imagem.src =
      'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
  }
}
