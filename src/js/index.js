/*

Objetivo 1 - quando clicarmos na seta de avanãr temos que mostar o proximo cartão da lisata
	- passo1 - dar um jeito de pegar o elemento HTML da seta avançar
	- passo 2 - dar um jeito de indentificar o clique do usuario na seta avançar
		- passo 3 - fazer aparecer o próximo cartão da lista
		- passo 4 - buscar o cartão que selecionado e esconder

Objetivo 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
	- passo 1 - dar um jeito de pegar o elemento HTML da seta voltar 
	- passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
	- passo 3 - fazer aparecer o cartão aterior da lista 
		- passo 4 - buscar o cartão que esta seleionado e esconder 

*/

// Objetivo 1 - quando clicarmos na seta de avanãr temos que mostar o proximo cartão da lisata
// - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");

// - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar 
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// - passo 2 - dar um jeito de indentificar o clique do usuario na seta avançar
btnAvancar.addEventListener("click", function () {
	const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
	if (ehUltimoCartao) return;

	// - passo 4 - buscar o cartão que esta seleionado e esconder 
	esconderCartaoSelecionado();

	// - passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nela
	cartaoAtual++;
	mostrarCartao();
});

// Objetivo 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista

// - passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
btnVoltar.addEventListener("click", function () {
	const ehPrimeiroCartao = cartaoAtual === 0;
	if (ehPrimeiroCartao) return;

	esconderCartaoSelecionado();

	// - passo 3 - fazer aparecer o cartão aterior da lista 
	cartaoAtual--;
	mostrarCartao();
});

function mostrarCartao() {
	cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
	const cartaoSelecionado = document.querySelector(".selecionado");
	cartaoSelecionado.classList.remove("selecionado");
}
