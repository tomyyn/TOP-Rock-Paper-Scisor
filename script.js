let playerV=0, computerV=0;

//Choose computer selection
function computerPlay()
{
    let randN = Math.floor(Math.random()*3);
    let retVal;
    if (randN==0) retVal="rock";
    else if (randN==1) retVal="paper";
    else retVal="scissor";
    
    return retVal 
}

//Play one round
function playRound(playerSelection,computerSelection)
{
    let retVal;
    if(playerSelection==computerSelection) retVal="Draw"; 
    else if((playerSelection=="rock" && computerSelection=="scissor")||(playerSelection=="scissor" && computerSelection=="paper")||(playerSelection=="paper" && computerSelection=="rock")) retVal="Win";
    else retVal="Loose";

    return retVal;
}

//Main game loop
function game(){
    let aux, playerSelection,computerSelection;
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

function updImages(who, img){
    im = document.querySelector(`#${who}`);
    im.src = `./imgs/${img}.png`
}

function rpsButtonListener(e){
    let comPlay = computerPlay();
    let res = playRound(e.target.id,comPlay)
    console.log(res);

    updImages("playerChoose",e.target.id)
    updImages("computerChoose",comPlay)
}

function resetButtonListener(e){
    console.log("You pressed reset!");
}


buttons = document.querySelectorAll(".buttons button")
buttons.forEach((button)=>{button.addEventListener("click",rpsButtonListener)})

rst = document.querySelector(".reset button");
rst.addEventListener("click", resetButtonListener);