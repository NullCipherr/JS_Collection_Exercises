// Exercicio 17 - Arrow Function
//
// Verificar Level-Up
//
// Crie uma arrow function chamada verificarLevelUp que recebe experienciaAtual e experienciaNecessaria para o próximo nível. 
// Retorne true se o jogador tiver experiência suficiente para subir de nível, caso contrário, false.

const verificarLevelUp = (experienciaAtual, experienciaNecessaria) => experienciaAtual >= experienciaNecessaria;

// Testes da função
console.log(verificarLevelUp(100, 250)); // false
console.log(verificarLevelUp(250, 250)); // true
console.log(verificarLevelUp(300, 250)); // true
console.log(verificarLevelUp(250, 300)); // false