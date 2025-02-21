// Exercicio 9 - Objetos
//
// Simulador de Clima
//
// Crie um objeto clima com propriedades temperatura, chuva (booleano) e historico (array de estados anteriores).
// Adicione métodos atualizarClima (altera temperatura e chuva aleatoriamente e salva no histórico) e verHistorico.
// Teste atualizando o clima várias vezes e exibindo o histórico.

let clima = {
    temperatura: 12,
    chuva: false,
    historico: [],

    // Métodos
    atualizarClima: function(){
        this.temperatura += Math.floor(Math.random() * 11) - 5 ; // Variação de -5 a 5 graus
        this.chuva = Math.random() > 0.75 // 25% de chance de chuva
        this.historico.push({temperatura: this.temperatura, chuva: this.chuva}); // Salva no histórico
    },
    verHistorico: function(){
        console.log("Histórico de Clima:");
        this.historico.forEach((element, index) => {
            console.log(`Dia ${index + 1}: ${element.temperatura}°C, ${element.chuva ? 'com chuva' : 'sem chuva'}`);
        });
    }
};

// Testes
clima.atualizarClima();
clima.atualizarClima();
clima.atualizarClima();
clima.atualizarClima();
clima.verHistorico();