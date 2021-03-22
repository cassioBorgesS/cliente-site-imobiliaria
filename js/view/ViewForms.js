class ViewForms{
    constructor(){
        throw new Error('classe View não pode ser instanciada')
    }
    static vermelho(elemento){
        elemento.style = 'background-color: rgba(235, 0, 0,0.5)'
    }
    static verde(elementos){
        elementos.forEach(elemento => elemento.style = '')
    }
    static charge(elemento){
        elemento.innerHTML = `
            <div class="flex">
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
            </div>
        `
        let botoes = document.querySelectorAll('.loading')
        let contador = 0
        setInterval(()=>{
            botoes.forEach((botao)=>{botao.classList.remove('botao-color')})
            botoes[contador].classList.add('botao-color')
            if(contador == 2) contador = -1
            contador++
        },333)
    }  
    static aceito(elemento,texto){
        elemento.innerHTML = `<p class="aceito">${texto}</p>`
    }
    static erro(elemento,texto){
        elemento.innerHTML = `<p class="rejeitado">${texto}</p>`
    }
}