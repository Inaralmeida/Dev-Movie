class UserViewContato{

    render(model){
        
        let  nome = document.getElementById('nome').value
        if(nome.length > 0){
            document.getElementById("erro").innerHTML = "Você precisa digitar um nome válido"
        }

        let email = model.getEmail(); 
        document.getElementById('email').value = email; 
        
        let senha = model.getSenha()
        document.getElementById('senha').value = senha; 

        let confirmacao = model.getConfirmacaoSenha()
        document.getElementById('confirmacao').value = confirmacao; 



    }
}