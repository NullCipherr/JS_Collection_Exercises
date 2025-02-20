// Exercicio 4 - Arrays
//
// Array de Cores
//
// Crie um array com 5 cores diferentes, e ordene o array de forma alfabética e exiba no console as cores em sua ordem ordenada.
// Por fim, combine os arrays das duas primeiras cores e exiba no console a nova cor criada.

let cores = ['azul', 'vermelho', 'amarelo', 'verde', 'roxo', 'laranja', 'preto', 'branco'];

cores.sort() ; // Ordena as cores em ordem alfabética
cores.forEach(cor => console.log(cor)) ; // Exibe as cores ordenadas

console.log() ;
console.log("Cores Ordenadas:") ;
coresSeparadas = cores.join(', ') ; // Junta as cores em uma string separando-as por vírgula
console.log(coresSeparadas) ; // Exibe as cores ordenadas

console.log() ;
console.log("Cores Concatenadas:") ;
let novasCores = cores.concat(['rosa', 'cinza', 'marrom', 'bege', 'violeta', 'dourado', 'prata', 'ouro']); // Concatena os arrays
novasCores = novasCores.join(', ') ; // Junta as cores em uma string separando-as por vírgula
console.log(novasCores) ; // Exibe as cores concatenadas

