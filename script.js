const resultDisplay = document.getElementById("result-display");
const userScoreDisplay = document.getElementById("user-score-display");
const computerScoreDisplay = document.getElementById("computer-score-display");
const yourImageDisplay = document.getElementById("your-choice");
const computerImageDisplay = document.getElementById("computer-choice");
const buttons = document.querySelector("button");

let playerScore = 0;
let computerScore = 0;
let gamePlay = 0;
let oldcomputer = 0; //This would take on computer's previous selection


function play(player){
    gamePlay += 1;

    do{
        computer = Math.floor(Math.random() * 3) + 1;
    }while (oldcomputer==computer); //code to ensure computer does not pick same choice as before

    oldcomputer = computer; //oldcomputer would be used to check computer's last selection

    if(computer==1){
        computer = "rock";
    }
    if(computer==2){
        computer = "paper";
    }
    if(computer==3){
        computer = "scissors";
    }

    let result;
    if (player === computer){
        result = "It's a Tie";

        yourImageDisplay.innerHTML = "You played <i class='fas fa-hand-"+player+"'></i>";
        computerImageDisplay.innerHTML = "Computer played <i class='fas fa-hand-"+computer+"'></i> ";
    }
    else if (player==="rock" && computer==="scissors"){
        result = "Player Win";
        playerScore = playerScore+1;
        yourImageDisplay.innerHTML = "You played <i class='fas fa-hand-rock'></i>";
        computerImageDisplay.innerHTML = "Computer played <i class='fas fa-hand-scissors'></i> "
    }
    else if (player==="scissors" && computer==="paper"){
        result = "Player Win";
        playerScore = playerScore+1;
        yourImageDisplay.innerHTML = "You played <i class='fas fa-hand-scissors'></i>";
        computerImageDisplay.innerHTML = "Computer played <i class='fas fa-hand-paper'></i> ";
    }
    else if (player==="paper" && computer==="rock"){
        result = "Player Win";
        playerScore = playerScore+1;
        yourImageDisplay.innerHTML = "You played <i class='fas fa-hand-paper'></i>";
        computerImageDisplay.innerHTML = "Computer played <i class='fas fa-hand-rock'></i> ";        
    }
    else if (computer==="rock" && player==="scissors"){
        result = "Computer Win";
        computerScore = computerScore+1;
        yourImageDisplay.innerHTML = "You played <i class='fas fa-hand-scissors'></i>";
        computerImageDisplay.innerHTML = "Computer played <i class='fas fa-hand-rock'></i> ";        
    }
    else if (computer==="scissors" && player==="paper"){
        result = "Computer Win";
        computerScore = computerScore+1;
        yourImageDisplay.innerHTML = "You played <i class='fas fa-hand-paper'></i>";
        computerImageDisplay.innerHTML = "Computer played <i class='fas fa-hand-scissors'></i> ";        
    }
    else if (computer==="paper" && player==="rock"){
        result = "Computer Win";
        computerScore = computerScore+1;
        yourImageDisplay.innerHTML = "You played <i class='fas fa-hand-rock'></i>";
        computerImageDisplay.innerHTML = "Computer played <i class='fas fa-hand-paper'></i> ";        
    }

    if(gamePlay==1){
        tries=" - 1st Attempt"
    }
    else if(gamePlay==2){
        tries=" - 2nd Attempt"
    }
    else(
        tries=" - 3rd Attempt"
    )

    resultDisplay.textContent = result+tries;
    userScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if(gamePlay==3){
        if(playerScore<computerScore){
            document.getElementById("main-panel").innerHTML = "<h1>Game Over<br>Computer Wins!</h1>";
        }
        else if (playerScore>computerScore){
            document.getElementById("main-panel").innerHTML = "<h1>Game Over<br>You Won!</h1>";

        }else{
            document.getElementById("main-panel").innerHTML = "<h1>Game Over<br>It's a draw.</h1>";

        }

    }
}