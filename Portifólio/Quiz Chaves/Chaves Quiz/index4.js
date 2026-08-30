const questions = [
    {
        question: "1 - De que ano é o episódio mais antigo de Chaves que se tem registro?",
        answers: [
            {text: "1971",correct:false},
            {text: "1972",correct:true},
            {text: "1973",correct:false},
            {text: "1974",correct:false}
        ]
    },
    {
        question: "2 - Qual foi o último episódio de Chaves como seriado independente?",
        answers: [
            {text: "Os Hospedes do Senhor Barriga",correct:false},
            {text: "Os Ratos no Restaurante",correct:false},
            {text: "Peludinho",correct:false},
            {text: "Antes um Tanque funcionando que uma lavadra encrencada",correct:true}
        ]
    },
    {
        question: "3 - Qual o episódio de Chaves que mais tem remakes?",
        answers: [
            {text: "O Banho do Chaves",correct:true},
            {text: "As Novas Vizinhas",correct:false},
            {text: "A Casa da Bruxa do 71",correct:false},
            {text: "Aula de Canto",correct:false}
        ]
    },
    {
        question: "4 - Como se chama o episódio em que Seu Madruga e Chiquinha moram no 14?",
        answers: [
            {text: "Ama o teu inimigo",correct:false},
            {text: "Zarabatana e Chumbinhos",correct:false},
            {text: "A Moeda Perdida",correct:false},
            {text: "Remédio Duro de Engolir",correct:true}
        ]
    },
    {
        question: "5 - Qual dessas cores de camiseta o Seu Madruga nunca usou?",
        answers: [
            {text: "Preta",correct:false},
            {text: "Verde",correct:true},
            {text: "Branca",correct:false},
            {text: "Amarela",correct:false}
        ]
    },
    {
        question: "6 - Quais desses personagens não são interpretados pelo(a) mesmo(a) ator(atriz)?",
        answers: [
            {text: "Godinez e garçom do restaurante de Acapulco",correct:false},
            {text: "Candida e Elizabeth",correct:true},
            {text: "Pópis e Dona Florinda",correct:false},
            {text: "Seu Calvillo e Garçom do Restaurante da Dona Florinda",correct:false}
        ]
    },
    {
        question: "7 - Antes de Satanás, Dona Clotilde já teve uma cachorrinha. Qual o nome dela?",
        answers: [
            {text: "Canela",correct:true},
            {text: "Bruxinha",correct:false},
            {text: "Pretinha",correct:false},
            {text: "Capetinha",correct:false}
        ]
    },
    {
        question: "8 - Por quanto tempo os moradores ficam na casa do Senhor Barriga?",
        answers: [
            {text: "14 meses",correct:false},
            {text: "15 anos",correct:false},
            {text: "15 dias",correct:true},
            {text: "14 dias",correct:false}
        ]
    },
    {
        question: "9 - Segundo Chaves, no episódio Os Espíritos Zombeteiros, de 1974, em qual estado nasceu Seu Madruga?",
        answers: [
            {text: "São Paulo",correct:false},
            {text: "Paraná",correct:false},
            {text: "Santa Catarina",correct:true},
            {text: "Rio Grande do Sul",correct:false}
        ]
    },
    {
        question: "10 - No episódio que o Quico fica doente, de quanto em quanto tempo ele tem que tomar seus remédios?",
        answers: [
            {text: "A cada 1 hora",correct:false},
            {text: "A cada 2 horas",correct:true},
            {text: "A cada 3 horas",correct:false},
            {text: "A cada 4 horas",correct:false}
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