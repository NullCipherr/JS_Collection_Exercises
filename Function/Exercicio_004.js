// Exercicio 4 - Funções
//
// Converter Celsius para Fahrenheit
//
// Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

// Função para converter celsius para fahrenheit.
function celsiustofahrenheit(celsius)
{
    return (celsius * 9/5) + 32 ;
}

// Função para converter fahrenheit para celsius.
function fahrenheittocelsius(fahrenheit)
{
    return (fahrenheit - 32) * 5/9;
}

// Testes da função
console.log(celsiustofahrenheit(32)); // 89.6
console.log(celsiustofahrenheit(0)); // 32
console.log(celsiustofahrenheit(100)); // 212
console.log(celsiustofahrenheit(37)); // 98.6
console.log();
console.log(fahrenheittocelsius(89.6)); // 32
console.log(fahrenheittocelsius(32)); // 0
console.log(fahrenheittocelsius(212)); // 100
console.log(fahrenheittocelsius(98.6)); // 37