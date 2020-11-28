class UserModelContato{
    constructor(){
        this._nome = ""; 
        this._email = ""; 
        this._senha = ""; 
        this._confirmacaoSenha = ""; 
   }

   getNome(){
       return this._nome; 
   }
   getEmail(){
       return this._email; 
   }
   getSenha(){
       return this._senha; 
   }
   getConfirmacaoSenha(){
       return this._confirmacaoSenha; 
   }

   buscaContato(){
    let  nome = document.getElementById('nome').value
    let  email = document.getElementById('email').value
    let  senha = document.getElementById('senha').value
    let  confirmacaoSenha = document.getElementById('confirmacaoSenha').value
    if(nome.length > 0){
        document.getElementById("erro").innerHTML = "Você precisa digitar um nome válido"
    }else if(email.length > 0){
        document.getElementById("erro").innerHTML = "Você precisa digitar um email válido"
    }else if(senha.length !== confirmacaoSenha.length > 0){
        document.getElementById("erro").innerHTML = "As senhas precisam ser iguais."
    }

   }

}