function computerPlay()
{
    let randN = Math.floor(Math.random()*3);
    let retVal;
    if (randN==0) retVal="ROCK";
    else if (randN==1) retVal="PAPER";
    else retVal="SCISOR";
    return retVal 
}

function checkInput(str){
    return(str=="rock"||str=="paper"||str=="scisor")
}

function playRound(playerSelection,computerSelection)
{
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    let retVal;
    if(playerSelection==computerSelection) retVal=`Draw! you both choosed ${playerSelection}`; 
    else if((playerSelection=="rock" && computerSelection=="scisor")||(playerSelection=="scisor" && computerSelection=="paper")||(playerSelection=="paper" && computerSelection=="rock")) retVal=`You won! ${playerSelection} beats ${computerSelection}`;
    else retVal=`You lost! ${computerSelection} beats ${playerSelection}`;

    return retVal;
}