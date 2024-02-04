const quizContainer = document.getElementById('content')
const questionElement = document.createElement('div')
const inputAnswer = document.createElement('input')
const button = document.createElement('button')
const correctAns = document.getElementById('correctAns')
const wrongAns = document.getElementById('wrongAns')
const mode = document.getElementById('mode')
const content = document.body
document.getElementById('mode').hidden = true

let currentQuestion = 0
let corrects = 0
let wrongs = 0

const quizData = [
    {question: 'Question 1', answer: 1},
    {question: 'Question 2', answer: 2},
    {question: 'Question 3', answer: 3},
    {question: 'Question 4', answer: 4},
    {question: 'Question 5', answer: 5},
    {question: 'Question 6', answer: 6},
    {question: 'Question 7', answer: 7},
]

quizData.sort(() => 0.5 - Math.random())

function StartQuiz() {
    document.getElementById('startButton').hidden = true
    document.getElementById('mode').hidden = false

    questionElement.className = 'question'
    questionElement.innerHTML = quizData[currentQuestion].question
    inputAnswer.className = 'answer'
    inputAnswer.id = 'answer'
    inputAnswer.type = 'text'
    inputAnswer.required = true
    button.innerText = 'Submit'
    button.className = 'btn2'
    button.addEventListener('click', checkAnswer)


    quizContainer.appendChild(questionElement)
    quizContainer.appendChild(inputAnswer)
    quizContainer.appendChild(button)

    console.log(quizData.length)
    correctAns.innerHTML = `Correct Answers: ${corrects}`
    wrongAns.innerHTML = `Wrong Answers: ${wrongs}`
}
function checkAnswer() {
    let inputtedAnswer = document.getElementById('answer').value

    if (inputtedAnswer == quizData[currentQuestion].answer) {
        currentQuestion++
        corrects++
        console.log(currentQuestion)
    }
    else {
        wrongs++
    }
    // if (currentQuestion === quizData.length) {
    //     currentQuestion = 0
    // }
    correctAns.innerHTML = `Correct Answers: ${corrects}`
    wrongAns.innerHTML = `Wrong Answers: ${wrongs}`
    questionElement.innerHTML = quizData[currentQuestion].question
}

mode.addEventListener('click', () => {
    content.classList.toggle('switchMode')
    button.classList.toggle('switchMode2')
    mode.classList.toggle('mode2')
})