/*
Exercício: Desenvolva uma função chamada reverterString que receba uma string e retorne
a string invertida.
Desafio adicional: Faça uma função que também remova espaços em branco no início e no
fim da string antes de reverter.

*/

function reverterString(string) {
    return string.trim().split('').reverse().join('');
}

// Testando a função
console.log(reverterString("  Rebecca  "));  
console.log(reverterString("     Prof Alessandro     "));      
console.log(reverterString("  Programação Web"));
