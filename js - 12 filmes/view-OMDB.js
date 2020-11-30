class viewFilme
{   
    mostraDados(dados,i)
    {   
        let section = document.querySelector('.section-cards')

        let card = document.createElement('article')
        card.classList.add('card')
        section.appendChild(card)

        card.innerHTML=
        `
        <img src="${dados.getCapa()}" class="card-img-top" id="card-img-top${i}" alt="...">
        <div class="card-body">
            <h5 class="card-titulo" id='card-titulo${i}'>${dados.getTitulo()}</h5>
        </div>`  
    }

    mostraDadosBusca(dados)
    {
        let sectionCards = document.querySelector('.section-cards ')
        sectionCards.classList.add('inativo')

        let sectionInformacoes = document.querySelector('.section-info')
        sectionInformacoes.classList.remove('inativo')

        let capa = document.querySelector('#imgFilme')
        capa.src = dados.getCapa();

        let titulo = document.querySelector('#nomeFilme')
        titulo.textContent = dados.getTitulo();

        let descricao = document.querySelector('#descricao')
        descricao.textContent = dados.getDescricao();

        let ano = document.querySelector('#ano')
        ano.textContent = dados.getAno();

        let atores = document.querySelector('#atores')
        atores.textContent = dados.getAtores();

        let diretor = document.querySelector('#diretor')
        diretor.textContent = dados.getDiretor();

        let genero = document.querySelector('#genero')
        genero.textContent = dados.getGenero();

        let produtora = document.querySelector('#produtora')
        produtora.textContent = dados.getProdutora();

        let duracao = document.querySelector('#duracao')
        duracao.textContent = dados.getDuracao();

        let escritor = document.querySelector('#escritor')
        escritor.textContent = dados.getEscritor();

        let faixaEtaria = document.querySelector('#faixaEtaria')
        faixaEtaria.textContent = dados.getFaixaEtaria();

        let notasCriticas = document.querySelector('#notasCriticas')
        notasCriticas.textContent = dados.getnotasCriticas();
        
        let premios = document.querySelector('#premios')
        premios.textContent = dados.getPremios();

        let linguagem = document.querySelector('#idioma')
        linguagem.textContent = dados.getLinguagem();
    
    }
}