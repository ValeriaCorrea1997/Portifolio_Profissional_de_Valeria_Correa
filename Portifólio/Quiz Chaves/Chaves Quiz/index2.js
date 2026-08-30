const questions = [
    {
        question: "1 - Qual destes não é um apelido do Seu Madruga?",
        answers: [
            {text: "Esqueleto Rumbeiro",correct:false},
            {text: "Barriga de Minhoca",correct:false},
            {text: "Tripa Escorrida",correct:false},
            {text: "Cano de Encanamento",correct:true}
        ]
    },
    {
        question: "2 - Quantos anos tem o Chaves?",
        answers: [
            {text: "7",correct:false},
            {text: "8",correct:true},
            {text: "9",correct:false},
            {text: "10",correct:false}
        ]
    },
    {
        question: "3 - Como se chama o pai do Quico?",
        answers: [
            {text: "Frederico",correct:true},
            {text: "Ernesto",correct:false},
            {text: "Antonio",correct:false},
            {text: "Luiz",correct:false}
        ]
    },
    {
        question: "4 - Qual o nome do criador de Chaves?",
        answers: [
            {text: "Manuel El Loco Valdez",correct:false},
            {text: "Pedro Infante",correct:false},
            {text: "Roberto Goméz Bolaños",correct:true},
            {text: "Cantinflas",correct:false}
        ]
    },
    {
        question: "5 - Qual instrumento musical Seu Madruga tenta ensinar Chaves a tocar?",
        answers: [
            {text: "Piano",correct:false},
            {text: "Violão",correct:true},
            {text: "Baixo",correct:false},
            {text: "Banjo",correct:false}
        ]
    },
    {
        question: "6 - Qual o parentesco entre Dona Neves e Chiquinha?",
        answers: [
            {text: "Vó e neta",correct:false},
            {text: "Tia avó e sobrinha neta",correct:false},
            {text: "Mãe e filha",correct:false},
            {text: "Bisavó e bisneta",correct:true}
        ]
    },
    {
        question: "7 - Qual desses trabalhos o Seu Madruga nunca teve?",
        answers: [
            {text: "Vendedor",correct:false},
            {text: "Garçom",correct:true},
            {text: "Cabelereiro",correct:false},
            {text: "Sapateiro",correct:false}
        ]
    },
    {
        question: "8 - Quantas vezes o verso do Cão Arrempedido é repetido?",
        answers: [
            {text: "22",correct:false},
            {text: "33",correct:false},
            {text: "44",correct:true},
            {text: "55",correct:false}
        ]
    },
    {
        question: "9 - Em que cidade nasceu Jaiminho o carteiro?",
        answers: [
            {text: "Monterrey",correct:false},
            {text: "Guadalajara",correct:false},
            {text: "Acapulco",correct:false},
            {text: "Tangamandápio",correct:true}
        ]
    },
    {
        question: "10 - Qual a comida preferida do Chaves?",
        answers: [
            {text: "Sanduíche de presunto",correct:true},
            {text: "Cachorro quente",correct:false},
            {text: "Pizza",correct:false},
            {text: "Bolacha",correct:false}
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