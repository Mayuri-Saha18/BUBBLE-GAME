function makeBubble(){
    var clutter="";

for(let i=1;i<=198;i++){
    let rn=Math.floor(Math.random()*10)
    clutter+=` <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;

}
var timer=60;
var score=0;
var hitrn=0;

function getNewHit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent=hitrn;
}



function increaseScore(){
    score+=10;
    document.querySelector("#ScoreVal").textContent=score;
}


function runTimer(){

    var timerint=setInterval(() => {
        if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent=timer;
    }
    
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1 id="gameOver">Game Over</h1>`;
    }
    },1000);
}


document.querySelector("#pbtm").addEventListener("click",function(details){

    var number=Number(details.target.textContent)
    if(hitrn===number){
        increaseScore();
        makeBubble();
        getNewHit();
    }

})
getNewHit()
runTimer()
makeBubble()