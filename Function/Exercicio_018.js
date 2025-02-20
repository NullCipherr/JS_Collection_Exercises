// Exercicio 18 - Arrow Function
//
// Calcular Tempo de Jogo
//
// Crie uma arrow function chamada calcularTempoJogo que recebe o tempo em minutos e retorna uma string formatada como "X horas e Y minutos".

const calcularTempoJogo = (minutos) => {
    const horas = Math.floor(minutos / 60); // 1 hora = 60 minutos
    const min = minutos % 60; // resto da divisão

    return horas > 1 ? `${horas} horas e ${min} minutos` : `${horas} hora e ${min} minutos`;
};

// Teste da Função
console.log(calcularTempoJogo(200)); // 3 horas e 20 minutos
console.log(calcularTempoJogo(100)); // 1 horas e 40 minutos
console.log(calcularTempoJogo(60)); // 1 horas e 0 minutos
console.log(calcularTempoJogo(30)); // 0 horas e 30 minutos
console.log(calcularTempoJogo(90)); // 1 horas e 30 minutos