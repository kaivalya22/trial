var userScore=0;
var compScore=0;
const userScore_dom = document.getElementById("user-score");
const compScore_dom = document.getElementById("computer-score");
const Rock_dom = document.getElementById("rock");
const Paper_dom = document.getElementById("paper");
const Scissor_dom = document.getElementById("scissor");
const resultDisplay_dom = document.getElementsByClassName("result");

function getComputerChoice(){
    const choices=["r","p","s"];
    const randomIndex= Math.floor(Math.random()*3);
    Rock_dom.style.borderColor = "white";
    Paper_dom.style.borderColor = "white";
    Scissor_dom.style.borderColor = "white";
    return choices[randomIndex];
}

function userWins(userChoice, computerChoice){
    resultDisplay_dom[0].innerHTML= userChoice + " beats " + computerChoice + "! YOU WIN!";
    userScore=userScore+1;
    userScore_dom.innerHTML=userScore;
    const elementToStyle = document.getElementById(userChoice.toLowerCase());
    elementToStyle.style.borderColor = "green";
    
}

function computerWins(userChoice, computerChoice){
    resultDisplay_dom[0].innerHTML= userChoice + " beats " + computerChoice + "! COMPUTER WINS!";
    compScore=compScore+1;
    compScore_dom.innerHTML=compScore;
    const elementToStyle = document.getElementById(userChoice.toLowerCase());
    elementToStyle.style.borderColor = "red";
}

function drawGame(){
    resultDisplay_dom[0].innerHTML= "It's A DRAW";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){

        case "rs":
            userWins("Rock","Scissor");
            break;
        case "pr":
            userWins("Paper","Scissor");
            break;
        case "sp":
            userWins("Scissor","Paper");
            break;
            
        case "rp":
            computerWins("Rock","Paper");
            break;
        case "ps":
            computerWins("Paper","Scissor");
            break;
        case "sr":
            computerWins("Rock","Paper");
            break;

        case "rr":
        case "pp":
        case "ss":
            drawGame();
            break;
    }
}

Rock_dom.addEventListener("click",function(){
    game("r");
})

Paper_dom.addEventListener("click",function(){
    game("p");
})

Scissor_dom.addEventListener("click",function(){
    game("s");
})
