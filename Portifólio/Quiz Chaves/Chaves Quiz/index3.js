const questions = [
    {
        question: "1 - Qual o nome do episódio em que o Quico ganha um gato?",
        answers: [
            {text: "O atropelamento",correct:false},
            {text: "A casa da Bruxa do 71",correct:false},
            {text: "Era uma vez um gato",correct:true},
            {text: "O aniversário do Quico",correct:false}
        ]
    },
    {
        question: "2 - Como era o nome do restaurante da Dona Florinda antes de ser dela?",
        answers: [
            {text: "Rica Pancita",correct:false},
            {text: "Fonda",correct:true},
            {text: "Bar do Chespirito",correct:false},
            {text: "Venda da Esquina",correct:false}
        ]
    },
    {
        question: "3 - Como se chama o careca que queria comprar a vila?",
        answers: [
            {text: "Sr. Calvo",correct:false},
            {text: "Cuca Lisinha",correct:false},
            {text: "Sr. Calvillo",correct:true},
            {text: "Sr. Carequinha",correct:false}
        ]
    },
    {
        question: "4 - De que cidade era o tecido que o Seu Madruga ganha em uma rifa?",
        answers: [
            {text: "Taubaté",correct:true},
            {text: "Piracicaba",correct:false},
            {text: "Guarulhos",correct:false},
            {text: "Santos",correct:false}
        ]
    },
    {
        question: "5 - Qual desses não é um ingrediente da fórmula da invisibilidade que Chiquinha ensina a Chaves e Quico?",
        answers: [
            {text: "Óleo de Rícino",correct:false},
            {text: "Vinagre",correct:false},
            {text: "Pimenta",correct:false},
            {text: "Katchup",correct:true}
        ]
    },
    {
        question: "6 - De qual ator famoso Chiquinha espera receber uma carta no episódio Nasce uma Bisavó?",
        answers: [
            {text: "Marlon Brando",correct:false},
            {text: "John Travolta",correct:true},
            {text: "Al Pacino",correct:false},
            {text: "Harison Ford",correct:false}
        ]
    },
    {
        question: "7 - Onde morava a irmã de Dona Clotilde?",
        answers: [
            {text: "Londres",correct:false},
            {text: "Berlim",correct:false},
            {text: "Paris",correct:true},
            {text: "Roma",correct:false}
        ]
    },
    {
        question: "8 - Quais os sabores dos refrescos do Chaves?",
        answers: [
            {text: "Groselha, limão e tamarindo",correct:true},
            {text: "Abacaxi, limão e groselha",correct:false},
            {text: "Groselha, limão e maçã",correct:false},
            {text: "Laranja, limão e manga",correct:false}
        ]
    },
    {
        question: "9 - Segundo a Dona Neves, quantos inquilinos moram na vila?",
        answers: [
            {text: "87",correct:false},
            {text: "64",correct:false},
            {text: "89",correct:false},
            {text: "78",correct:true}
        ]
    },
    {
        question: "10 - Qual o brinquedo que Quico mais quer ganhar?",
        answers: [
            {text: "Bonequinho do Chapolin",correct:false},
            {text: "Bola quadrada",correct:true},
            {text: "Video Game",correct:false},
            {text: "Triciclo",correct:false}
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