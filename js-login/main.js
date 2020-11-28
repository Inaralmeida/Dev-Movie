
let controller = new UserControllerLocalizacao(); 
document.getElementById("cep").addEventListener("blur", ()=>{
    var cep = document.querySelector("#cep");
    controller.buscaEndereco(cep.value)

})