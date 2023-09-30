let wins = 0;
let losses = 0;
let ties = 0;



for (let rounds = 1; rounds <= 5; rounds++) {

    // create a function that  randomly generates the computerChoice of rock/paper/scissors.
    let computerChoice = Math.floor(Math.random() * 100) + 1;

//    console.log(computerChoice);

        if (computerChoice <= 33) {
            computerChoice = "Rock";
//           console.log(computerChoice);
         } else if (computerChoice > 33 && computerChoice <= 66) {
            computerChoice = "Paper";
//           console.log(computerChoice);
         } else {
           computerChoice = "Scissors";
//         console.log(computerChoice);
        }
    
//create a funtion that allows playerChoice of rock/paper/scissors and is case insensitive.
    let playerChoice = prompt("Choose Rock, Paper or Scissors.","Rock, Paper, Scissors");

        while (playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors") {
             playerChoice = prompt("Input invalid. Try again 'Rock', 'paper' or 'Scissors'?","Rock, Paper, Scissors");
        }
    let playerChoiceSmall =  playerChoice.toLowerCase();    
    console.log(playerChoice);
    
// create a function that finds the winner of playerChoice and getComputerChoice

    function getWinner(playerChoice) {
        if (playerChoiceSmall == "rock") {
           if (computerChoice == "Scissors") {
               console.log("You won!");
               ++wins;
           }
           else if (computerChoice == "Paper") {
               console.log("You lost!");
               ++losses;
           }   
           else {
                console.log("Tie.");
              ++ties;
          }     
                   
        }
        else if (playerChoiceSmall == "paper") {
           if (computerChoice == "Rock") {
               console.log("You won!");
               ++wins;
          }
          else if (computerChoice == "Scissors") {
              console.log("You lost!");
             ++losses;
           }   
           else {
               console.log("Tie.");
              ++ties;
          } 
       }
        else {
            if (computerChoice == "Rock") {
               console.log("You lost!");
              ++losses;
           }
          else if (computerChoice == "Scissors") {
              console.log("Tie.");
              ++ties;
          }   
          else {
              console.log("You won!");
              ++wins;
          } 
      }
    }
    console.log(`The computer chose ${computerChoice}`);
    getWinner();
    console.log(`You have ${wins} wins, ${losses} losses and ${ties} ties.
    This is round ${rounds} out of 5.`);
}


// That function needs to return a string for each scenario
// Nest that in a function game that allows you to play 5 rounds and keeps score. 
// ^ might need to learn how to loop or just call playRound 5 times idk. 