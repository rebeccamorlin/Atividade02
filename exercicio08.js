/*
Exercício: Crie uma função chamada adicionarPropriedade que adicione uma nova
propriedade a um objeto existente e retorne o objeto atualizado.
Desafio adicional: Adicione uma verificação para garantir que a propriedade não existe
antes de adicioná-la.
*/

let carro = { 
    marca: "Toyota", 
    modelo: "Corolla", 
    ano: 2006 
};

function adicionarPropriedade(objeto, tipo, valor) {
    if (objeto.hasOwnProperty(tipo)) {  
        return `A propriedade "${tipo}" já existe.`;
    } else {
        objeto[tipo] = valor;  
        return objeto;  
    }
}

// testes

//propriedade nova 'cor'
console.log(adicionarPropriedade(carro, "cor", "preta"));


// propriedade nova 'quantldade de portas'
console.log(adicionarPropriedade(carro, "quantidade de portas", 4));

//propriedade já existente
console.log(adicionarPropriedade(carro, "marca", "Honda"));


