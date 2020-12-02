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
        requisicao.open("GET",  `https://viacep.com.br/ws/${cep}/json/unicode/`  , false)
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
            let erro = document.querySelector("#erroCep")
            erro.classList.remove('inativo')
            document.getElementById("logradouro").value = ""; 
            document.getElementById("bairro").value = "";  
            document.getElementById("estado").value = ""; 
            document.getElementById("UF").value = ""; 
            
            
        }else{
            let erro = document.querySelector("#erroCep")
            erro.classList.add('inativo')
            document.getElementById("logradouro").value = ""; 
            document.getElementById("bairro").value = "";  
            document.getElementById("estado").value = ""; 
            document.getElementById("UF").value = ""; 
            
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

class Model{
    
    constructor(){
        this._liberaBotao = '';
        this._nome = '';
        this._email = '';
        this._senha = '';
        this._senha2 = '';
        this._cep = '';
        this._bairro = '';
        this._estado = '';
        this._uf = '';
        this._logradouro = '';
    }
    
    verificaCampos(listaCampos){
        
        
        
        
        console.log(listaCampos)
        for( let campo of listaCampos){
            let tamCampo = campo.value.length
            console.log(campo.id)
            switch (campo.id){
                
                case 'nome':
                this._nome = campo.value;
                break;
                
                case 'emailCadastro':
                this._email = campo.value;
                break;
                
                case 'senha':
                this._senha = campo.value;
                break;
                
                case 'senha2':
                this._senha2 = campo.value;
                break;

                case 'cep':
                this._cep = campo.value;
                break;

                case 'logradouro':
                this._logradouro = campo.value;
                break;
                
                case 'bairro':
                this._bairro = campo.value;
                break;

                case 'estado':
                this._estado = campo.value;
                break;
                
                case 'UF':
                this._uf = campo.value;
                break;
            } 
            
            if(tamCampo > 0 ){
                this._liberaBotao ++
            }

        }
        
    }
    
    getLiberaBotao(){
        return this._liberaBotao
    }
    
    getNome(){
        return this._nome
    }
    
    getEmail(){
        return this._email
    }
    
    getSenha(){
        return this._senha
    }
    
    getSenha2(){
        return this._senha2
    }

    getCep(){
        return this._cep
    }
    
    getEstado(){
        return this._estado
    }
    
    getBairro(){
        return this._bairro
    }

    getLogradouro(){
        return this._logradouro
    }
    
    getUf(){
        return this._uf
    }
}