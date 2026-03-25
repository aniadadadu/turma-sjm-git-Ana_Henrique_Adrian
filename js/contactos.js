function mostrarMensagem(texto, tipo) {
    const div = document.getElementById("mensagemStatus");

    div.textContent = texto;
    div.className = "";
    div.classList.add(tipo);
    div.style.display = "block";
}

document.getElementById("btnSubmit").addEventListener("click", function(event) {
    event.preventDefault();

    const primeiroNome = document.getElementById("primeiroNome").value.trim();
    const ultimoNome = document.getElementById("ultimoNome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (primeiroNome === "" || ultimoNome === "" || email === "" || mensagem === "") {
        mostrarMensagem("Preenche todos os campos obrigatórios!", "erro");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mostrarMensagem("Email inválido!", "erro");
        return;
    }

    mostrarMensagem("Formulário enviado com sucesso!", "sucesso");

    document.getElementById("primeiroNome").value = "";
    document.getElementById("ultimoNome").value = "";
    document.getElementById("morada").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
});