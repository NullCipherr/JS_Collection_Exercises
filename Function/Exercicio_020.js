// Exercicio 20 - Arrow Function
//
// Crie uma arrow function chamada verificarCombo que recebe um array de ações e verifica se as últimas três ações foram "ataque". 
// Retorne true se sim, caso contrário, false.

// Função que verifica se as últimas três ações foram "ataque"
const verificarCombo = (acoes) => {
    if(acoes.length < 3) return false;
    return acoes.slice(-3).every(acao => acao === 'ataque'); // every() verifica se todos os elementos do array passam no teste implementado pela função fornecida.
};

// Testes da função
console.log(verificarCombo(["defesa", "ataque", "ataque", "ataque"])); // Output: true
console.log(verificarCombo(["ataque", "ataque", "ataque"])); // Output: true
console.log(verificarCombo(["ataque", "ataque", "defesa"])); // Output: false
console.log(verificarCombo(["ataque", "defesa", "ataque"])); // Output: false
console.log(verificarCombo(["ataque", "ataque"])); // Output: false
console.log(verificarCombo(["ataque"])); // Output: false
console.log(verificarCombo([])); // Output: false
