// Exercicio 1 - Objetos
//
// Perfil de Animal
//
// Crie um objeto que represente um animal, com as propriedades:
// - nome
// - idade
// - especie
// - som
// - cor
// - raca
// Exiba uma mensagem no console usando as propriedades.

let animal = {
    nome: "Leon",
    idade: 3,
    especie: "Gato",
    som: "Miau",
    cor: "Preto",
    raca: "Vira-lata"
};

// Função que retorna o perfil do animal
function perfilAnimal(animal) {
    return `O animal é um ${animal.especie} chamado ${animal.nome}, tem ${animal.idade} anos, é da cor ${animal.cor}, da raça ${animal.raca} e faz ${animal.som}!`;
}

console.log(perfilAnimal(animal));