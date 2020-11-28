
class UserControllerLocalizacao{
    buscaEndereco(){
        let dados = new UserModelLocalizacao(cep.value)
        dados.buscaEndereco(); 
        
        let view = new UserViewLocalizacao();
        view.render(dados); 
    }
  
}
