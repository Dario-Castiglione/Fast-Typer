
import { words } from "../data/words.js";

const startBtn = document.querySelector(".startBtn");
const word = document.querySelector(".word p");
const inputText = document.querySelector("#txt");
const timeText = document.querySelector(".time")
const scoreText = document.querySelector(".score");
const modale = document.querySelector(".modale");
const wrapper = document.querySelector(".game");
const modaleP = document.querySelector(".modale p");
const modaleBtn = document.querySelector(".modale button");

modaleBtn.addEventListener("click", () => {
    modale.style.display="none";
    wrapper.style.opacity="1"
})

let currentWord = "";
let time = 15;
let score = 0;
function spawnModale(modale){
    modale.style.display="block";
    modaleP.innerText=`hai fatto ${score} punti`
    wrapper.style.opacity="0.3"
}

function gameStop() {
    spawnModale(modale)
    score = 0;
    time = 15;
    timeText.innerText = `00:${time}`;
    scoreText.innerText = score;
    inputText.value = ""
    word.innerText = "Premi start";
}
function startCounter() {
    timeText.innerText = `00:${time}`
    const timepass = setInterval(() => {
        time--
        timeText.innerText = `00:${time}`
        if (time === 0) {
            clearInterval(timepass)
            gameStop();
        }
    }, 1000);
}
function nextLevel() {
    time += 2;
    inputText.value = "";
    score++;
    scoreText.innerText = score;
    generateWord();
}
function generateWord() {
    currentWord = words[Math.floor(Math.random() * words.length)]
    word.innerText = currentWord;
}


//------------------------------START-------------------------------//
function start() {
    startCounter();
    generateWord();

    inputText.addEventListener("keyup", (e) => {
        e.target.value.toLowerCase() === currentWord && nextLevel();
            
    })
}

startBtn.addEventListener("click", () => {
    start();
})