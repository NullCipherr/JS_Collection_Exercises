// Exercicio 2: Verificação de números primos
// Crie uma função chamada verificaPrimo que recebe um número como parâmetro e retorna true se ele for primo e false se não for.
// Um numero primo é um número que é divisível somente por 1 e por ele mesmo, ou seja, deve possuir 2 divisores possíveis. (1 e ele mesmo)

// Função que verifica se um número é primo
function verificadorPrimo(num)
{
    if(num <= 1)
    {
        return false ;
    }
    else if(num == 2)
    {
        return true ;
    }
    else
    {
        // Para números maiores que 2, a função verifica se há algum divisor entre 2 e num - 1.
        for(let i = 2; i < num; i++)
        {
            // Se encontrar algum número i que divide num sem resto (num % i == 0), significa que num não é primo, então a função retorna false imediatamente.
            if(num % i == 0)
            {
                return false ;
            }

        }
        return true ; // Se o laço terminar sem encontrar nenhum divisor, significa que num é primo e retorna true.
    }
}

// Função que verifica se um número é primo (Versão otimizada)
function verificadorPrimoO(num) {
    if (num < 2) return false; // 0 e 1 não são primos
    if (num == 2) return true; // 2 é primo

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


// Testes da função verificadorPrimo
console.log("=== Verificação de Números Primos ===") ;
console.log("Número 1 > " + verificadorPrimo(1)) ; // false, pois o numero 1 possui apenas 1 divisor (Ele mesmo).
console.log("Número 2 > " + verificadorPrimo(2)) ; // true, pois o numero 2 possui 2 divisores (1 e ele mesmo). além disso, é o menor número primo e o único primo par.
console.log("Número 3 > " + verificadorPrimo(3)) ; // true
console.log("Número 4 > " + verificadorPrimo(4)) ; // false
console.log("Número 5 > " + verificadorPrimo(5)) ; // true
console.log("Número 6 > " + verificadorPrimo(6)) ; // false
console.log("Número 7 > " + verificadorPrimo(7)) ; // true
console.log("Número 8 > " + verificadorPrimo(8)) ; // false
console.log("Número 9 > " + verificadorPrimo(9)) ; // false
console.log("Número 10 > " + verificadorPrimo(10)) ; // false
console.log("Número 11 > " + verificadorPrimo(11)) ; // true
console.log("Número 12 > " + verificadorPrimo(12)) ; // false
console.log("Número 13 > " + verificadorPrimo(13)) ; // true
console.log("Número 14 > " + verificadorPrimo(14)) ; // false
console.log("Número 15 > " + verificadorPrimo(15)) ; // false