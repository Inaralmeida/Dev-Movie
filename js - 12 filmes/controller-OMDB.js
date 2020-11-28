class controllerFilme
{

    mostra12filmes(filme,i)
    {   
        let model = new modelFilme();
        model.buscaFilme(filme)

        let view = new viewFilme();
        view.mostraDados(model,i)
    }
    
    mostraBuscarFilmes(filme)
    {
        let model = new modelFilme();
        model.buscaFilme(filme)

        let view = new viewFilme();
        view.mostraDadosBusca(model)
    }

}