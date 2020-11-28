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
            if(requisicao.status === 200){
                    let objeto = this._processaResponse(requisicao.responseText); 
                    this._atualiza (objeto); 

            }else if(requisicao.status == 400){
                console.log()
            }
        })

    
        let cepFinal = cep.split(".").join("").split("-").join(""); 

           var validacep = /^[0-9]{8}$/; 

           if(!validacep.test(cepFinal)){
                document.getElementById("erro").innerHTML = "ERRO!"
                document.getElementById("cep").value = ""; 
                document.getElementById("logradouro").value = ""; 
                document.getElementById("bairro").value = "";  
                document.getElementById("estado").value = ""; 
                document.getElementById("UF").value = ""; 
            
            
            }else{
                document.getElementById("logradouro").value = ""; 
                document.getElementById("bairro").value = "";  
                document.getElementById("estado").value = ""; 
                document.getElementById("UF").value = ""; 
                document.getElementById("erro").innerHTML = "";
            }
           
           
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