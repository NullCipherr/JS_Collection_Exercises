// Exercicio 7 - Repetição 
//
// Coleta de Moedas
//
// Simule um jogo onde o jogador coleta moedas. O jogo termina quando o jogador coletar 10 moedas. A cada iteração, o jogador coleta 1 moeda.

let coins = 0 ;
let coins_max = 10 ;

// Função que simula a coleta de moedas
function coletarMoedas()
{
    while(coins < coins_max)
    {
        coins++ ;
        console.log("Moedas coletadas: " + coins) ;
    }

    console.log("Fim do jogo!") ;
}

coletarMoedas() ;