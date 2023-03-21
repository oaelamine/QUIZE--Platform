//selecting elements
let quizeArea = document.querySelector('.quiz-area');

//set 
let curent, other
let imgCount = 5;

//create the box and the imgs
//window.onload = 
function create() {
    let imgs = [];

    for (let i = 1; i <= imgCount; i++) {
        imgs.push(i.toString());
    }

    imgs.reverse();


    //random
    imgs =  random(imgs);



    for (let i = 1; i <= imgCount; i++) {

        //create the div 
        let div = document.createElement("div");
        div.className = "box";
        div.id = i;
    
        //create img
        let img = document.createElement("img");
        img.src = `public/imgs/${imgs[i - 1]}.svg`;
        img.alt = "img";
        img.draggable = "true";

        //add events
        img.addEventListener('dragstart', dragStart);
        img.addEventListener('dragover', dragOver);
        img.addEventListener('dragenter', dragEnter);
        img.addEventListener('dragleave', dragLeave);
        img.addEventListener('drop', dragDrop);
        img.addEventListener('dragend', dragEnd);
        
        //add the img to the div
        div.appendChild(img);
    
        //app the div to quizeArea
        quizeArea.appendChild(div);
    }
}


//trigger the create function 
create()


//select elements
let submit = document.querySelector(".submit-button");
let divs = document.querySelectorAll(".box");
let allImg = document.querySelectorAll("img");


allImg.forEach(letter => {
    letter.id = `${letter.src.slice(-5, -4)}i`
})



//drag Functions

function dragStart() {
    curent = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    other = this
}

function dragEnd() {
    let currentImg = curent.src;
    let otherImg = other.src;
    [curent.src, other.src] = [otherImg, currentImg]

    //ree adding id
/*     allImg.forEach(letter => {
        letter.id = `${letter.src.slice(-5, -4)}i`
    }) */
}



//random function

function random(arr) {

    currentIndex = arr.length;

    while (currentIndex != 0) {

        //generate a random number
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        //swap index
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}


//check funtion

function submitFunction() {

    //check the id of the img and the id of the div
    for (const img of allImg) {
        if (parseInt(img.id) == parseInt(img.parentElement.id)) {
            img.parentElement.style.backgroundColor = "green";
        } else {
            img.parentElement.style.backgroundColor = "red";

        }
    }

}


//addEventListners

submit.addEventListener('click', submitFunction)