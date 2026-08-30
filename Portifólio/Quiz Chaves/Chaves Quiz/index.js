const questions = [
    {
        question: "1 - Qual o número da casa do Seu Madruga?",
        answers: [
            {text: "14",correct:false},
            {text: "24",correct:false},
            {text: "71",correct:false},
            {text: "72",correct:true}
        ]
    },
    {
        question: "2 - Qual destes não é um aluno do Professor Girafales?",
        answers: [
            {text: "Chaves",correct:false},
            {text: "Quico",correct:false},
            {text: "Dona Clotilde",correct:true},
            {text: "Chiquinha",correct:false}
        ]
    },
    {
        question: "3 - Qual o apelido da Dona Clotilde?",
        answers: [
            {text: "Bruxa do 71",correct:true},
            {text: "Velha coroca",correct:false},
            {text: "Lombriga Anêmica",correct:false},
            {text: "Senhorita Gloria",correct:false}
        ]
    },
    {
        question: "4 - Quantos meses de aluguel o Seu Madruga deve?",
        answers: [
            {text: "11",correct:false},
            {text: "12",correct:false},
            {text: "13",correct:false},
            {text: "14",correct:true}
        ]
    },
    {
        question: "5 - Como se chamam as novas vizinhas?",
        answers: [
            {text: "Olga e Beatriz",correct:false},
            {text: "Renata e Ana",correct:false},
            {text: "Glória e Paty",correct:true},
            {text: "Clotilde e Florinda",correct:false}
        ]
    },
    {
        question: "6 - Para qual cidade praiana a turma do Chaves viajou?",
        answers: [
            {text: "Acapulco",correct:true},
            {text: "Cancún",correct:false},
            {text: "Vera Cruz",correct:false},
            {text: "Puerto Escondido",correct:false}
        ]
    },
    {
        question: "7 - Qual desses bordões não é do Chaves?",
        answers: [
            {text: "Isso, isso, isso",correct:false},
            {text: "Ninguém tem paciência comigo",correct:false},
            {text: "Tá bom, mas não se irrite",correct:false},
            {text: "Pois é, pois é, pois é",correct:true}
        ]
    },
    {
        question: "8 - Quem era ladrão da vila?",
        answers: [
            {text: "Chaves",correct:false},
            {text: "Seu Furtado",correct:true},
            {text: "Seu Madruga",correct:false},
            {text: "Seu Roubado",correct:false}
        ]
    },
    {
        question: "9 - O que o Professor Girafales sempre leva para a Dona Florinda?",
        answers: [
            {text: "Flores",correct:true},
            {text: "Chocolates",correct:false},
            {text: "Caramelos",correct:false},
            {text: "Café",correct:false}
        ]
    },
    {
        question: "10 - Como se chama o cachorrinho do Quico?",
        answers: [
            {text: "Satanás",correct:false},
            {text: "Bochechão",correct:false},
            {text: "Madruguinha",correct:true},
            {text: "Magrelinho",correct:false}
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