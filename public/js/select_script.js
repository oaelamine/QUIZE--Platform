// Selection Questions CSS
const cssQuestions = [
    q1 = {
        question: 'CSS stands for ______',
        anser1: 'Color Style Sheets',
        anser2: 'Cascade Sheets Style',
        anser3: 'Cascade Style Sheet',
        anser4: 'Cascading Style Sheets',
        anserTrue: 'Cascading Style Sheets'
    },
    q2 = {
        question: 'Which tag is used to embed CSS in HTML document?',
        anser1: '<CSS>',
        anser2: '<!DOCTYPE html>',
        anser3: '<style>',
        anser4: '<script>',
        anserTrue: '<style>'
    },
    q3 = {
        question: 'The <link> tag goes inside',
        anser1: 'the head section',
        anser2: 'the title section',
        anser3: 'the body section',
        anser4: 'None of the above',
        anserTrue: 'the head section'
    },
    q4 = {
        question: 'Which HTML attribute is used to define inline styles ?',
        anser1: 'styles',
        anser2: 'style',
        anser3: 'Font',
        anser4: 'class',
        anserTrue: 'style'
    },
    q5 = {
        question: 'Which property is used to increase or decrease the size of a font ?',
        anser1: 'font-weight',
        anser2: 'font',
        anser3: 'font-size',
        anser4: 'None of the above',
        anserTrue: 'font-size'
    },
    q6 = {
        question: 'Which property specifies the right padding of an element ?',
        anser1: 'padding-top',
        anser2: 'padding-right',
        anser3: 'padding-left',
        anser4: 'padding-bottom',
        anserTrue: 'padding-right',
    },
    q7 = {
        question: 'Which property is used to capitalize text or convert text to uppercase or lowercase letters ?',
        anser1: 'text-decoration',
        anser2: 'text-align',
        anser3: 'text-indent',
        anser4: 'text-transform',
        anserTrue: 'text-transform'
    },
    q8 = {
        question: 'Which property is used to add or subtract space between the letters that make up a word ?',
        anser1: 'letter-spacing',
        anser2: 'direction',
        anser3: 'color',
        anser4: 'word-spacing',
        anserTrue: 'letter-spacing',
    },
    q9 = {
        question: 'Which property is used to set the background image of an element ?',
        anser1: 'background-position',
        anser2: 'background-repeat',
        anser3: 'background-image',
        anser4: 'background-color',
        anserTrue: 'background-image',
    },
    q10 = {
        question: 'Which CSS framework is used to create a responsive design?',
        anser1: 'laraVell',
        anser2: 'bootstrap',
        anser3: 'django',
        anser4: 'rails',
        anserTrue: 'bootstrap'
    },
]

//selecting elements
let countSpan = document.querySelector(".count span");
let spans = document.querySelector(".spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area") ;
let submit = document.querySelector(".submit-button");
let bullets = document.querySelector(".bullets");
let resultsContainer = document.querySelector(".results");
let quizApp = document.querySelector(".quiz-app");


//set 
let questCount = cssQuestions.length;
let questionIndex = 0;
let score = 0;
let choisArr = []

//get
let trueAnsArr = []
for (const cssQuestion  of cssQuestions) {
    trueAnsArr.push(cssQuestion.anserTrue)
}


//adding the question count
countSpan.innerHTML = questCount

//########################################### "FUNCTIONS"

//adding balls
function pagination(numb) {

    for (let i = 0; i < numb; i++) {

        //create span
        let span = document.createElement("span");
        if (i === 0) {
            span.className = "on"
        }
        
        //adding spans to the spans's div
        spans.appendChild(span)
        
    }
}

//adding questions and answers
function addData(obj , numb) {

    if (questionIndex < numb ) {

        //the question
        let lable = document.createElement("lable");
        //lable.htmlFor = `asnwer${questionIndex}`;

        let h2 = document.createElement("h2");
        let h2text = document.createTextNode(obj.question);

        h2.appendChild(h2text);

        lable.appendChild(h2);

        quizArea.appendChild(lable);


        let select = document.createElement("select");
        select.id = `answers_${questionIndex + 1}`;
        select.name = `answers_${questionIndex + 1}`

        answersArea.appendChild(select)

        //the answers
        for (let i = 1; i <= 4; i++) {
            
            let option = document.createElement("option");
            option.value = `anser${i}`;

            let optionText = document.createTextNode(obj[`anser${i}`])

            option.appendChild(optionText)

            select.appendChild(option)
        }
    }
}

function submitFunction() {

    //check the answer
    check(cssQuestions[questionIndex], questionIndex);


    //clear the divs
    quizArea.innerHTML = " ";
    answersArea.innerHTML = " ";

    //increace the index
    questionIndex++;

    //color the next span bull
    nextSpan();

    //adding the next question
    addData(cssQuestions[questionIndex] , questCount);

    //sow score
    showScore()
}


//color the next span paginathion
function nextSpan() {
    let bulspans = document.querySelectorAll(".bullets .spans span");
    let bullArray = Array.from(bulspans);
    bullArray.forEach((span, index) => {
      if (questionIndex === index) {
        span.className = "on";
      }
    })

}

//check the answer
function check(obj, numb) {

    //selecting the selected value
    let qSelectValue = document.querySelector(`#answers_${numb + 1}`).value;
    console.log(qSelectValue);
    choisArr.push(obj[`${qSelectValue}`]);

    //check the answer
    if (obj[`${qSelectValue}`] === obj.anserTrue) {
        score++;
    }

}

//sow score
function showScore() {

    if (questionIndex === questCount) {

        quizArea.remove();
        answersArea.remove();
        submit.remove();
        bullets.remove();

        let results

        if (score > questCount / 2 && score < questCount) {
          results = `<span class="good">${score}</span>`
        } else if (score === questCount) {
          results = `<span class="perfect">${score}</span>`
        } else {
          results = `<span class="bad">${score}</span>`
        }
        resultsContainer.innerHTML = results
        
        
        //show answers
        let buttenDiv = document.createElement('div');
        buttenDiv.classList = "show-ans";

        let showRightAnswers = document.createElement('button');
        showRightAnswers.className = "btn_Show";
        showRightAnswers.innerHTML = "Show Right Answers";

        buttenDiv.appendChild(showRightAnswers)

        quizApp.appendChild(buttenDiv)

        showRightAnswers.onclick = function () {
            showRightAnswers.remove();
            show(choisArr);

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

    let truDiv = document.createElement('div');
    truDiv.className = "truAns";
    
    quizApp.appendChild(truDiv)

    for (let i = 0; i < choisArr.length; i++) {

        //create P
        let pAns = document.createElement('p')
        pAns.className = "pAns"
        let pText = document.createTextNode(arr[i])
    
        //add the answers
        pAns.appendChild(pText)
        truDiv.appendChild(pAns)
    }

    let pchoises = document.querySelectorAll(".pAns");

    for (const pchois of pchoises) {
        if (trueAnsArr.includes(pchois.innerText)) {
          pchois.style.backgroundImage = "linear-gradient(to top left, #39b385, #9be15d)";
        } else {
          pchois.style.backgroundImage = "linear-gradient(to top left, #fd424b, #ffcb03)";
        }
      }

}


//trigger functions
pagination(questCount);

//adding date
addData(cssQuestions[questionIndex] , questCount);

//submit
submit.addEventListener("click", submitFunction);