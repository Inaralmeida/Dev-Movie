class controllerFilme
{

    mostraFilme(filme,i)
    {   
        let model = new modelFilme();
        model.buscaFilme(filme)

        let view = new viewFilme();
        view.mostraDados(model,i)
    }
    


}