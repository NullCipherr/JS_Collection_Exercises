// Exercicio 7 - Arrays
//
// Array de Datas
//
// Crie um array com datas no formato "DD/MM/AAAA", como ["01/01/2020", "15/05/2021", "10/03/2019"].
// Utilize o método sort para ordenar as datas em ordem cronológica (converta para objetos Date se necessário).
// Utilize o método pop para remover a última data e exiba o array resultante.

let datas = ["01/01/2020", "15/05/2021", "10/03/2019", "25/12/2022", "30/06/2023", "30/06/2010", "20/11/2024"];

datasOrdenadas = datas.sort((a, b) => new Date(a.split("/").reverse().join("-")) - new Date(b.split("/").reverse().join("-")));

console.log("Datas: " + datas);

console.log("Datas Ordenadas: " + datasOrdenadas);