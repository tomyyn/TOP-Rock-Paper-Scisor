const ROCK = 1;
const PAPER = 2;
const SCISOR = 3;

function computerPlay()
{
    let randN = Math.floor(Math.random()*3);
    let retVal;
    if (randN==0) retVal=ROCK;
    else if (randN==1) retVal=PAPER;
    else retVal=SCISOR;
    return retVal 
}