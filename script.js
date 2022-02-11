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

function updScore(res,playerSelection,computerSelection){
    let aux;
    if(res=="Draw") aux=`Draw!\nyou both choosed ${playerSelection}`; 
    else if (res=="Win") {
        aux=`You won!\n${playerSelection} beats ${computerSelection}`;
        playerV++;
    }
    else {
        aux=`You lost!\n${computerSelection} beats ${playerSelection}`;
        computerV++;
    }

    roundRes=document.querySelector("#report")
    roundRes.textContent=aux;

}

//Play one round
function playRound(playerSelection,computerSelection)
{
    let retVal;
    if(playerSelection==computerSelection) retVal="Draw"; 
    else if((playerSelection=="rock" && computerSelection=="scissor")||(playerSelection=="scissor" && computerSelection=="paper")||(playerSelection=="paper" && computerSelection=="rock")) retVal="Win";
    else retVal="Loose";

    updScore(retVal, playerSelection, computerSelection);
    
    return retVal;
}

function updImages(who, img){
    im = document.querySelector(`#${who}`);
    im.src = `./imgs/${img}.png`
}


function rpsButtonListener(e){
    let comPlay = computerPlay();

    updImages("playerChoose",e.target.id);
    updImages("computerChoose",comPlay);
    
    let res = playRound(e.target.id,comPlay);
    console.log(res);
}

function resetButtonListener(e){
    console.log("You pressed reset!");
}


buttons = document.querySelectorAll(".buttons button")
buttons.forEach((button)=>{button.addEventListener("click",rpsButtonListener)})

rst = document.querySelector(".reset button");
rst.addEventListener("click", resetButtonListener);