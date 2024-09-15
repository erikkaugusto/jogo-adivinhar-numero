const botaoChutar = document.querySelector(".botao");
const paragrafoDica = document.querySelector(".campo-dica");
const campoInput = document.querySelector(".input");
const campoTentativas = document.querySelector(".texto-tentativas");

let numeroSorteado = Math.floor(Math.random() * 1000) + 1;
console.log(numeroSorteado);

let numTentativas = 0;
botaoChutar.addEventListener("click", () => {
    let valorChutado = campoInput.value;
    if (valorChutado < 1 || valorChutado > 1000) {
        alert("Número inválido! Por favor insira um número entre 1 e 1000.");
        campoInput.value = "";
    } else {
        numTentativas++;
        campoTentativas.innerHTML = `Número de tentativas: ${numTentativas}`
        if (valorChutado < numeroSorteado) {
            paragrafoDica.innerHTML = "DICA: O número secreto é maior!";
        } else if (valorChutado > numeroSorteado) {
            paragrafoDica.innerHTML = "DICA: O número secreto é menor!";
        } else {
            paragrafoDica.innerHTML = `<p><span class="acerto">PARABÉNS!</span> Você adivinhou o número secreto em ${numTentativas} tentativa(s)</p>
            \n<button id="jogar-novamente">Jogar novamente</button>`;
        }
    }
});

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})