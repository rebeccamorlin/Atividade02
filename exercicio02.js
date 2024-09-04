/*
Exercício: Escreva uma função chamada maiorDeIdade que receba uma idade e retorne
true se a pessoa for maior de idade (18 anos ou mais) e false caso contrário.
Desafio adicional: Adicione mensagens personalizadas para diferentes faixas etárias.
*/

function maiorDeIdade(idade) {
    if (idade < 13) {
        return "Você é criança e menor de idade.";
    } 
    else if (idade >= 13 && idade < 18) { 
        return "Você é adolescente e menor de idade.";
    }
    else if (idade >= 18 && idade < 60) {
        return "Você é adulto e maior de idade.";
    }
    else {
        return "Você é idoso e maior de idade.";
    }
} 

// Testes
console.log(maiorDeIdade(21));  // "Você é adulto e maior de idade."
console.log(maiorDeIdade(17));  // "Você é adolescente e menor de idade."
console.log(maiorDeIdade(10));  // "Você é criança e menor de idade."
console.log(maiorDeIdade(71)); // "Você é idoso e maior de idade"

