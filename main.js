const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Você prefere atividades mais criativas ou analíticas?",
        alternativas: [
            {
                texto: "  Prefiro pensar de forma criativa, buscando novas soluções e inovações",
                afirmacao: [
                    "Sua inclinação para a criatividade é um excelente sinal para áreas como design, publicidade ou desenvolvimento de produtos.",
                    "Você se destaca em funções que exigem pensamento fora da caixa, como marketing digital, desenvolvimento de novas tecnologias ou design de experiências."
                ]
            },
            {
                texto: "  Gosto de analisar dados, planejar e tomar decisões baseadas em lógica e estrutura.",
                afirmacao: [
                    "Você se destaca em ambientes estruturados e analíticos, sendo mais indicado para áreas como engenharia, finanças ou TI.",
                    "Sua habilidade em pensar de forma lógica e estratégica é fundamental para cargos que exigem precisão e organização, como contabilidade, gestão de projetos ou análise de dados."
                ]
            }
        ]
    },
    {
        enunciado: "Você gosta de lidar diretamente com pessoas?",
        alternativas: [
            {
                texto: "  Sim, me sinto à vontade para interagir, ajudar e até persuadir outras pessoas.",
                afirmacao: [
                    " Você tem facilidade em se comunicar e criar conexões, sendo ideal para vendas, psicologia, recursos humanos ou atendimento ao cliente.",
                    "Sua habilidade de interagir com diferentes tipos de pessoas é uma grande vantagem em áreas que exigem empatia e persuasão, como coaching, consultoria ou gestão de equipes."
                ]
            },
            {
                texto: " Prefiro atividades que envolvem mais foco individual e menos interação direta.",
                afirmacao: [
                    "Sua habilidade em se concentrar no trabalho individual faz de você uma pessoa qualificada para áreas como programação, escrita técnica ou pesquisa científica.",
                    "Você se destaca em funções onde a independência e a análise profunda são valorizadas, como design gráfico, desenvolvimento de software ou análise de mercado."
                ]
            }
        ]
    },
    {
        enunciado: " Como você lida com situações de pressão?",
        alternativas: [
            {
                texto: " Consegue me manter calmo e encontrar soluções rápidas quando há prazos apertados. ",
                afirmacao: [
                    "Sua capacidade de tomar decisões rápidas sob pressão é essencial em áreas como jornalismo, consultoria empresarial ou gestão de crises.",
                    "Você tem um perfil que brilha em ambientes de alta intensidade, sendo adequado para cargos que exigem rapidez e assertividade, como operações de emergência, vendas de alto impacto ou gestão de riscos."
                ]
            },
            {
                texto: " Prefiro um ritmo de trabalho mais controlado, com tempo suficiente para planejamento e execução.",
                afirmacao: [
                    "Você é mais eficaz em ambientes planejados e organizados, se destacando em gestão de projetos, pesquisa acadêmica ou contabilidade.",
                    "Sua abordagem meticulosa e focada na execução cuidadosa torna você ideal para cargos que exigem atenção aos detalhes e previsibilidade, como administração, pesquisa científica ou gestão financeira."
                ]
            }
        ]
    },
    {
        enunciado: "Você tem facilidade para aprender novas habilidades rapidamente?",
        alternativas: [
            {
                texto: "   Sim, tenho facilidade em absorver novos conhecimentos e me adaptar a mudanças. ",
                afirmacao: [
                    "Seu aprendizado rápido é um trunfo para carreiras dinâmicas e em constante evolução, como tecnologia, startups ou consultoria estratégica.",
                    "Sua habilidade de se adaptar rapidamente é um grande diferencial em ambientes que exigem flexibilidade e inovação, como marketing digital, desenvolvimento de software ou consultoria empresarial."
                ]
            },
            {
                texto: " Prefiro me aprofundar em áreas que já conheço e melhorar constantemente minhas habilidades.",
                afirmacao: [
                    " Você é excelente em se especializar e se tornar um expert em um campo específico, sendo ideal para engenharia, medicina ou direito.",
                    "Sua capacidade de dominar profundamente um assunto faz de você uma excelente opção para funções que exigem expertise, como pesquisa acadêmica, advocacia ou especializações técnicas."
                ]
            }
        ]
    },
     {
        enunciado: " Você prefere ambientes mais estruturados ou mais flexíveis?",
        alternativas: [
            {
                texto: "   Prefiro seguir processos e protocolos bem definidos, com metas claras e objetivos organizados.",
                afirmacao: [
                    " Sua preferência por ambientes organizados sugere que você é ideal para áreas administrativas, finanças ou logística.",
                    ""
                ]
            },
            {
                texto: " Prefiro um ambiente de trabalho mais flexível, onde eu possa explorar novas abordagens e criar soluções fora da caixa.",
                afirmacao: [
                    " Você se adapta bem a ambientes inovadores e pode se destacar em áreas criativas, design ou empreendedorismo.",
                    ""
                ]
            }
        ]
    },
    {
        enunciado: " Você se considera um líder ou um colaborador?",
        alternativas: [
            {
                texto: "  Me vejo liderando, motivando a equipe e sendo responsável por guiar o grupo em direção aos objetivos.",
                afirmacao: [
                    " Seu perfil de liderança é perfeito para gestão de equipes, empresas ou consultoria. Você tem o potencial para coordenar projetos e liderar mudanças.",
                    ""
                ]
            },
            {
                texto: "Prefiro seguir orientações de um líder, contribuindo com meu trabalho para o sucesso coletivo.",
                afirmacao: [
                    "Sua capacidade de ser um ótimo colaborador é ideal para funções técnicas ou especializadas, como engenharia, pesquisa ou TI.",
                    ""
                ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
     const botaoAlternativas = document.createElement("button");
     botaoAlternativas.textContent = alternativa.texto;
     botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
     caixaAlternativas.appendChild(botaoAlternativas);
 }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();