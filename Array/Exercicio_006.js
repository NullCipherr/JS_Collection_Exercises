// Exercicio 6 - Arrays
//
// Array de Palavras
//
// Crie um array com palavras, como ["Casa", "Carro", "Gato"].
// - Utilize o método map para criar um novo array com todas as palavras em maiúsculas.
// - Utilize o método filter para criar um array com palavras que têm mais de 4 letras e exiba os resultados.

// Array de palavras
let palavras = ["Casa", "Carro", "Bola", "Gato", "Cachorro", "Elefante", "Pato", "Cavalo", "Papagaio", "Girafa"];

// Funções de transformação e filtro
let palavrasMaiusculas = palavras.map(palavra => palavra.toUpperCase()); // Transforma todas as palavras em maiusculas
let palavrasLongas = palavras.filter(palavra => palavra.length > 5); // Filtra as palavras que tem mais de 5 letras
let palavrasComA = palavras.filter(palavra => palavra.includes("a") || palavra.includes("A")); // Filtra as palavras que tem a letra "a" ou "A"
let palavrasComO = palavras.filter(palavra => palavra.includes("o") || palavra.includes("O")); // Filtra as palavras que tem a letra "o" ou "O"


// Testes de saída
console.log("Palavras: " + palavras); 
console.log("Plavras Maiusculas: " + palavrasMaiusculas); 
console.log("Palavras Longas: " + palavrasLongas);
console.log("Palavras com A: " + palavrasComA);
console.log("Palavras com O: " + palavrasComO);