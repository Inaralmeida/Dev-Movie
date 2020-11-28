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
    if(nome.length > 0){
        document.getElementById("erro").innerHTML = "Você precisa digitar um nome válido"
    }

   }

}