class UserViewContato{

    mostraNaTela(dados){

        

        if(dados.getStatusEmail()){
            let erro = document.getElementById("erroNomeUsuario")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroNomeUsuario")
            erro.classList.remove('inativo')
        }


        if(dados.getStatusSenha()){
            let erro = document.getElementById("erroSenhaEntrar")
            erro.classList.add('inativo')
        }else{
            let erro = document.getElementById("erroSenhaEntrar")
            erro.classList.remove('inativo')
        }

        

        if(dados.getStatusEmail() && dados.getStatusSenha()){
            let link = document.querySelector('#linkBtnEntrar')
            link.href= '../html/principal.html'
            
        }
    }
}