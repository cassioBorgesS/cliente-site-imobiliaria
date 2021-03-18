class Cliente {
    constructor(nome,telefone,email){
        this.verifica([nome,telefone,email])
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }
    verifica(inputs){
        let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        
        if(inputs[0].length < 3){
            throw new Error('nome')
        }
        if(inputs[1].length < 11){
            throw new Error('telefone')
        }
        if(!regexEmail.test(inputs[2])){
            throw new Error('email')
        }
    }
    get(){
        return [this.nome,this.telefone,this.email]
    }
}