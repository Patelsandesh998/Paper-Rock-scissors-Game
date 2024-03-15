let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// for draw output when the comp or userchoose same things
const drawGame = () => {
    //console.log("game was draw.");
    msg.innerText = " Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

 const showWinner = (userwin,userChoice,compChoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        console.log("you lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor ="red";
    }
 };

// compChoice 
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    //console.log("user choice = ", userChoice);

const compChoice = genCompChoice();
    //console.log("comp choice = ",compChoice);
    //Generate computer choice;

    if(userChoice === compChoice) {
        // DrawGame print
        drawGame();
    }else {
        let userwin = true;
        if(userChoice === "rock"){
            // scissors,paper
           userwin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock, scissors
         userwin = compChoice === "scissors" ? false : true;
        }
        else{
            userwin = compChoice ="rock" ? false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};




choice.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked",userChoice);
    playGame(userChoice);
    });
});