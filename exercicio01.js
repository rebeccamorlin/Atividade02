
/*
Exercício: Crie uma função chamada tipoDeDado que receba um valor e retorne uma string
indicando o tipo do dado (por exemplo, "string", "number", "boolean", etc.).
Desafio adicional: Inclua casos para arrays e objetos.
*/

function tipoDeDado(valor) {
    if (Array.isArray(valor)) {
        return "array"; 
    } else if (valor !== null && typeof valor === "object") {
        return "object"; 
    } else {
        return typeof valor; 
    }
}

// Testes
console.log(tipoDeDado(21)); // "retorno esperado: number"
console.log(tipoDeDado("Teste")); // "retorno esperado: string"
console.log(tipoDeDado(false)); // "retorno esperado: boolean"
console.log(tipoDeDado([1, 2, 3, 4])); // "retorno esperado: array"
console.log(tipoDeDado({nome: "Rebecca", idade: 21})); // "retorno esperado: object"
 