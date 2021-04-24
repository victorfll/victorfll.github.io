function botoes(){
	//definir ações dos botões do menu
	let links = document.querySelectorAll("nav.menu a")
	for (var link of links) {
		link.addEventListener("click", function () {
			mudatela(this);
		});
	}
}

function mudatela (target) { 
//mudar tela significa esconder todas as telas e mostr somente a que esta ativa
	desativar(); //mandando desativar tudo antes de ativar qualquer outra coisa
	target.classList.add( "ativo");
	let tela = target.href;
	tela = tela.split ("#");
	tela = tela[tela.length - 1];
	
	document.querySelector("div#"+tela).classList.add("ativo");
}


function desativar (){
	//desativar tudo que estiver Ativo
let telaAtiva = document.querySelector(".tela.ativo").classList.remove("ativo");
}



botoes();