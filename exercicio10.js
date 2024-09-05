/*
Exercício: Desenvolva uma função chamada simularFetch que retorna uma promise
resolvida após um atraso de 2 segundos com uma mensagem "Dados recebidos". Use
async/await para consumir essa promise e exiba a mensagem no console.
Desafio adicional: Adicione tratamento de erro com um bloco try/catch
*/

function simularFetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados recebidos"); 
        }, 2000);
    });
}

async function consumirDados() {
    try {
        const resultado = await simularFetch();  
        console.log(resultado);  
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

consumirDados();
