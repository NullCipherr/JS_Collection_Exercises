// Exercicio 13 - Funções
//
// Sistema de Progressão de Fase
//
// Crie um sistema de progressão de fase de um jogo. O sistema deve conter uma função que recebe a fase atual e retorna a próxima fase.

function proximaFase(faseAtual)
{
    const dificuldade = faseAtual * 1.5 ;
    const inimigos = Math.floor(faseAtual * 2) ;

    return {
        fase: faseAtual + 1,
        dificuldade: dificuldade,
        inimigos: inimigos
    } ;
}

// Testes da função
console.log(proximaFase(1)) ; // { fase: 2, dificuldade: 1.5, inimigos: 2 }
console.log(proximaFase(2)) ; // { fase: 3, dificuldade: 3, inimigos: 4 }
console.log(proximaFase(3)) ; // { fase: 4, dificuldade: 4.5, inimigos: 6 }
console.log(proximaFase(4)) ; // { fase: 5, dificuldade: 6, inimigos: 8 }
console.log(proximaFase(5)) ; // { fase: 6, dificuldade: 7.5, inimigos: 10 }