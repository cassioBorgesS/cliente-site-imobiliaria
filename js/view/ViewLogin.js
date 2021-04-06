class ViewLogin {
    static criaTabelas(pagina, busca){
        ViewLogin.ordenaLista(busca)
        pagina.innerHTML = ""
        let cabecalho = ['Nome','Telefone','E-mail','ID','Criado Em']
        let head = document.createElement('tr')
        let tabela = document.createElement('table')
        tabela.classList.add('tabela-contatos-clientes')
        ViewLogin.criaElementos(head,cabecalho,'th','elemento-contatos-clientes-th')
        tabela.appendChild(head)
        busca.forEach(itens => {
            const elementos =[
                itens.nome_usuario,
                itens.telefone_usuario,
                itens.email_usuario,
                itens.id,
                itens.criado_em
            ]
            const linha = document.createElement('tr')
            ViewLogin.criaElementos(linha,elementos,'td','elemento-contatos-clientes')
            tabela.appendChild(linha)
        })
        pagina.appendChild(tabela)
    }
    static criaElementos(linha, itens,tipo,classe){
        itens.forEach(elemento => {
            let campo = document.createElement(tipo)
            campo.classList.add(classe)
            campo.innerHTML = elemento
            linha.appendChild(campo)
        })
    }
    static ordenaLista(lista){
        lista.reverse()     
    }
}