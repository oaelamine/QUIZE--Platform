//selecting elements
let quizeArea = document.querySelector('.quiz-area')

//set 
let curent, other
let imgCount = 5;

//create the box and the imgs
window.onload = function() {
    let imgs = [];

    for (let i = 1; i <= imgCount; i++) {
        imgs.push(i.toString());
    }

    
    imgs.reverse();

    //random
    imgs =  random(imgs);

    for (let i = 0; i < imgCount; i++) {
    
        //create the div 
        let div = document.createElement("div");
        div.className = "box";
    
        //create img
        let img = document.createElement("img");
        img.src = `public/imgs/${imgs[i]}.svg`;
        img.alt = "img";
        img.draggable = "tru";

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




