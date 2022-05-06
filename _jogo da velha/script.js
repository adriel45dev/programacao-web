/*
 Jogo da Velha
 - Programação WEB
*/
var casas, jogadorAtual;

/* selecionar todos os elementos quem tem a classe c*/
casas = document.querySelectorAll('.c');
jogadorAtual = 0;


/* função jogo */
function jogo(e){

	var casa = e.target;
	casa.textContent = "X";
}

for(var i = 0; i < casas.length; i++){
	/* adiciona um evento de escuta para cada elemento*/
	casas[i].addEventListener("click", jogo);
}
/* obs: length significa o tamanho da lista de elementos */