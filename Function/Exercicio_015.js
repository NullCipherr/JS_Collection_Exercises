// Exercicio 15 - Funções
//
// Mini-Game de Adivinhação
//
// Crie uma função chamada `miniGame` que receberá um número inteiro secreto.
// A função retornará outra função que receberá um palpite.
// A função retornará as seguintes mensagens:
// - "Vitória!!" se o palpite for igual ao número secreto
// - "Tente um número menor" se o palpite for maior que o número secreto
// - "Tente um número maior" se o palpite for menor que o número secreto
// - "Game Over!!" se o jogador esgotar as 3 tentativas

// Função que recebe um número secreto e retorna outra função que recebe um palpite
// A função retornará mensagens de acordo com o palpite do jogador
function miniGame(numeroSecreto)
{
    let tentativas = 3 ; // Número de tentativas

    // Função que recebe um palpite e retorna mensagens de acordo com o palpite
    return function(palpite)
    { 
        tentativas-- ; // Decrementa o número de tentativas
        if(palpite === numeroSecreto) // Se o palpite for igual ao número secreto
            return "Vitória!!" ; // Retorna "Vitória!!"
        if(tentativas === 0) // Se o jogador esgotar as 3 tentativas
            return "Game Over!!" ; // Retorna "Game Over!!"
        return palpite > numeroSecreto ? "Tente um número menor" : "Tente um número maior" ; // Retorna "Tente um número menor" se o palpite for maior que o número secreto, caso contrário, retorna "Tente um número maior"
    };
}

// Criação de um mini-game com número secreto 10
const game = miniGame(10) ;

// Teste do mini-game
console.log(game(5)) ; // Tente um número maior
console.log(game(15)) ; // Tente um número menor
console.log(game(10)) ; // Vitória!!