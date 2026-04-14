// Captura os elementos da tela
const mensagem = document.getElementById("mensagemBoasVindas");
const botaoSair = document.getElementById("btnSair");

// Busca o usuário logado no localStorage
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

// Se não houver usuário logado, volta para o login
if (!usuarioLogado) {
    window.location.href = "index.html";
} else {
    mensagem.innerText = `Bem-vindo, ${usuarioLogado.nome}!`;
}

// Evento do botão Sair
botaoSair.addEventListener("click", function () {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
});
