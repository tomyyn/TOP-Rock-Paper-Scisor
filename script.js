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
    let color = "ivory"
    if(res=="Draw") aux=`Draw! <br> you both choosed ${playerSelection}`; 
    else if (res=="Win") {
        score=document.querySelector(".player.score");
        score.textContent=++playerV;
        if(playerV<5){
            aux=`You won! <br> ${playerSelection} beats ${computerSelection}`;
        }
        else{
            aux="You won the game!! <br> Thanks for playing :D <br> Press Reset to start again";
            color="yellow";
        }
    }
    else {
        score=document.querySelector(".computer.score");
        score.textContent=++computerV;
        if(computerV<5){
            aux=`You lost! <br> ${computerSelection} beats ${playerSelection}`;
        }
        else{
            aux="You lost the game!! <br> Thanks for playing :D <br> Press Reset to start again";
            color="pink";
        }
    }

    roundRes=document.querySelector("#report")
    roundRes.innerHTML=aux;
    roundRes.style.color=color;

}

//Play one round
function playRound(playerSelection,computerSelection)
{
    let retVal;
    if(playerSelection==computerSelection) retVal="Draw"; 
    else if((playerSelection=="rock" && computerSelection=="scissor")||(playerSelection=="scissor" && computerSelection=="paper")||(playerSelection=="paper" && computerSelection=="rock")) retVal="Win";
    else retVal="Loose";

    updScore(retVal, playerSelection, computerSelection);
}

function updImages(who, img){
    im = document.querySelector(`#${who}`);
    im.src = `./imgs/${img}.png`
}


function rpsButtonListener(e){
    let comPlay = computerPlay();
    if((playerV>=5)||(computerV>=5)) return;
    updImages("playerChoose",e.target.id);
    updImages("computerChoose",comPlay);
    
    playRound(e.target.id,comPlay);
}

function resetButtonListener(e){
    updImages("playerChoose","unknown");
    updImages("computerChoose","unknown");

    let aux;
    aux=document.querySelector(".player.score");
    aux.textContent=0;
    playerV=0;
    aux=document.querySelector(".computer.score");
    aux.textContent=0;
    computerV=0;

    aux=document.querySelector("#report")
    aux.textContent="";
    aux.style.color="ivory";
}


buttons = document.querySelectorAll(".buttons button")
buttons.forEach((button)=>{button.addEventListener("click",rpsButtonListener)})

rst = document.querySelector(".reset button");
rst.addEventListener("click", resetButtonListener);