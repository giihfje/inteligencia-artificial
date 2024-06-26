const caixaPrincipal = document.querySelector('.caixa-principla');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');
const lista = [item1, item2]
const perguntas = [
    {
        enunciado: "Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?
",
        alternativas: [", "alternativa 2"],
    },
    {
        enunciado: "Você decide o futuro da IA
Com a descoberta desta tecnologia uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma?
Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.
Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        alternativas: ["Alternativa 1", "alternativa 2"],
    },
    {
        enunciado: "Pertunga 3",
        alternativas: ["Alternativa 1", "alternativa 2"],
    },
    {
        enunciado: "Pergunta 4";
        alternativas:["alternativa 1", "alternativa2"]
    }
];
let atual = 0;
let perguntaAtual;
function mostraPergunta(){
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas{
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
const lapis = {
    tamanho: 20,
    tipo: 'HB',
    cor: 'Grafite',
    temBorrachaAtras: false
}