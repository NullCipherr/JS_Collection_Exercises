// Exercicio 16 - Arrow Function
// 
// Crie uma arrow function chamada calcularPontuacao que recebe dois parâmetros: acertos e erros. 
// A função deve retornar a pontuação final, onde cada acerto vale 10 pontos e cada erro subtrai 5 pontos.

const calcularPontuacao = (acertos, erros) => (acertos * 10) - (erros * 5);

// Testes
console.log(calcularPontuacao(3, 3)); // 30 - 15 = 15
console.log(calcularPontuacao(5, 2)); // 50 - 10 = 40
console.log(calcularPontuacao(1, 5)); // 10 - 25 = -15
console.log(calcularPontuacao(0, 0)); // 0
