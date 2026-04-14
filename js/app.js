// =======================
// CADASTRO DE USUÁRIO
// =======================

const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = formCadastro.querySelectorAll("input")[0].value;
        const usuario = formCadastro.querySelectorAll("input")[1].value;
        const senha = formCadastro.querySelectorAll("input")[2].value;

        if (nome === "" || usuario === "" || senha === "") {
            alert("Preencha todos os campos.");
            return;
        }

        const usuarioObj = {
            nome: nome,
            usuario: usuario,
            senha: senha
        };

        localStorage.setItem("usuario", JSON.stringify(usuarioObj));

       localStorage.setItem("usuarioLogado", JSON.stringify(usuarioSalvo));
       window.location.href = "dashboard.html";

    });
}

// =======================
// LOGIN
// =======================

const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const usuarioDigitado = formLogin.querySelector('input[type="text"]').value;
        const senhaDigitada = formLogin.querySelector('input[type="password"]').value;

        const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

        if (!usuarioSalvo) {
            alert("Nenhum usuário cadastrado.");
            return;
        }
if (
    usuarioDigitado === usuarioSalvo.usuario &&
    senhaDigitada === usuarioSalvo.senha
) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioSalvo));
    window.location.href = "dashboard.html";
} else {
    alert("Usuário ou senha incorretos.");
}

    });
}
