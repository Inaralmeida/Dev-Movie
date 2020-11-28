let controllerContato = new UserControllerContato(); 

let btnEntrar = document.querySelector('#btnEntrar')
btnEntrar.addEventListener('click', () =>{
   
   console.log('btn funciona')
    let email = document.querySelector("#email-entar");
    let senha = document.querySelector("#senha-entrar"); 
    controllerContato.buscaContato(email.value, senha.value)

})

