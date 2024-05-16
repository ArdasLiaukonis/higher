const startButton = document.getElementById("startbtn");
const video = document.getElementById("myVideo");
const mainMenu = document.getElementById("main-menu");
const wrapper = document.querySelector(".wrapper");
const rulesButton = document.getElementById("rulesbtn");
const taisykles = document.getElementById("taisykles");
const backButton = document.getElementById("backbtn");



let seconds = 0, minutes = 0;
let movesCount = 0;


startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    mainMenu.classList.add("hide");
    video.classList.add("hide");
    wrapper.classList.remove("hide");
    timeGenerator();
    let numeris = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
    console.log(numeris);
});

rulesButton.addEventListener("click", () => {
    mainMenu.classList.add("hide");
    video.classList.add("hide");
    taisykles.classList.remove("hide");
    wrapper.classList.remove("wrapper");
    wrapper.classList.add("hide");
});

backButton.addEventListener("click", () =>{
    taisykles.classList.add("hide");
    mainMenu.classList.remove("hide");
    video.classList.remove("hide");
})


const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
};


const movesCounter = () => {
    movesCount += 1;
    ejimai.innerHTML = `<span>Ejimai:</span>${movesCount}`;
};