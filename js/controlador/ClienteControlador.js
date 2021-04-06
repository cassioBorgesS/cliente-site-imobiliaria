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
            this._enviaCliente(this.cliente.get(), this.campo_envia)
        } catch (error) {
            console.log(error)
            if(error.message == 'nome')ViewForms.vermelho(this.input_nome)
            if(error.message == 'telefone')ViewForms.vermelho(this.input_telefone)
            if(error.message == 'email')ViewForms.vermelho(this.input_email)
        }
    }
    _enviaCliente(cliente, campo){
        const raw = JSON.stringify({
            "nome": cliente[0],
            "telefone": cliente[1],
            "email": cliente[2]
        });
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status == 200)
                ViewForms.aceito(campo,'Cliente adicionado com sucesso')
                else
                ViewForms.erro(campo,'Não foi possivel adicionar o cliente')
            }
        }
        xhr.open("POST","https://api-imobiliaria.herokuapp.com/api/clientes")
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(raw)
    }
}
var api = "https://api-imobiliaria.herokuapp.com/api/clientes"