// Exercicio 3 - Repetição
//
// Crie um programa que encontra o primeiro número maior que 100 que seja divisivel por 7 e 5 ao mesmo tempo.

// Função que verifica se o número é divisivel por 7 e 5 ao mesmo tempo.
function ehDivisivel(numero)
{
    const resultado = numero % 7 === 0 && numero % 5 === 0 ? true : false ;
    return resultado;
}

// Função que encontra o primeiro número maior que 100 que seja divisivel por 7 e 5 ao mesmo tempo.
function encontrarNumero(num)
{
    while(1)
    {
        if (ehDivisivel(num))
        {
            return num;
        }
        num++ ;
    }
}

// Teste da função
console.log(encontrarNumero(100)); // 105
console.log(encontrarNumero(105)); // 105
console.log(encontrarNumero(140)); // 140
    