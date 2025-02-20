// Exercicio 5 - Fatorial de um Número
// Crie uma função chamada calcularFatorial que recebe um número inteiro positivo como parâmetro e retorna o fatorial desse número. 
// O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o número em questão. 
// Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120.

// Função calcularFatorial
function calcularFatorial(num)
{
    // Verifica se o número é 0, se for retorna 1
    if(num == 0)
    {
        return 1;
    }
    
    let fatorial = 1;
    for(let i = num; i > 0 ; i--)
    {
        fatorial *= i;
    }

    return fatorial;
}

// Função calcularFatorial com recursividade
function calcularFatorialRecursive(num)
{
    if (num == 0 )
    {
        return 1;
    }
    return num * calcularFatorialRecursive(num - 1);
}

// Teste da função calcularFatorial
console.log(calcularFatorial(5)); // 120
console.log(calcularFatorial(4)); // 24
console.log(calcularFatorial(3)); // 6
console.log(calcularFatorial(2)); // 2
console.log(calcularFatorial(1)); // 1
console.log(calcularFatorial(0)); // 1
console.log(calcularFatorial(10)); // 3628800