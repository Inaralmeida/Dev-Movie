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
}