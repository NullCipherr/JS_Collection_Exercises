 // Exercicio 8 - Funções
 //
 // Sistema de Vida de Jogador
 //
 // Crie um sistema de vida de jogador, onde o jogador terá 100 pontos de vida.

 let playerHP = 100 ;

 // Função para modificar a vida do jogador
 function modificarVida(vida, quantidade)
 {
    const newHP = vida + quantidade ; // Calcula o novo HP do jogador

    return Math.min(Math.max(newHP, 0), 100) ; // Retorna o novo HP do jogador, limitando entre 0 e 100
 }

 // Testes da função
console.log(modificarVida(80, -30)); // 50
console.log(modificarVida(90, 20));  // 100
console.log(modificarVida(10, -20)); // 0
console.log(modificarVida(100, -100)); // 0
