const caixaPrincipal = document.querySelector('.caixa-principla');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');
const lista = [item1, item2]
const perguntas = [
    {
        enunciado: "Pertunga 1",
        alternativas: ["Alternativa 1", "alternativa 2"],
    },
    {
        enunciado: "Pertunga 2",
        alternativas: ["Alternativa 1", "alternativa 2"],
    },
    {
        enunciado: "Pertunga 3",
        alternativas: ["Alternativa 1", "alternativa 2"],
    },
];
const lapis = {
    tamanho: 20,
    tipo: 'HB',
    cor: 'Grafite',
    temBorrachaAtras: false
}