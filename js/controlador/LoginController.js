class LoginController{
    constructor(){
        this.body = document.querySelector('.main-login')
        this.campoLogin = document.querySelector('#email-login')
        this.campoSenha = document.querySelector('#senha-login')
        this.botaoLogin = document.querySelector('#botao-login')
    }
    realizaLogin(event){
        event.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "login":this.campoLogin.value,
            "senha":this.campoSenha.value});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/api/usuario/login", requestOptions)
        .then(response => {
            return response.json()
        })
        .then(result => {
            localStorage.setItem("authorization",result.Authorization)
            localStorage.setItem("refreshToken",result.refreshToken)
        })
        .catch(error => {
        });
    }
}