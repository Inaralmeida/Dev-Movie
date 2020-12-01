class UserViewLocalizacao{
    render (model){
 
        let  logradouro = model.getLogradouro()
         document.getElementById('logradouro').value = logradouro; 

        let bairro = model.getBairro()
        document.getElementById('bairro').value = bairro; 
        
        let localidade = model.getLocalidade()
        document.getElementById('estado').value = localidade; 

        let uf = model.getUf()
        document.getElementById('UF').value = uf; 

 

    }
}

class View{

    liberaBotao(dados){
        console.log(dados)

        if(dados.getNome()){
            let erro = document.getElementById("erroNomeCad")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroNomeCad")
            erro.classList.remove('inativo')
        }



        if(dados.getEmail()){
            let erro = document.getElementById("erroEmailCad")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroEmailCad")
            erro.classList.remove('inativo')
        }


        if(dados.getSenha()){
            let erro = document.getElementById("erroSenhaCad")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroSenhaCad")
            erro.classList.remove('inativo')
        }


        if(dados.getSenha2()){
            let erro = document.getElementById("erroSenha2Cad")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroSenha2Cad")
            erro.classList.remove('inativo')
        }

        if(dados.getCep()){
            let erro = document.getElementById("erroCep")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroCep")
            erro.classList.remove('inativo')
        }


        if(dados.getBairro()){
            let erro = document.getElementById("erroBairroCad")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroBairroCad")
            erro.classList.remove('inativo')
        }


        if(dados.getEstado()){
            let erro = document.getElementById("erroEstadoCad")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroEstadoCad")
            erro.classList.remove('inativo')
        }

        if(dados.getLogradouro()){
            let erro = document.getElementById("erroLogradouroCad")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroLogradouroCad")
            erro.classList.remove('inativo')
        }


        if(dados.getUf()){
            let erro = document.getElementById("erroUfCad")
            erro.classList.add('inativo')

        }else{
            let erro = document.getElementById("erroUfCad")
            erro.classList.remove('inativo')
        }



        if(dados.getLiberaBotao() == 9){
            let linkCadastro = document.querySelector('#linkCadastro')
            linkCadastro.href= '../html/boasVindas.html'
        }
    }
}