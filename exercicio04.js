/*
Exercício: Escreva uma função chamada somaArray que receba um array de números e
retorne a soma de todos os elementos.
Desafio adicional: Crie uma versão da função que aceite um segundo parâmetro para
multiplicar cada número antes de somar.
*/

function somaArray(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

// testes
console.log(somaArray([1, 2, 3, 4, 5]));  // resultado esperado: 15
console.log(somaArray([10, 20, 30]));     // resultado esperado: 60
console.log(somaArray([10, 9, 8, 7]));     // resultado esperado: 34