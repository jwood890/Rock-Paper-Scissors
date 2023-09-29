function getComputerChoice() {
    const choices = ['Rock' , 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * choices.length);
    let result =  choices[index]; 
console.log(result);
}
getComputerChoice();
