let controller = new controllerFilme

var lista12Filmes = ['The Lord of the Rings','Harry Potter and the Deathly Hallows','whiplash','the devil wears prada','The Secret Life of Walter Mitty','The Last Naruto','The Dark Knight','The Hate U Give','The boy who harnessed the wind','Avengers: Endgame','Moana','Star Wars: Episode IV - A New Hope',]

function criaFilme (listaFilmes)
{   
    
    for (let i=0;i<listaFilmes.length;i++)
    
    {   
        controller.mostraFilme(listaFilmes[i],i)
    }
    
}
criaFilme(lista12Filmes);







