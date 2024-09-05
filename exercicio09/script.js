const botao = document.getElementById("meuBotao");
const paragrafo = document.getElementById("meuParagrafo");

let contador = 0;

botao.addEventListener("click", function() {
    contador++;  
    paragrafo.textContent = `O botão foi clicado ${contador} vezes.`;  
});
