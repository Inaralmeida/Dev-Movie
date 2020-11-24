class UserModel{
    constructor(cep){
        this._cep = cep;
        this._logradouro = "";
        this._complemento = ""; 
        this._bairro = ""; 
        this._localidade = "";  
        this._uf = ""; 
        
    }
    
    buscaEndereco(){
        
        let cep = this._cep; 
        let requisicao  = new XMLHttpRequest(); 
        requisicao.open("GET",  `https://viacep.com.br/ws/` + cep + `/json/unicode/`  , false)
        requisicao.addEventListener("load", () => {
           try{
                if(requisicao.status == 200){
                    let objeto = this._processaResponse(requisicao.responseText); 
                    this._atualiza (objeto); 
            }else if (requisicao.status == 400){
                      throw new Error("Usuário Inexistente")
            }
        }catch(err){
            console.log(err.message)
        }
            
        })
        requisicao.send(); 
    }
    

    _processaResponse(responseString){
        let response = JSON.parse(responseString); 
        return response; 
    }
    
    _atualiza (dados){
              
        this._cep = dados.cep;
        this._logradouro = dados.logradouro; 
        this._complemento = dados.complemento; 
        this._bairro = dados.bairro;
        this._localidade = dados.localidade; 
        this._uf = dados.uf; 

    
    }
  

    getCep(){
        return this._cep; 
    }
    getLogradouro(){
        return this._logradouro; 
    }
    getComplemento(){
        return this._complemento; 
    }
    getBairro(){
        return this._bairro; 
    }
    getLocalidade(){
        return this._localidade; 
    }
    getUf(){
        return this._uf; 
    }
    
}
class UserView{
    render (model){
    //    CEP
        let cep = document.querySelector("#cep")
        cep.innerHTML = `
            <br>${model.getCep()} 
        ` 
        document.body.appendChild(cep);
    
        // LOGRADOURO

        let logradouro = document.querySelector("#logradouro")
        logradouro.innerHTML = `
            ${model.getLogradouro()} 
        ` 
        document.body.appendChild(logradouro); 

        // // COMPLEMENTO

        // let complemento = document.querySelector("#complemento")
        // complemento.innerHTML = `
        //     ${model.getComplemento()} 
        // ` 
        // document.body.appendChild(complemento); 

        // BAIRRO

        let bairro = document.querySelector("#bairro")
        bairro.innerHTML = `
            ${model.getBairro()} 
        ` 
        document.body.appendChild(bairro); 

        // LOCALIDADE

        let localidade = document.querySelector("#localidade")
        localidade.innerHTML = `
            ${model.getLocalidade()} 
        ` 
        document.body.appendChild(localidade); 
        
        // UF
        let uf = document.querySelector("#uf")
        uf.innerHTML = `
            ${model.getUf()} 
        ` 
        document.body.appendChild(uf); 


    }
}

class UserController{
    buscaEndereco(){
        let dados = new UserModel(cep.value)
        dados.buscaEndereco(); 
        
        let view = new UserView();
        view.render( dados ); 
    }
    limpaCampos(){
         document.querySelector("#search").value = ""; 
    }
}


let controller = new UserController(); 
document.getElementById("buscaEndereco").addEventListener("click", controller.buscaEndereco)
document.getElementById("buscaEndereco").addEventListener("click", controller.limpaCampos)
var cep = document.querySelector("#search");
// // cep.addEventListener("keyup", (event)=> {
//     if(event.target.value.length==10){

//         cep.newLocation(event.target.value)
//     }
// })