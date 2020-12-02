
class UserControllerLocalizacao{
    buscaEndereco(){
        let dados = new UserModelLocalizacao(cep.value)
        dados.buscaEndereco(); 
        
        let view = new UserViewLocalizacao();
        view.render(dados); 
    }
  
}

class Controller{

    verificaCampos(listaCampos){
        let dados = new Model()
        dados.verificaCampos(listaCampos)

        let view = new View()
        view.liberaBotao(dados)

    }
}
