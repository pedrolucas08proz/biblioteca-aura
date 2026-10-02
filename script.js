var tamanhoFonte = 16;

function aumentarFonte() {
    tamanhoFonte = tamanhoFonte + 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    tamanhoFonte = tamanhoFonte - 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function mudarContraste() {
    document.body.classList.toggle("alto-contraste");
}

function verificarAudio() {
    var opcao = document.getElementById("suporteAudio").value;
    if (opcao == "sim") {
        alert("Suporte de Áudio ativado! O leitor receberá os livros em formato de Audiobook.");
    }
}

function ouvirExplicacao() {
    window.speechSynthesis.cancel();
    var mensagem = new SpeechSynthesisUtterance("Se você possui dificuldade visual ou de locomoção, selecione a opção Sim para receber nossos livros em áudio.");
    mensagem.lang = "pt-BR";
    window.speechSynthesis.speak(mensagem);
}

function ouvirLivro(textoDoLivro) {
    window.speechSynthesis.cancel();
    var leitura = new SpeechSynthesisUtterance(textoDoLivro);
    leitura.lang = "pt-BR";
    window.speechSynthesis.speak(leitura);
}

function cadastrar(event) {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
}