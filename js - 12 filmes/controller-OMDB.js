class controllerFilme
{
    testafilmeDB(filme)
    {
        let modelTestaFilme = new modelFilme();
        modelTestaFilme.buscaFilme(filme)

    }
    mostra12filmes(filme,i)
    {   
        let model12Filmes = new modelFilme();
        model12Filmes.buscaFilme(filme)

        let view12Filmes = new viewFilme();
        view12Filmes.mostraDados(model12Filmes,i)
    }
    
    mostraBuscarFilmes(filme)
    {
        let modelBuscarFilmes = new modelFilme();
        modelBuscarFilmes.buscaFilme(filme)
        let viewBuscarFilmes = new viewFilme();
        
        if (modelBuscarFilmes.getResponse()=='True')
        {
            viewBuscarFilmes.mostraDadosBusca(modelBuscarFilmes)
        }
        else
        {
            viewBuscarFilmes.mostraErro()
        }   
    }

}