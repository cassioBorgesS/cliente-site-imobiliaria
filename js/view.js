const busca = document.querySelector.bind(document)
const botoes = [busca('#um'),busca('#dois'),busca('#tres'),busca('#quatro')]
const listaBaner = [
    'imagens/background.png',
    'imagens/background.png',
    'imagens/background.png',
    'imagens/background.png'
]
const banner = busca('.banner')
const navBanner = busca('#nav-banner')

let contador = 0
setInterval(()=>{
    botoes.forEach(botao => {
        botao.classList.remove('checado')
    })
    botoes[contador].classList.add('checado')
    banner.src = listaBaner[contador]
    if(contador == 3) contador = -1
    contador++
}, 3000)

function mudaBanner(e){
    botoes.forEach(botao => {
        botao.classList.remove('checado')
    })
    let index = botoes.findIndex(botao => botao.id === e.target.id)
    contador = index
    e.target.classList.add('checado')
}