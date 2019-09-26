// 1. Write a detailed pseudocode for this game

/*

If player choose Rock & bot randomly chooses Scissors = "Player wins"
The score value FOR PLAYER GOES UP BY 1
The congratulatory text wills say "you chose rock, Computer chose scissors, you win!!" 

If player choose Rock & bot randomly chooses paper = Computer wins
The score value FOR COMPUTER GOES UP BY 1
The congratulatory text will say "you chose rock, bot chose paper, computer win!!"

If player choose Rock & bot randomly chooses rock = "its A tie"
The score value FOR BOTH STAYS THE SAME
The congratulatory text will say "you chose rock, computer chose Rock, you win!!"


So if player choose Paper & bot randomly chooses Rock = player Win!
So if player choose Scissors & bot randomly chooses Paper = player Win!
So if player choose Rock & bot  randomly chooses Paper = player Lose!
So if player choose Paper & bot randomly chooses Scissors = player Lose!
So if player choose Scissors & bot randomly chooses Rock = player Lose !

So  If I win, the score value and a congratulatory text will be posted on the screen, the values are counted by ones. 
Same goes for the bot.

once the game is over or player would like a new score player can reset the button.

*/


// 2. Follow playerr pseudocode line by line (or in an order that makes sense)
// 3. Can't remember a method/function, Google it. Ask out loud. player got this :)






// 

let choices = ["rock", "paper", "scissors"];
let randChoiceIndex;
let computerChoice;
let playerChoice;
let status;
let result;
let humanScore = 0;
let computerScore = 0;


// update the score and update the status

$("#rock").on("click", function () {
  randChoiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randChoiceIndex];
  playerChoice = 'rock';

  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    status = 'You chose rock, Computer chose scissors, you win!!';
    $("#humanScore").html(humanScore);
    $("#status").html(status);
  

  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    status = 'You chose rock, Computer chose paper, you lose!!';
    $("#computerScore").html(computerScore);
    $("#status").html(status);

  } else if (playerChoice === 'rock' && computerChoice === 'rock') {
    status = 'You chose rock, Computer chose rock, its a draw!!';
    $("#humanScore").html(humanScore);
    $("#status").html(status);
  }
});


$("#paper").on("click", function () {
  randChoiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randChoiceIndex];
  playerChoice = 'paper';

  if (playerChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    status = 'You chose paper, Computer chose rock, you win!!';
    $("#humanScore").html(humanScore);
    $("#status").html(status);

  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    status = 'You chose paper, Computer chose scissors, you lose!!';
    $("#computerScore").html(computerScore);
    $("#status").html(status);

  } else if (playerChoice === 'paper' && computerChoice === 'paper') {
    status = 'You chose paper, Computer chose paper, its a draw!!';
    $("#humanScore").html(humanScore);
    $("#status").html(status);
  }
});


$("#scissors").on("click", function () {
  randChoiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randChoiceIndex];
  playerChoice = 'scissors';

  if (playerChoice === 'scissors' && computerChoice === 'paper') {
    humamScore++;
    status = 'You chose scissors, Computer chose paper, you win!!';
    $("#humanScore").html(humanScore);
    $("#status").html(status);

  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    status = 'You chose scissors, Computer chose rock, you lose!!';
    $("#computerScore").html(computerScore);
    $("#status").html(status);

  } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    status = 'You chose scissors, Computer chose scissors, its a draw!!';
    $("#humanScore").html(humanScore);
    $("#status").html(status);
  }
});


$("#reset").on("click", function () {
  humanScore = 0;
  computerScore = 0;
  $("#computerScore").html(0);
  $("#humanScore").html(0);
  $("#status").html('');

});


/* ============================================================================ */

// console.log(choices[randChoiceIndex]);

  //  Math.floor(Math.random() * choices.length);


