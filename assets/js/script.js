var testQuestions = [ 
   {
      question: "What does 'HTML' stand for?",
      answers: {
        a: "Heart Text Machine Language",
        b: "HyperText Machine Learning",
        c: "How To Make Lasagna",
        d: "HyperText Markup Language"
      },
      correctAnswer: "d"
    },
    {
      question: "What does 'CSS' stand for",
      answers: {
        a: "",
        b: "Cascading Style Sheets",
        c: "",
        d: ""
      },
      correctAnswer: "b"
    },
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      correctAnswer: "d"
    },
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      correctAnswer: "d"
    },
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      correctAnswer: "d"
    }
];

var startQuizEl = document.getElementById("start-btn")


function startQuiz() {
   alert("It Worked")
};

startQuizEl.addEventListener("click", startQuiz);
