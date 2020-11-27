class viewFilme
{   

    mostraDados(dados,i)
    {   
        
        let titulo = document.querySelector('#card-titulo'+i)
        titulo.textContent = dados.getTitulo();

        /* let descricao = document.querySelector('#card-text'+i)
        descricao.textContent = dados.getDescricao(); */

        let capa = document.querySelector('#card-img-top'+i)
        capa.src = dados.getCapa();
    }
}