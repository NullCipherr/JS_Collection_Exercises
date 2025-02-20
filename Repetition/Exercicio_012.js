// Exercicio 12 - Repetição
//
// Missão de coleta de recursos
//
// Crie um sistema de missão onde o jogador precisa coletar recursos (madeira, pedra, ouro) para completar a missão. O jogador coleta um recurso por iteração.

let madeira = 0 ;
let pedra = 0 ;
let ouro = 0 ;

function missaoColeta(numRecursos)
{
    while(madeira < numRecursos || pedra < numRecursos || ouro < numRecursos)
    {
        let recurso = Math.floor(Math.random() * 3) + 1 ; // 1 = madeira, 2 = pedra, 3 = ouro

        if(recurso === 1)
        {
            madeira++ ;
            console.log("Madeira coletada!") ;
        }
        else if(recurso === 2)
        {
            pedra++ ;
            console.log("Pedra coletada!") ;
        }
        else
        {
            ouro++ ;
            console.log("Ouro coletado!") ;
        }

        console.log(`Madeira: ${madeira} | Pedra: ${pedra} | Ouro: ${ouro}`) ;
    }

    console.log("Missão completa!") ;
}

// Teste da função

const numRecursos = Math.floor(Math.random() * 20) + 1 ;

missaoColeta(numRecursos) ;