//Perguntas do nível 1/Level one's questions

const questions = [
    {
        question: "1 - Qual desses personagens não é um vilão?",
        answers: [
            {text: "Tripa Seca",correct:false},
            {text: "Quase Nada",correct:false},
            {text: "Seu Mundinho",correct:true},
            {text: "Alma Negra",correct:false}
        ]
    },
    {
        question: "2 - Qual o formato do escudo no peito do Chapolin?",
        answers: [
            {text: "Quadrado",correct:false},
            {text: "Circulo",correct:false},
            {text: "Estrela",correct:false},
            {text: "Coração",correct:true}
        ]
    },
    {
        question: "3 - Qual dessas não é uma arma do Chapolin?",
        answers: [
            {text: "Espada Justiceira",correct:true},
            {text: "Anteninhas de Vinil",correct:false},
            {text: "Marreta Bionica",correct:false},
            {text: "Corneta Paralisadora",correct:false}
        ]
    },
    {
        question: "4 - Como se chama a arma que faz Chapolin diminuir de tamanho?",
        answers: [
            {text: "Raio encolhedor",correct:false},
            {text: "Pastilhas de Polegarina",correct:true},
            {text: "Poder formiga",correct:false},
            {text: "Vitamina encolhedora",correct:false}
        ]
    },
    {
        question: "5 - Qual desses não é um bordão do Chapolin?",
        answers: [
            {text: "Suspeitei desde o princípio",correct:false},
            {text: "Aproveitam-se da minha nobreza",correct:false},
            {text: "Time's money, oh yeah",correct:true},
            {text: "Vou fulminá-lo a golpes da minha marreta biônica",correct:false}
        ]
    },
    {
        question: "6 - O que o Chapolin diz quando quer que alguém o siga?",
        answers: [
            {text: "Venham comigo",correct: false},
            {text: "Sigam-me os maus",correct:false},
            {text: "Sigam-me os valentes",correct:false},
            {text: "Sigam-me os bons",correct:true}
        ]
    },
    {
        question: "7 - Qual desses vilões é um pirata?",
        answers: [
            {text: "Alma Negra",correct:true},
            {text: "Racha Cuca",correct:false},
            {text: "Tripa Seca",correct:false},
            {text: "Quase Nada",correct:false}
        ]
    },
    {
        question: "8 - Qual dessas comparações nunca foi dita na narração de abertura do Chapolin?",
        answers: [
            {text: "Mais forte que um rato",correct:false},
            {text: "Mais rápido que uma tartaruga",correct:false},
            {text: "Mais nobre que uma sardinha",correct:false},
            {text: "Mais alto que um gnomo",correct:true}
        ]
    },
    {
        question: "9 - No episódio Os Documentos Confidenciais, onde estavam escondidos os documentos?",
        answers: [
            {text: "Dentro de uma pizza",correct:false},
            {text: "Dentro de um bolo",correct:true},
            {text: "Dentro de uma lasanha",correct:false},
            {text: "Dentro de um pudim",correct:false}
        ]
    },
    {
        question: "10 - Em que cenário aparece o vilão Racha Cuca?",
        answers: [
            {text: "Casa Mal Assombrada",correct:false},
            {text: "Acampamento",correct:false},
            {text: "Navio Pirata",correct:false},
            {text: "Velho Oeste",correct:true}
        ]
    },
    ]

const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContaner = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (currentQuestionIndex == 10) {
       return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer =>{
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if(answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContaner.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    while($answersContaner.firstChild) {
        $answersContaner.removeChild($answersContaner.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}


function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalCorrect++
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if(button.dataset.correct) {
            button.classList.add("correct")
        }else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })
    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = 10
    const performance = Math.floor(totalCorrect *100 / totalQuestion)

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excelente XD"
            break
        case(performance >=70):
            message = "Muito Bom :D"
            break
        case(performance >=50):
            message = "Bom :)"
            break
        default:
            message = "Pode melhorar :("
    }

$questionsContainer.innerHTML =
`   
    <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestion} questões!
        <span>Resultado: ${message}</span>
    </p>
    <button onclick=window.location.reload() class="button">Refazer Quiz</button>
    <button onclick=backhome() class="button">Escolher outro nível</button>

`   
}

function backhome(){
    window.location.href = "index.html";
}