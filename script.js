//buttons
let shows1e3 = document.querySelector(".s1e3");
let shows2e10 = document.querySelector(".s2e10");
let shows3e6 = document.querySelector(".s3e6");
let shows4e9 = document.querySelector(".s4e9");
let shows5e7 = document.querySelector(".s5e7");
let shows6e3 = document.querySelector(".s6e3");
let shows6e9 = document.querySelector(".s6e9");
let shows7e4 = document.querySelector(".s7e4");
let shows7e6 = document.querySelector(".s7e6");
let shows8e1 = document.querySelector(".s8e1");

//toggle hidden html elements s1
let one = document.querySelector(".season1");

shows1e3.addEventListener("click", seasonOne);

function seasonOne() {
  one.classList.toggle("season1");
}

//toggle hidden html elements s2
let two = document.querySelector(".season2");

shows2e10.addEventListener("click", seasonTwo);

function seasonTwo() {
  two.classList.toggle("season2");
}

//togle hidden html elements s3
let three = document.querySelector(".season3");

shows3e6.addEventListener("click", seasonThree);

function seasonThree() {
  three.classList.toggle("season3");
}

//toggle hidden html elements s4
let four = document.querySelector(".season4");

shows4e9.addEventListener("click", seasonFour);

function seasonFour() {
  four.classList.toggle("season4");
}
//toggle hidden html elements s5
let five = document.querySelector(".season5");

shows5e7.addEventListener("click", seasonFive);

function seasonFive() {
  five.classList.toggle("season5");
}

//toggle hidden html elements s6 first
let six = document.querySelector(".season6");

shows6e3.addEventListener("click", seasonSix);

function seasonSix() {
  six.classList.toggle("season6");
}

//toggle hidden html elements s6 second
let sixTwo = document.querySelector(".season6two");

shows6e9.addEventListener("click", seasonSixTwo);

function seasonSixTwo() {
  sixTwo.classList.toggle("season6two");
}

//toggle hidden html elements s7 first

let seven = document.querySelector(".season7");

shows7e4.addEventListener("click", seasonSeven);

function seasonSeven() {
  seven.classList.toggle("season7");
}

//toggle hidden html elements s7 second
let sevenTwo = document.querySelector(".season7two");

shows7e6.addEventListener("click", seasonSevenTwo);

function seasonSevenTwo() {
  sevenTwo.classList.toggle("season7two");
}

//toggle hidden html elements s7 second
let eight = document.querySelector(".season8");

shows8e1.addEventListener("click", seasonEight);

function seasonEight() {
  eight.classList.toggle("season8");
}

/*
.killedbrother,
.topofthewall,
.dyingygritte,
.tormund,
.body,
.horses,
.dragondj,
.wighthunt,
.beforefight,

.s2text,
.s2img,
.s3text,
.s3img,
.s4img,
.s4text,
.s5img,
.s5text,
.s6img,
.s6text,
.s6img2,
.s6text2,
.s7img1,
.s7text1,
.s7img2,
.s7text2,
.s8img,
.s8text  */
