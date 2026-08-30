//Perguntas do nível 5/Level five's questions

const questions = [
    {
        question: "1 - Qual o sobrenome de Jaiminho?",
        answers: [
            {text: "Garabito",correct:true},
            {text: "Garabato",correct:false},
            {text: "Gabarito",correct:false},
            {text: "Gabarato",correct:false}
        ]
    },
    {
        question: "2 - Qual desses personagens apareceu em mais de um episódio?",
        answers: [
            {text: "Seu Madroga/Romão",correct:false},
            {text: "Cândida",correct:false},
            {text: "Garçom do Restaurante da Dona Florinda",correct:false},
            {text: "Malicha",correct:true}
        ]
    },
    {
        question: "3 - De que ano é o episódio em que Jaiminho vai morar na vila? (original, não remake)",
        answers: [
            {text: "1980",correct:false},
            {text: "1981",correct:false},
            {text: "1982",correct:true},
            {text: "1983",correct:false}
        ]
    },
    {
        question: "4 - Qual o numero do bilhete que levou Seu Madruga e Chiquinha para Acapulco?",
        answers: [
            {text: "478",correct:false},
            {text: "874",correct:false},
            {text: "784",correct:false},
            {text: "487",correct:true}
        ]
    },
    {
        question: "5 - Qual desses personagens aparece em menos episódios?",
        answers: [
            {text: "Professor Girafales",correct:false},
            {text: "Godinez",correct:true},
            {text: "Bruxa do 71",correct:false},
            {text: "Seu Madruga",correct:false}
        ]
    },
    {
        question: "6 - Qual o episódio mais longo de Chaves?",
        answers: [
            {text: "Um Porquinho de Cada Vez",correct:false},
            {text: "Isto Merece um Prêmio",correct:false},
            {text: "A Briga dos Pombinhos",correct:true},
            {text: "Os Campeões de Ioio",correct:false}
        ]
    },
    {
        question: "7 - Qual desses atores nunca deixou o elenco de Chaves?",
        answers: [
            {text: "Ramón Valdes",correct:false},
            {text: "Maria Antonieta de Las Nieves",correct:false},
            {text: "Rubén Aguirre",correct:false},
            {text: "Roberto Gomez Bolaños",correct:true}
        ]
    },
    {
        question: "8 - Qual o número que Nhonho usa no episódio do futebol americano?",
        answers: [
            {text: "9325",correct:false},
            {text: "00",correct:false},
            {text: "9132",correct:true},
            {text: "44",correct:false}
        ]
    },
    {
        question: "9 - Em qual desses episódios a Dona Florinda dá mais tapas no Seu Madruga?",
        answers: [
            {text: "A Casimira de Taubaté",correct:true},
            {text: "Aula de Canto",correct:false},
            {text: "As Pessoas Boas Devem Amar os seus Inimigos",correct:false},
            {text: "O Álbum de Figuirinhas",correct:false}
        ]
    },
    {
        question: "10 - Qual apelido Dona Florinda coloca em Jaiminho depois que ele se muda para a vila?",
        answers: [
            {text: "Lombriga esticada",correct:false},
            {text: "Velho preguiçoso",correct:false},
            {text: "Cabeça de Cebola",correct:true},
            {text: "Velho reumático",correct:false}
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