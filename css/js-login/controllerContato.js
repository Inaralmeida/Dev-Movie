class UserControllerContato{
 buscaContato(email, senha){
     let dados = new UserModelContato()
     dados.buscaContato(email, senha); 

     let view = new UserViewContato()
     view.mostraNaTela(dados)
 }

}