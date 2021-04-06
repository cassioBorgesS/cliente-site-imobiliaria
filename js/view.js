const busca = document.querySelector.bind(document)
const botoes = [busca('#um'),busca('#dois'),busca('#tres'),busca('#quatro')]
const banner = busca('.banner')
const navBanner = busca('#nav-banner')

let contador = 1
banner.onload = e => {
    botoes.forEach(botao => {
        botao.classList.remove('checado')
    })
    setTimeout(()=>banner.classList.add('imagem-banner') ,5)
    botoes[contador].classList.add('checado')
    if(contador == 3) contador = -1
    contador++
}
setInterval(()=>{
    banner.classList.remove('imagem-banner')
    banner.src = `imagens/banner-${contador}.jpg`
}, 6000)

function mudaBanner(e){
    botoes.forEach(botao => {
        botao.classList.remove('checado')
    })
    let index = botoes.findIndex(botao => botao.id === e.target.id)
    contador = index
    banner.src = `imagens/banner-${contador}.jpg`
    e.target.classList.add('checado')
}