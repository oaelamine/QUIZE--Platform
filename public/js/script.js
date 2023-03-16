//CHANGING BACKGROUNG ANIMATHION ################################################################# START
//CELECTION THE BACKROUNGS
let backgroung = ["bg_1.svg", "bg_2.svg", "bg_3.svg"];

//SELECTING THE BODY
let main_page = document.querySelector(".main_page");

main_page.style.backgroundImage = `url(public/imgs/${backgroung[1]})`;

//FUNCTION TO CHANGE THE BG's
function changBg() {
  let i = Math.floor(Math.random() * backgroung.length);
  console.log(i);
  main_page.style.backgroundImage = `url(public/imgs/${backgroung[i]})`;
}

//TRIGGER THE FUNCTION WITH setInterval
setInterval(changBg, 5000);

//CHANGING BACKGROUNG ANIMATHION ################################################################# END
