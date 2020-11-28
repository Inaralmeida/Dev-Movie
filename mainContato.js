let controllerContato = new UserControllerContato(); 
document.getElementById("nome").addEventListener("blur", controllerContato.buscaContato)
var nome = document.querySelector("#nome"); 

document.getElementById("email").addEventListener("blur", controllerContato.buscaContato)
var email = document.querySelector("#email"); 

document.getElementById("senha").addEventListener("blur", controllerContato.buscaContato)
var senha = document.querySelector("#senha"); 

document.getElementById("confirmacao").addEventListener("blur", controllerContato.buscaContato)
var confirmacao = document.querySelector("#confirmacao"); 

