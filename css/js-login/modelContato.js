class UserModelContato{

    constructor(){

        this._statusEmail = '';
        this._statusSenha = '';

    }

   buscaContato(email, senha){
    
    if(!email.length > 0){
        
        this._statusEmail = false
        console.log(this._statusEmail)
    }else{
        
        this._statusEmail = true

    }


    if(!senha.length > 0){
        
        this._statusSenha = false
        
    }else{
        
        this._statusSenha = true
    }
   }

   getStatusSenha(){
    return this._statusSenha
   }

   getStatusEmail(){
    return this._statusEmail
   }
}

