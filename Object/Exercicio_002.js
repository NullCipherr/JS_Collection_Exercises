// Exercicio 2 - Objetos
//
// Carro com método
//
// Crie um objeto carro que tem as propriedades cor, marca, modelo.
// Adicione um método descrever que retorna uma string com as informações do carro.
// Chame o método e exiba o resultado.

let carro = {
    nome: 'Herbie',
    cor: 'Branco',
    marca: 'Volkswagen',
    modelo: 'Fusca',
    descrever: function() {
        return `Esse é o ${this.nome}, ${this.modelo} da marca ${this.marca} e da cor ${this.cor}`;
    }
};

console.log(carro.descrever());