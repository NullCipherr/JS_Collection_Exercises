// Exercicio 7 - Objetos
//
// Sistema de Alunos
//
// Crie um objeto aluno com nome, notas (array) e métodos calcularMedia e adicionarNota.
// O método calcularMedia deve usar reduce para calcular a média das notas.
// Teste adicionando notas e calculando a média.

let aluno = {
    nome: "Carlos Eduardo Bragança",
    notas: [90, 90, 90],
    
    calcularMedia: function() 
    {
        let total = this.notas.reduce((total, nota) => total + nota, 0);
        return total / this.notas.length;
    },
    adicionarNota: function(nota)
    {
        this.notas.push(nota);
        console.log(`Nota ${nota} adicionada para ${this.nome}`);
    }
};

// Testes
console.log("Média: ", aluno.calcularMedia());
aluno.adicionarNota(80);
console.log("Média: ", aluno.calcularMedia());
