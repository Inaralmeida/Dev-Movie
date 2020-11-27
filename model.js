class UserModelLocalizacao{
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
        
                    let objeto = this._processaResponse(requisicao.responseText); 
                    this._atualiza (objeto); 

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