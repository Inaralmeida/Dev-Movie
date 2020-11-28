class UserViewLocalizacao{
    render (model){
 
        

        let  logradouro = model.getLogradouro()
         document.getElementById('logradouro').value = logradouro; 

        let bairro = model.getBairro()
        document.getElementById('bairro').value = bairro; 
        
        let localidade = model.getLocalidade()
        document.getElementById('estado').value = localidade; 

        let uf = model.getUf()
        document.getElementById('UF').value = uf;

        // let erro = model.getLocalidade()
        document.getElementById('erro').value = erro; 

 

    }
}