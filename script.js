const quizContainer = document.getElementById('content') 
const questionElement = document.createElement('div')
const inputAnswer = document.createElement('input')
const button = document.createElement('button')

const quizData = [
    {
        question: '10 + 10',
        answer: 20
    },
    {
        question: '20 + 20',
        answer: 40
    },
    {
        question: '30 + 30',
        answer: 60
    },
    {
        question: '40 + 40',
        answer: 80
    },
    {
        question: '50 + 50',
        answer: 100
    },
    {
        question: '60 + 60',
        answer: 120
    },
    {
        question: '70 + 70',
        answer: 140
    },
]         

let currentQuestion = 0

function StartQuiz () {
    document.getElementById('startButton').hidden = true
    
    questionElement.className = 'question'
    questionElement.innerHTML = quizData[currentQuestion].question
    inputAnswer.className = 'answer'
    inputAnswer.id = 'answer'
    inputAnswer.type = 'text'
    inputAnswer.required = true
    button.innerText = 'Submit'
    button.className = 'btn'
    button.addEventListener('click', checkAnswer)
    
    
    quizContainer.appendChild(questionElement)
    quizContainer.appendChild(inputAnswer)
    quizContainer.appendChild(button)

    if (currentQuestion === quizData.length) {
        currentQuestion = 0
    }
}
function checkAnswer() {
    let inputtedAnswer = document.getElementById('answer').value

    if (inputtedAnswer == quizData[currentQuestion].answer) {
        currentQuestion++
        console.log(currentQuestion)
    }
    questionElement.innerHTML = quizData[currentQuestion].question
}