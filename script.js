let humanScore=0
let computerScore=0

function getComputerChoice(){

   let computerChoice=["Rock","Paper","Scissors"];
   let random= computerChoice[Math.floor(Math.random()*computerChoice.length)];
   return random
   

}


function getHumanChoice(){
    let humanChoice= prompt("Pick between R[rock],P[paper],S[scissors]");
    if (humanChoice === "Rock"){
        alert("Human picked rock")
    }
    else if(humanChoice==="Paper"){
        alert("Human picked paper")
    }
    else if(humanChoice==="Scissors"){
        alert("Human picked scissors")
    }
    else{
        alert("Pick a valid choice from rock,paper,scissors")
    }
    return humanChoice
    
    

}




function playRound(humanChoice,computerChoice){
   
 if(humanChoice==="Rock" && computerChoice==="Paper"){
    computerScore++
    alert(`You lose, paper beats rock. Human: ${humanScore}, Computer: ${computerScore}`);
 }
 if(humanChoice==="Paper" && computerChoice==="Rock"){
    humanScore++
    alert(`You win, paper beats rock. Human: ${humanScore}, Computer: ${computerScore}`)
 }
 if(humanChoice==="Scissors" && computerChoice==="Paper"){
    humanScore++
    alert(`You win, paper beats scissors. Human: ${humanScore}, Computer: ${computerScore}`)
 }
 if(humanChoice==="Paper" && computerChoice==="Scissors"){
    computerScore++
    alert(`You lose, scissors beats paper. Human: ${humanScore}, Computer: ${computerScore}`);
 }
 if(humanChoice==="Rock" && computerChoice==="Scissors"){
    humanScore++
    alert(`You win, scissors beats rock. Human: ${humanScore}, Computer: ${computerScore}`);
 }
 if(humanChoice==="Scissors" && computerChoice==="Rock"){
    computerScore++
    alert(`You lose, rock beats scissors. Human: ${humanScore}, Computer: ${computerScore}`);
 }
 if(humanChoice===computerChoice){
    alert("You have picked the same thing as the computer -"+humanChoice+"your score is ",humanScore,"computer socre is",computerScore)
 }

}





function playGame(){

    for (let i=0; i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    
    
}
playGame()