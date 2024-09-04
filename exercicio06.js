/*
Exercício: Crie um objeto chamado pessoa com propriedades nome, idade e cidade. Crie
uma função chamada descreverPessoa que retorne uma string descrevendo a pessoa.
Desafio adicional: Adicione uma função que permita atualizar a idade e a cidade da
pessoa.
*/

let pessoa = {
    nome: "Rebecca",        
    idade: 18,           
    cidade: "São Paulo"  
};


function descreverPessoa(pessoa) {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`;
}

function atualizarPessoa(pessoa, novaIdade, novaCidade) {
    pessoa.idade = novaIdade;   
    pessoa.cidade = novaCidade; 
}

// testes
console.log(descreverPessoa(pessoa)); 
// resultado esperado: dados iniciais (rebecca, 18, sãp paulo)

atualizarPessoa(pessoa, 21, "Mogi das Cruzes");

console.log(descreverPessoa(pessoa)); 
// resultado esperado: idade e cidade atualizadas (rebecca, 21, mogi das cruzes)

atualizarPessoa(pessoa, 22, "Porto Alegre");
console.log(descreverPessoa(pessoa));
// resultado esperado: idade e cidade atualizadas (rebecca, 22, porto alegre)