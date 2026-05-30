// Seleciona os elementos do HTML
const conteudos = document.getElementById('carrosel_conteudo');
const cards = document.querySelectorAll('.texto_carrosel');
const indicadores = document.querySelector('.indicadores');

// Índice do card atualmente exibido
let index = 0;

// Cria os pontinhos de navegação
cards.forEach((_, i) => { // _  não será usada
    indicadores.innerHTML += `
        <span class="ponto ${i === 0 ? 'ativo' : ''}"></span>
    `;
});

// Seleciona todos os pontinhos criados
const pontos = document.querySelectorAll('.ponto');

/*
    Função responsável por:
    - Mostrar o card correto
    - Atualizar o pontinho ativo
*/
function mostrar(i) {

    // Atualiza o índice atual
    index = i;

    // Move o carrossel horizontalmente
    conteudos.style.transform = `translateX(-${index * 100}%)`;

    // Remove a classe ativo de todos os pontinhos
    pontos.forEach(ponto => ponto.classList.remove('ativo'));

    // Adiciona a classe ativo ao pontinho atual
    pontos[index].classList.add('ativo');
}

// Botão próximo
document.querySelector('.next').onclick = () =>
    mostrar((index + 1) % cards.length);

/*
    % cards.length faz o carrossel voltar
    para o primeiro card quando chegar ao último
*/


// Botão anterior
document.querySelector('.prev').onclick = () =>
    mostrar((index - 1 + cards.length) % cards.length);

/*
    + cards.length evita índice negativo
    quando estiver no primeiro card
*/


// Permite navegar clicando nos pontinhos
pontos.forEach((ponto, i) => {

    ponto.onclick = () => {
        mostrar(i);
    };

});


// Troca automática a cada 4 segundos
setInterval(() => {

    mostrar((index + 1) % cards.length);

}, 4000);