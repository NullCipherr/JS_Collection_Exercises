// Exercicio 10 - Funções
//
// Sistema de Ataque Crítico
//
// Crie um sistema de ataque crítico para um jogo. 

// Função que recebe um ataque e uma chance de crítico e retorna o ataque dobrado se for crítico
function ataqueCritico(ataque, chanceCritico)
{
    const isCritico = Math.random() < chanceCritico; // Gera um número aleatório entre 0 e 1 e compara com a chance de crítico
    return isCritico ? ataque * 2 : ataque ; // Se for crítico, retorna o ataque dobrado, senão, retorna o ataque normal
}

// Testes da função
console.log(ataqueCritico(10, 0.3)); // 20
console.log(ataqueCritico(20, 0.3)); // 10