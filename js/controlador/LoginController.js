class LoginController{
    constructor(){
        this.body = document.querySelector('.main-login')
        this.campoLogin = document.querySelector('#email-login')
        this.campoSenha = document.querySelector('#senha-login')
        this.botaoLogin = document.querySelector('#botao-login')
    }
    realizaLogin(event){
        event.preventDefault()
        
        const raw = JSON.stringify({
            "login":this.campoLogin.value,
            "senha":this.campoSenha.value
        });

        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState)
            if(xhr.readyState === 4){
                LoginController.buscarContatos()
                localStorage.setItem("authorization",JSON.parse(xhr.response).Authorization)
                localStorage.setItem("refreshToken",JSON.parse(xhr.response).refreshToken)
            }
        }
        xhr.open('POST',"https://api-imobiliaria.herokuapp.com/api/usuario/login")
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(raw)
    }

    static buscarContatos(){
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState)
            if(xhr.readyState === 4){
                ViewLogin.criaTabelas(controller.body,JSON.parse(xhr.response))
                console.log(JSON.parse(xhr.response))
            }
        }
        xhr.open('GET',"https://api-imobiliaria.herokuapp.com/api/clientes")
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", `Bearer ${localStorage.authorization}`);
        xhr.send()
    }
}