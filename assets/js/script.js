var testQuestions = [ 
   {
      question: "What does 'HTML' stand for?",
      answers: [
        { text: "Heart Text Machine Language", correct: false},
        { text: "HyperText Machine Learning", correct: false},
        { text: "How To Make Lasagna", correct: false},
        { text: "HyperText Markup Language", correct: true},
      ],
   },
   {
      question: "What does 'CSS' stand for",
      answers: [
        { text: "Cats Sitting Stylishly", correct: false},
        { text: "Cascading Style Sheets", correct: true},
        { text: "Cannot Style this Sheet", correct: false},
        { text: "Carnivorous Salmon Swimming", correct: false},
      ],
   },
   {
      question: "What is an array?",
      answers: [
        { text: "A series of functions", correct: false},
        { text: "An unorganized mess", correct: false},
        { text: "An ordered list of values", correct: true},
        { text: "A random output of a function", correct: false},
      ],
   },
   {
      question: "What are variables in JavaScript",
      answers: [
        { text: "Numbers in a math equation", correct: false},
        { text: "A letter representing a number", correct: false},
        { text: "A set of circumstances that hinder you", correct: false},
        { text: "Containers for storing information", correct: true},
      ],
   },
   {
      question: "What does DOM stand for",
      answers: [
         { text: "Document Object Model", correct: true},
         { text: "Dads Obviously Manly", correct: false},
         { text: "Direct Object Manager", correct: false},
         { text: "Dumb Object Maker", correct: false},
      ],
    }
];

var startBtnEl = document.getElementById("start-btn")
var qContainer = document.getElementById("qContainer")
var nextBtnEl = document.getElementById("next-btn")
var questionEl = document.getElementById("question")
var answerBtnEl = document.getElementById("ans-btns")
var scoreBtnEl = document.getElementById("score-btn")
var timerStart = 91;
var timer = setInterval(startTimer, 1000);
var shuffledQ, currentQIndex

function startQuiz() {
   startBtnEl.classList.add('hide')
   shuffledQ = testQuestions.sort(() => Math.random() - .5)
   currentQIndex = 0
   qContainer.classList.remove('hide')
   startTimer()
   setNextQuestion()

};

function startTimer() {
   timerStart--
   if (timerStart <= 0) {
      clearInterval(timer);
      return;
   }

   document.getElementById('timer').innerHTML=timerStart + " seconds";
}

function setNextQuestion() {
   resetState()
   showQuestion(shuffledQ[currentQIndex])
}

function showQuestion(question) {
   questionEl.innerText = question.question
   question.answers.forEach(answer => {
      var button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerBtnEl.appendChild(button)
   })
}

function resetState() {
   nextBtnEl.classList.add('hide')
   while (answerBtnEl.firstChild) {
      answerBtnEl.removeChild
      (answerBtnEl.firstChild)
   }
}

function selectAnswer(event) {
   var selectedBtn = event.target
   var correct = selectedBtn.dataset.correct
   Array.from(answerBtnEl.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQ.length > currentQIndex + 1) {
      nextBtnEl.classList.remove('hide')
   } else {
      scoreBtnEl.classList.remove('hide')
   }
}

function setStatusClass(element, correct) {
   clearStatusClass(element)
   if (correct) {
      element.classList.add('correct')
   } else {
      element.classList.add('wrong')
   }
}

function clearStatusClass(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong')
}

startBtnEl.addEventListener("click", startQuiz);
nextBtnEl.addEventListener("click", () => {
   currentQIndex++
   setNextQuestion()
});
