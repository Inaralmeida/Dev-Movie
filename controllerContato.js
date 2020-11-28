class UserControllerContato{
 buscaContato(){
     let dados = new UserModelContato()
     dados.buscaContato(); 

     let view = new UserViewContato(); 
     view.render(dados); 
 }

}