
import { words } from "../data/words.js";

const startBtn = document.querySelector(".startBtn");
const word = document.querySelector(".word p");
const inputText = document.querySelector("#txt");
const timeText = document.querySelector(".time")
const scoreText = document.querySelector(".score");

let currentWord = "";
    let time = 15;
    let score = 0;


function gameStop(){
    alert(`Hai fatto ${score} punti`);
    score = 0;
    time = 15;
    timeText.innerText= `00:${time}`;
    scoreText.innerText = score;

    
}

function startCounter(){
    timeText.innerText= `00:${time}`
    const timepass =  setInterval(() => {
        time--
        timeText.innerText= `00:${time}`
        if (time === 0) {
            clearInterval(timepass)
            gameStop();
        } 
    }, 1000);
}
function nextLevel(){
    time += 2;
    inputText.value = "";
    score++;
    scoreText.innerText = score;
    start();
}
function handleInput(){
    inputText.addEventListener("keyup", (e) => {
        e.target.value === currentWord ? nextLevel() 
        : "";  
    })
}
function start(){
    currentWord = words[Math.floor(Math.random() * words.length)]
    word.innerText = currentWord;
}

startBtn.addEventListener("click", () => {
    startCounter();
    handleInput();
    start()
})