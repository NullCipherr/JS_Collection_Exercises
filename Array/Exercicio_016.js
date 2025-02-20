// Exercicio 16 - Arrays
//
// Gerenciamento de Aliados
//
// Crie uma função adicionarAliado que adiciona um aliado (objeto com nome e forca) a um array.
// Crie uma função calcularForcaTotal que usa reduce para somar a força de todos os aliados.
// Teste adicionando aliados e calculando a força total.

// Lista de aliados
let aliados = [] ;

// Função para adicionar um aliado a lista de aliados.
function adicionarAliado(aliados, nome, forca)
{
    aliados.push({nome: nome, forca: forca});
    console.log("Aliado adicionado com sucesso!");

    return aliados;
}

// Função para calcular a força total dos aliados
function calcularForcaTotal(aliados)
{
    return aliados.reduce((total, aliado) => total + aliado.forca, 0) ;
}

// Adicionando aliados
adicionarAliado(aliados, "Gandalf", 100);
adicionarAliado(aliados, "Aragorn", 200);
adicionarAliado(aliados, "Legolas", 150);
adicionarAliado(aliados, "Gimli", 150);

console.log("Lista de aliados", aliados);
let forcaTotal = calcularForcaTotal(aliados);
console.log("A força total dos aliados é: " + forcaTotal);