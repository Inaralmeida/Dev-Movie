class modelFilme
{
    constructor(filme)
    {
        this._titulo = 'Title';
        this._ano='Year';
        this._atores='Actors';
        this._diretor='Director';
        this._genero='Genre';
        this._descricao='Plot';
        this._capa='Poster';
        this._produtora='Production';
        this._duracao='Runtime';
        this._escritor='Writer';
        this._faixaEtaria='Rated';
        this._notasCriticas = 'Ratings';
        this._premios = 'Awards'
        this._linguagem = 'Language'
        this._response = 'Response'
    }

    buscaFilme(filme)
    {   let filmeEspaco = filme.split(' ')
        let filmeRequiscao = filmeEspaco.join('+')

        let requisicao  = new XMLHttpRequest();

        requisicao.addEventListener('load',()=>
        {
            if (requisicao.status == 200 && requisicao.readyState == 4)
            {
                let dados = JSON.parse(requisicao.responseText)
                this._atualizaDados(dados)
            }
        });
        
        requisicao.open('GET',`http://www.omdbapi.com/?t=${filmeRequiscao}&apikey=2f800a19`, false);

        requisicao.send();

    }

    _atualizaDados(dados)
    {
        this._titulo = dados.Title;
        this._ano=dados.Year;
        this._atores=dados.Actors;
        this._diretor=dados.Director;
        this._genero=dados.Genre;
        this._descricao=dados.Plot;
        this._capa=dados.Poster;
        this._produtora=dados.Production;
        this._duracao=dados.Runtime;
        this._escritor=dados.Writer;
        this._faixaEtaria=dados.Rated;
        this._notasCriticas = dados.Ratings[0].Value;
        this._premios = dados.Awards;
        this._linguagem = dados.Language;
        this._response = dados.Response
    }

    getTitulo()
    {
        return this._titulo;
    }
    
    getAno()
    {
        return this._ano;
    }
    getAtores()
    {
        return this._atores;
    }
    getDiretor()
    {
        return this._diretor;
    }
    getGenero()
    {
        return this._genero;
    }
    getDescricao()
    {
        return this._descricao;
    }
    getCapa()
    {
        return this._capa;
    }
    getProdutora()
    {
        return this._produtora;
    }
    getDuracao()
    {
        return this._duracao;
    }
    getEscritor()
    {
        return this._escritor;
    }
    getFaixaEtaria()
    {
        return this._faixaEtaria;
    }
    getnotasCriticas()
    {   
        if (this._notasCriticas=='Ratings' || this._notasCriticas==undefined )
        {
            this._notasCriticas = 'N/A'
        }
        else
        {
            this._notasCriticas
        }
        return this._notasCriticas;
    }
    getPremios()
    {
        return this._premios;
    }
    getLinguagem()
    {
        return this._linguagem;
    }

    getResponse()
    {
        return this._response
    }

}