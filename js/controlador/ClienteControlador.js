class ClienteController{
    constructor(){
        let busca = document.querySelector.bind(document)

        this.inputs = [
            busca('#nome-para-contato'),
            busca('#telefone-para-contato'),
            busca('#email-para-contato')
        ]
        this.campo_envia = busca('#charge')
    }
    adicionaCliente(event){
        event.preventDefault()
        try {
            ViewForms.charge(this.campo_envia)
            this.cliente = new Cliente(
                this.inputs[0].value,
                this.inputs[1].value,
                this.inputs[2].value
            )
            ViewForms.verde([this.inputs])
            this._enviaCliente(this.cliente.get())
        } catch (error) {
            console.log(error)
            if(error.message == 'nome')ViewForms.vermelho(this.input_nome)
            if(error.message == 'telefone')ViewForms.vermelho(this.input_telefone)
            if(error.message == 'email')ViewForms.vermelho(this.input_email)
        }
    }
    _enviaCliente(cliente){
        const myHeaders = {"Content-Type": "application/json"};
        const raw = JSON.stringify({
            "nome": cliente[0],
            "telefone": cliente[1],
            "email": cliente[2]
        });
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        }
        
        fetch("https://api-imobiliaria.herokuapp.com/api/clientes", requestOptions)
        .then(response => {
            if (response.status == 200) {
                ViewForms.aceito(this.campo_envia,'Cliente adicionado com sucesso')
            }
            return response.json()
        }).then(result => {})
        .catch(ViewForms.erro(this.campo_envia),'Não foi possível adicionar')
    }
}