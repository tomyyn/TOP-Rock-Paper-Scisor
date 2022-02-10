//Choose computer selection
function computerPlay()
{
    let randN = Math.floor(Math.random()*3);
    let retVal;
    if (randN==0) retVal="ROCK";
    else if (randN==1) retVal="PAPER";
    else retVal="SCISOR";
    
    return retVal 
}

//Verify if an input is valid
function checkInput(str){
    return(str=="rock"||str=="paper"||str=="scisor")
}

//Read user input until it is correct
function getInput(){
    let input = window.prompt("Enter your selection!").toLowerCase()
    while(!checkInput(input)){
        console.log("Invalid selection");
        input = window.prompt("Enter your selection!")
    }

    return input;
}

//Play one round
function playRound(playerSelection,computerSelection)
{
    let retVal;

    if(playerSelection==computerSelection) retVal="Draw"; 
    else if((playerSelection=="rock" && computerSelection=="scisor")||(playerSelection=="scisor" && computerSelection=="paper")||(playerSelection=="paper" && computerSelection=="rock")) retVal="Win";
    else retVal="Loose";

    return retVal;
}

//Main game loop
function game(){
    let playerV=0, computerV=0, aux, playerSelection,computerSelection;
    for(let i=0;i<5;i++){     
        playerSelection=getInput();
        computerSelection=computerPlay();
        
        aux=playRound(playerSelection,computerSelection);

        if(aux=="Draw") aux=`Draw! you both choosed ${playerSelection}`; 
        else if (aux=="Win") {
            aux=`You won! ${playerSelection} beats ${computerSelection}`;
            playerV++;
        }
        else {
            aux=`You lost! ${computerSelection} beats ${playerSelection}`;
            computerV++;
        }

        console.log(aux)
    }

    if(playerV>computerV) aux="You won";
    else if(computerV>playerV) aux="You lost"
    else aux="Draw"

    console.log(aux + ` ${playerV} to ${computerV}` + "\nThanks for playing!");
}


game()