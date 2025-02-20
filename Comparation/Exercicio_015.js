// Exercicio 15 
//
// Crie uma função que encontra o maior número entre três, vamos classificar esse número como positivo, negativo ou zero.

// Função que encontra o maior número entre três
function encontraMaior(num1, num2, num3)
{
    const resultado = num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num3 : num3 ;
    return resultado ;
}

// Função que classifica o número
function classificaNumero(num)
{
    const resultado = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero" ;
    return resultado ;
}

// Função que encontra o maior número entre três e classifica
function encontraMaiorClassifica(num1, num2, num3)
{
    const maior = encontraMaior(num1, num2, num3) ;
    const classificacao = classificaNumero(maior) ;
    return classificacao ;
}

// Testes
console.log(encontraMaiorClassifica(1, 2, 3)) ; // Positivo
console.log(encontraMaiorClassifica(-1, -2, -3)) ; // Negativo
console.log(encontraMaiorClassifica(0, 0, 0)) ; // Zero
console.log(encontraMaiorClassifica(1, -2, 3)) ; // Positivo
console.log(encontraMaiorClassifica(-1, 2, -3)) ; // Positivo