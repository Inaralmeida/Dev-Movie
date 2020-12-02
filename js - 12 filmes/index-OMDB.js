//###################Variaveís##########################
let controller = new controllerFilme

var lista12Filmes = ['The Lord of the Rings','Harry Potter and the Deathly Hallows','whiplash','the devil wears prada','The Secret Life of Walter Mitty','The Last Naruto','The Dark Knight','The Hate U Give','The boy who harnessed the wind','Avengers: Endgame','Moana','Star Wars: Episode IV - A New Hope',]

let BtnBuscaFilme = document.querySelector('#btnBusca')

let btnHome = document.querySelector('#btnHome')

let tenteNovamente = document.querySelector('#tenteNovamente')

let botoesTitulo = []

//#################### Funções ##########################333

// cria 12 requisições a partir de uma lista predefinida
function criaFilme(listaFilmes)
{   
    for (let i=0;i<listaFilmes.length;i++)
    {   
        controller.mostra12filmes(listaFilmes[i],i)
        botoesTitulo.push(`card-titulo${i}`)
    }
}

criaFilme(lista12Filmes);

// Ao clicar no botão de buscar procura filme na api
BtnBuscaFilme.addEventListener('click', (event)=>
{   
    event.preventDefault()
    let inputFilmes = document.querySelector('#inputFilmes')
    controller.mostraBuscarFilmes(inputFilmes.value)
    inputFilmes.value = ""
})


// Ao clicar no titulo de um dos 12 filmes predefinidos, abre os detalhes
botoesTitulo.forEach(function(botaoTitulo, index)
{
    botaoTitulo = document.querySelector(`#card-titulo${[index]}`)
    botaoTitulo.addEventListener('click', function()
    {
        controller.mostraBuscarFilmes(botaoTitulo.textContent)    
    })
    
})

// Ao clicar no botao home recarrega a pagina
btnHome.addEventListener('click', ()=>
{
    window.location.reload()
})

// ao clicar no botao tente novamente recarrega a pagina
tenteNovamente.addEventListener('click',()=>
{
    window.location.reload()
})

