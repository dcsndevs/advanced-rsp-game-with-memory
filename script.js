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
let playerScoreMemory = [];
let computerScoreMemory = [];


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
    computerScoreMemory.push(computer); //to store computer selections in an array
    playerScoreMemory.push(player); //to store computer selections in an array

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
        tries="1st Attempt - "
    }
    else if(gamePlay==2){
        tries="2nd Attempt - "
    }
    else if(gamePlay==3){
        tries="3rd Attempt - "
    }
    else if(gamePlay==4){
        tries="4th Attempt - "
    }
    else(
        tries="5th Attempt - "
    )

    resultDisplay.textContent = tries+result;
    userScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if(gamePlay==5){
        document.getElementById("main-panel").style.display = "none";
        //smooth transition to show score board
        const scoreboard = document.getElementById('score-board');
        scoreboard.classList.toggle('visible');
        yourImageDisplay.textContent = "";
        computerImageDisplay.textContent = "";
        

        if(playerScore<computerScore){
            resultDisplay.textContent = "Computer Wins!";
            resultDisplay.classList.add("text-danger", "h5");
            resultDisplay.classList.remove("bg-white");
        }
        else if (playerScore>computerScore){
            resultDisplay.textContent = "You Won!";
            resultDisplay.classList.add("text-info", "h5");
            resultDisplay.classList.remove("bg-white");
        }
        else{
            resultDisplay.textContent = "It's a draw.";
            resultDisplay.classList.add("h5");
            resultDisplay.classList.remove("bg-white");
        }

        //loop to populate score from playerScoreMemory and computerScoreMemory arrays
        for(i=0; i<gamePlay; i++){
            document.getElementById("p"+[i+1]).innerHTML = "<i class='fas fa-hand-"+playerScoreMemory[i]+"'></i>";
            document.getElementById("c"+[i+1]).innerHTML = "<i class='fas fa-hand-"+computerScoreMemory[i]+"'></i>";

        }
    }
}