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
                if (dados.Response=="True")
                {
                    this._atualizaDados(dados)
                }
                else
                {
                   let main = document.querySelector('main')
                   main.innerHTML =
                    `<section class=" section-erro row justify-content-center w-75 mx-auto py-5 my-5">
                        <article class="text-light text-center py-5">
                        <h2 class="d-inline">ERRO <h2 class="d-inline" id="numErro">404</h2></h2>
                        <H3>Filme não encontrado</h3>
                            <div class="botao-erro">
                                <button id='tenteNovamente'>Tente Novamente</button>
                            </div>
                    </article>
                    
                    </section>`

                }
            }
            else{
                console.log('doideira')
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
        if (this._notasCriticas=='Ratings')
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

}