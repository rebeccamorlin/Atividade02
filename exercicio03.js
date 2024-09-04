/*
Exercício: Crie uma função chamada tabuada que receba um número e retorne a tabuada
desse número até 10.
Desafio adicional: Faça com que a função também aceite um parâmetro para o número
máximo da tabuada.

*/

function tabuada(numero, max = 10) { 
    for (let i = 1; i <= max; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// testes
tabuada(5); // tabuada do 5 que vai com o valor maximo estipulado na função, o 10
tabuada(3, 12); // tabuada do 3 com o valor estipulado no teste, o 12
