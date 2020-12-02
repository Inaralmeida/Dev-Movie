
let controller = new UserControllerLocalizacao(); 
document.getElementById("cep").addEventListener("blur", ()=>{
    var cep = document.querySelector("#cep");
    controller.buscaEndereco(cep.value)

})

let btnCadastro = document.querySelector('#btnCadastro')
let controllerVerificaCampos = new Controller()
btnCadastro.addEventListener('click', (event)=>{
    /* event.preventDefault() */
    let listaCampos = [nome, emailCadastro, senha, senha2, cep, logradouro, bairro, estado, UF]
    controllerVerificaCampos.verificaCampos(listaCampos)
    
})