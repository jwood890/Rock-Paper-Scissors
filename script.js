function getComputerChoice() {
    const choices = ['Rock' , 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
     playerSelection = playerSelection.toLowerCase();

     if (playerSelection === computerSelection) {
        return "It's a tie!";
     }
switch(playerSelection) {
    case 'rock':
        return (computerSelection === 'scissors') ? 'You Win! Rock beats scissors.' : 'You lose! Paper beats rock.';
    case 'paper':
        return (computerSelection === 'rock') ? 'You win! Paper beats rock.' : 'You lose! Scissors beats paper.';
    case 'scissors':
        return (computerSelection === 'paper') ? 'You win! Scissors beat paper.' : 'You lose! Rock beats scissors.';
default:
    return 'Invalid choice';
 }   

}
function startGame() {
let playerChoice = prompt("Choose Rock, Paper, or Scissors:");
let computerChoice = getComputerChoice();
let gameResult = playRound(playerChoice, computerChoice);
document.getElementById("result").innerText = `Computer chose: ${computerChoice}\n${gameResult}`;
}