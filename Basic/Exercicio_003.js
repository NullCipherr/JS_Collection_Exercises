// Manipulação de Arrays
// Crie uma função chamada inverterArray que recebe um array como parâmetro e retorna um novo array com os elementos na ordem inversa. Não use o método reverse() do JavaScript.

// Função que inverte um array
function inverterArray(array)
{
    let newArray = [] ;

    for(let i = array.length - 1; i >= 0 ; i--)
    {
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(inverterArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(inverterArray([1, 2, 3])); // [3, 2, 1]
console.log(inverterArray(["a", "b", "c"])); // Deve imprimir ["c", "b", "a"]
console.log(inverterArray([])); // Deve imprimir []