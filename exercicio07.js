/*
Exercício: Implemente uma função chamada filtrarPares que receba um array de números
e retorne um novo array contendo apenas os números pares.
Desafio adicional: Adicione uma função para retornar os números ímpares também.
*/

function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

function filtrarImpares(array) {
    return array.filter(numero => numero % 2 !== 0);
}

// testes
console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  // [2, 4, 6, 8, 10]
console.log(filtrarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]