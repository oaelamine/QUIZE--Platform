// QCM Questions  HTML
const htmlQuestions = [
  (q1 = {
    question: "What does HTML stand for?",
    anser1: "Home Tool Markup Language",
    anser2: "Hyperlink and Text Markup Language",
    anser3: "Hyper Tool Markup Language",
    anser4: "Hyper Text Markup Language",
    anserTrue: "Hyper Text Markup Language",
  }),
  (q2 = {
    question: "Which is used to read an HTML page and render it?",
    anser1: "Web server",
    anser2: "Web network",
    anser3: "Web matrix",
    anser4: "Web browser",
    anserTrue: "Web browser",
  }),
  (q3 = {
    question: "Choose the correct HTML element for the largest heading:",
    anser1: "<heading>",
    anser2: "<h6>",
    anser3: "<head>",
    anser4: "<h1>",
    anserTrue: "<h1>",
  }),
  (q4 = {
    question: "What is the correct HTML element for inserting a line break?",
    anser1: "<brake>",
    anser2: "<lb>",
    anser3: "<brk>",
    anser4: "<br>",
    anserTrue: "<br>",
  }),
  (q5 = {
    question: "HTML is a set of markup ___.",
    anser1: "sets",
    anser2: "attributes",
    anser3: "none of the above",
    anser4: "tags",
    anserTrue: "tags",
  }),
  (q6 = {
    question: "Which is used to open the document in new window ?",
    anser1: '<a target="_top">Link</a>',
    anser2: '<a target="_new">Link</a>',
    anser3: '<a target="_parent">Link</a>',
    anser4: '<a target="_blank">Link</a>',
    anserTrue: '<a target="_blank">Link</a>',
  }),
  (q7 = {
    question: "What is the correct syntax of doctype in HTML5?",
    anser1: "</doctype html>",
    anser2: "<doctype html!>",
    anser3: "<doctype html>",
    anser4: "<!doctype html>",
    anserTrue: "<!doctype html>",
  }),
  (q8 = {
    question: "In which part of the HTML metadata is contained?",
    anser1: "body tag",
    anser2: "html tag",
    anser3: "title tag",
    anser4: "head tag",
    anserTrue: "head tag",
  }),
  (q9 = {
    question: "Which element is used for or styling HTML5 layout?",
    anser1: "PHP",
    anser2: "JS",
    anser3: "JQuery",
    anser4: "CSS",
    anserTrue: "CSS",
  }),
  (q10 = {
    question: "Which defines the most important heading ?",
    anser1: "h8",
    anser2: "h4",
    anser3: "h6",
    anser4: "h1",
    anserTrue: "h1",
  }),
];


// Select Elements
let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");
let quizApp = document.querySelector(".quiz-app")


// Set Options
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;
let questionCount = htmlQuestions.length

//celect the right answers
let ansersTru = []
for(const ques of htmlQuestions) {
  ansersTru.push(ques.anserTrue)
}




//FUNCTIONS
//bullet function
function bull(numb) {
  countSpan.innerHTML = numb

  //create the bullets
  for (let i = 0; i < questionCount; i++) {
    //span
    let bull = document.createElement('span')

    // Check If Its First Span
    if (i === 0) {
      bull.className = "on";
    }

    //append bull to bullets container
    bulletsSpanContainer.appendChild(bull)
    
  }
}

//function to add question
function addData(obj, count) {
  if (currentIndex < count) {
    
  //crete h2 question
  let questionTitel = document.createElement("h2");

  //create test node
  let questionText = document.createTextNode(obj.question);

  //append the text to h2
  questionTitel.appendChild(questionText);

  //append the questionTitel to quiz-area
  quizArea.appendChild(questionTitel);

  //adding the questions
  for (let i = 1; i <= 4; i++) {

    //create anser div
    let mainDiv = document.createElement('div');

    //add class to mainDiv
    mainDiv.className = "answer";

    //create radio input
    let radioTinput = document.createElement('input');
    radioTinput.type = "radio";
    radioTinput.name = "question";
    radioTinput.id = `answer${i}`;
    radioTinput.dataset.answer = obj[`anser${i}`];

    //create label
    let label = document.createElement("label");
    label.htmlFor = `answer${i}`;

    //create label text
    let labelText = document.createTextNode(obj[`anser${i}`]);

    //add text to the lable
    label.appendChild(labelText);

    //add input + label to mainDiv
    mainDiv.appendChild(radioTinput);
    mainDiv.appendChild(label);

    //add mainDiv to answers-area
    answersArea.appendChild(mainDiv)
    
  }
  }
}

//function to chesk
function checkAnswer(rAnswer, count) {

  let anwers = document.getElementsByName("question");
  let chois

  for(const anwer of anwers) {
    if (anwer.checked) {
      chois = anwer.dataset.answer
    }
  }

  if (rAnswer === chois) {
    rightAnswers++;    
  }
  
} 

//change bullet
function changeBullet() {

  let bulspans = document.querySelectorAll(".bullets .spans span");
  let bullArray = Array.from(bulspans);
  bullArray.forEach((span, index) => {
    if (currentIndex === index) {
      span.className = 'on';
    }
  })
}

//showResults function
function showResults(count) {
  let results;
  if (currentIndex === count) {
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();
    bullets.remove();

    if (rightAnswers > count / 2 && rightAnswers < count) {
      results = `<span class="good">${rightAnswers}</span>`
    } else if (rightAnswers === count) {
      results = `<span class="perfect">${rightAnswers}</span>`
    } else {
      results = `<span class="bad">${rightAnswers}</span>`
    }
    resultsContainer.innerHTML = results

    //show right answers
    let buttenDiv = document.createElement('div')
    buttenDiv.classList = "show-ans"

    let showRightAnswers = document.createElement('button');
    showRightAnswers.className = "btn_Show"
    showRightAnswers.innerHTML = "Show Right Answers"

    buttenDiv.appendChild(showRightAnswers)

    quizApp.appendChild(buttenDiv)
    
    showRightAnswers.onclick = function () {
      showRightAnswers.remove();
      show(ansersTru);

    //restart button
    let reSetDiv = document.createElement("div");
    reSetDiv.className = "reSetDiv";

    let restart = document.createElement('button');
    restart.className = "submit-button";
    restart.innerText = "restart"

    reSetDiv.appendChild(restart);
    quizApp.appendChild(reSetDiv);

    restart.onclick = function () {
        location.reload();
    }
  }
  }
}

function show(arr) {
  //create div
  let truDiv = document.createElement('div')
  truDiv.className = "truAns"

  //append truDiv to quizApp
  quizApp.appendChild(truDiv)

  for (let i = 0; i < ansersTru.length; i++) {

    //create P
    let pAns = document.createElement('p')
    let pText = document.createTextNode(arr[i])

    pAns.appendChild(pText)

    truDiv.appendChild(pAns)
    
  }
}
//valide function
function valid() {
  
  //get the true answer
  let treuanswer = htmlQuestions[currentIndex].anserTrue

  //index++
  currentIndex++

  //check the answer
  checkAnswer(treuanswer, questionCount)

  //remouve old question
  quizArea.innerHTML = '';
  answersArea.innerHTML = '';
  
  //add next question
  addData(htmlQuestions[currentIndex], questionCount)

  //change bullet
  changeBullet();

  //results
  showResults(questionCount);
  
}

//trigger the functions
//create bullets
bull(questionCount)

//add questions
addData(htmlQuestions[currentIndex], questionCount)

//submit button
submitButton.addEventListener('click', valid)