class UserViewLocalizacao{
    render (model){
 
        

        let  logradouro = model.getLogradouro()
         document.getElementById('logradouro').value = logradouro; 

        let bairro = model.getBairro()
        document.getElementById('bairro').value = bairro; 
        
        let localidade = model.getLocalidade()
        document.getElementById('localidade').value = localidade; 

        let uf = model.getUf()
        document.getElementById('uf').value = uf; 

 

    }
}