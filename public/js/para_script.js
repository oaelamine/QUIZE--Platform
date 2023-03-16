//select element
let inputs = document.querySelectorAll("input")
let submit = document.querySelector(".submit-button")
let quizArea = document.querySelector(".quiz-area");
let resultsContainer = document.querySelector(".results");
let quizApp = document.querySelector(".quiz-app");
let form = document.querySelector("form");

//set initial score
let score = 0
let count = Array.from(inputs).length


//correction paragraph
let correction = `<p class="para">
JavaScript, often abbreviated as <span>JS</span>, is a programming <span>language</span> that is one of the core technologies of the World Wide Web, alongside <span>HTML</span> and <span>CSS</span>. As of 2022, 98% of websites use <span>JavaScript</span> on the client side for webpage behavior, often incorporating third-party libraries. All major <span>web browsers</span> have a dedicated JavaScript engine to execute the <span>code</span> on users' devices.
                </p>`



//select words
let words = []


//FUNCTION
function submitFunction() {

    //chesk the aners
    for ( const input of inputs ) {
        if (input.value === input.dataset.text) {
            score++
        }
    }

    //show the score and the ansers
    showResults(count)
}

function showResults(count) {

    quizArea.remove();
    form.remove();
    submit.remove();


    //score
    if (score > count / 2 && score < count) {
        results = `<span class="good">${score}</span>`
    } else if (score === count) {
        results = `<span class="perfect">${score}</span>`
    } else {
        results = `<span class="bad">${score}</span>`
    }
      resultsContainer.innerHTML = results

    // show correction
    let buttenDiv = document.createElement('div')
    buttenDiv.classList = "show-ans"

    let showRightAnswers = document.createElement('button');
    showRightAnswers.className = "btn_Show"
    showRightAnswers.innerHTML = "Show Right Answers"

    buttenDiv.appendChild(showRightAnswers)

    quizApp.appendChild(buttenDiv)

    showRightAnswers.onclick = function () {

        buttenDiv.remove();

        let pDiv = document.createElement("div")
        pDiv.className = "p-div"
        pDiv.innerHTML = correction

        quizApp.appendChild(pDiv)

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



//add event
submit.addEventListener('click', submitFunction)
