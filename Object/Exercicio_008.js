// Exercicio 8 - Objetos
//
// Cidade Simulada - Objetos Aninhados e Interação
//
// Crie um objeto cidade com nome e habitantes (array de objetos com nome, idade e profissao).
// Adicione um método envelhecer que aumenta a idade de todos os habitantes em 1 ano.
// Adicione um método contratar que altera a profissão de um habitante.
// Teste os métodos.

let cidade = {
    nome: "São Paulo",
    habitantes: [
        {
            nome: "João",
            idade: 25,
            profissao: "Engenheiro"
        },
        {
            nome: "Maria",
            idade: 30,
            profissao: "Médica"
        },
        {
            nome: "José",
            idade: 55,
            profissao: "Professor"
        }
    ],

    // Método Envelhecer
    envelhecer: function (){
        this.habitantes.forEach(habitante => habitante.idade++) ;
        console.log("Todos os habitantes envelheceram 1 ano.");
    },
    contratar: function(nome, novaProfissao){
        let habitante = this.habitantes.find(habitante => habitante.nome === nome);
        if(habitante){
            habitante.profissao = novaProfissao;
            console.log(`${habitante.nome} agora é ${habitante.profissao}`);
        } else {
            console.log("Habitante não encontrado");
        }
    }
};

// Testes
console.log("Habitantes Iniciais: ", cidade.habitantes);
cidade.envelhecer();
console.log("Habitantes após envelhecer: ", cidade.habitantes);
cidade.contratar("Maria", "Engenheira");
console.log("Habitantes após contratar Maria como Engenheira: ", cidade.habitantes);