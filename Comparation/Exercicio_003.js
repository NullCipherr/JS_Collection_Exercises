// Exercicio 3 - Classificação de Idade
// 
// Crie uma função chamada classificarIdade que recebe a idade de uma pessoa e retorna uma string indicando se ela é "Criança" (0-12 anos), 
// "Adolescente" (13-17 anos), "Adulto" (18-59 anos) ou "Idoso" (60 anos ou mais).

function classificarIdade(idade)
{
    if(idade >= 0 && idade <= 12)
    {
        return "Criança" ;
    }
    else if(idade >= 13 && idade <= 17)
    {   
        return "Adolescente" ;
    }
    else if(idade >= 18 && idade <= 59){
        return "Adulto" ;
    }
    else if(idade >= 60)
    {
        return "Idoso"
    }
    else{
        return "Idade Inválida"
    }

}

// Teste da função 
console.log(classificarIdade(-1)); // Deve imprimir "Idade Inválida"
console.log(classificarIdade(0)); // Deve imprimir "Criança"
console.log(classificarIdade(8)); // Deve imprimir "Criança"
console.log(classificarIdade(15)); // Deve imprimir "Adolescente"
console.log(classificarIdade(30)); // Deve imprimir "Adulto"
console.log(classificarIdade(65)); // Deve imprimir "Idoso"