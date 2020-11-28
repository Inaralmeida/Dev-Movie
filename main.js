let controller = new UserControllerLocalizacao(); 
document.getElementById("cep").addEventListener("blur", controller.buscaEndereco)
var cep = document.querySelector("#cep");