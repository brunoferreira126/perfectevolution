// Scroll Suave para Seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Seleciona o botão hambúrguer e o menu de navegação
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Adiciona o evento de clique
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna a classe 'active' para abrir/fechar o menu
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    // Verifica se o clique foi fora do botão hambúrguer e do menu
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active'); // Remove a classe 'active' para fechar o menu
    }
});

// Dados das imagens de cada projeto
const imagensProjeto = {
    1: [
        "imagens/projetos/rf 1.png",
        "imagens/projetos/rf 2.png",
        "imagens/projetos/rf 3.png",
        "imagens/projetos/rf 4.png",
        "imagens/projetos/rf 5.png",
        "imagens/projetos/rf 6.png"
    ],
    2: [
        "imagens/projetos/seleta 1.png",
        "imagens/projetos/seleta 2.jpg",
        "imagens/projetos/seleta 3.png",
        "imagens/projetos/seleta 4.png",
        "imagens/projetos/seleta 5.jpeg",
        "imagens/projetos/seleta 6.jpeg",
        "imagens/projetos/seleta 7.png",
        "imagens/projetos/seleta 8.png"
    
    ],
    3: [
        "imagens/projetos/four 1.png",
        "imagens/projetos/four 2.png",
        "imagens/projetos/four 3.jpeg",
        "imagens/projetos/four 4.jpeg",
        "imagens/projetos/four 5.png"
        
    ]
};

// Variáveis de controle do carrossel
let imagensAtuais = [];
let indiceAtual = 0;

// Função para abrir o carrossel
function abrirCarrossel(projeto) {
    imagensAtuais = imagensProjeto[projeto];
    indiceAtual = 0;

    document.getElementById("carrossel-imagem").src = imagensAtuais[indiceAtual];
    document.getElementById("modal-carrossel").style.display = "flex";
}

// Função para fechar o carrossel
function fecharCarrossel() {
    document.getElementById("modal-carrossel").style.display = "none";
}

// Função para mudar a imagem no carrossel
function mudarImagem(direcao) {
    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = imagensAtuais.length - 1; // Volta para a última imagem
    } else if (indiceAtual >= imagensAtuais.length) {
        indiceAtual = 0; // Volta para a primeira imagem
    }

    document.getElementById("carrossel-imagem").src = imagensAtuais[indiceAtual];
}


// Validação do Formulário
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});
