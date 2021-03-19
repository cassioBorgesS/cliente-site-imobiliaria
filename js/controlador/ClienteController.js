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
            ClienteView.charge(this.campo_envia)
            this.cliente = new Cliente(
                this.inputs[0].value,
                this.inputs[1].value,
                this.inputs[2].value
            )
            ClienteView.verde([this.inputs])
            this._enviaCliente(this.cliente.get())
        } catch (error) {
            console.log(error)
            if(error.message == 'nome')ClienteView.vermelho(this.input_nome)
            if(error.message == 'telefone')ClienteView.vermelho(this.input_telefone)
            if(error.message == 'email')ClienteView.vermelho(this.input_email)
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
                ClienteView.aceito(this.campo_envia)
            }
            return response.json()
        }).then(result => {})
        .catch(ClienteView.erro(this.campo_envia))
    }
}