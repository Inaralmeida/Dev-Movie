let controllerContato = new UserControllerContato(); 

let btnEntrar = document.querySelector('#btnEntrar')
btnEntrar.addEventListener('click', () =>{
   
   console.log('btn funciona')
    let email = document.querySelector("#email-entar");
    let senha = document.querySelector("#senha-entrar"); 
    controllerContato.buscaContato(email.value, senha.value)

})

/* Modal Esquecia a Senhaha */

let btnEsqueciASenha = document.querySelector('#btnEsqueciASenha')

btnEsqueciASenha.addEventListener('click', ()=>{

    let modalEsqueciASenha = document.querySelector('#modalEsqueciASenha')
     
    modalEsqueciASenha.innerHTML = 
    `
    <h3>Um link para redefinição de senha foi enviado para o seu e-mail</h3>
    
    
    `

    btnEsqueciASenha.textContent = 'OK'


    btnEsqueciASenha.addEventListener('click', ()=>{

            window.location.reload()


    })
})