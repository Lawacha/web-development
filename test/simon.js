//step 1: initialization 
let gameSeq=[];
let userSeq=[];
let color=["red","blue","green","yellow"];
let started=false;
let level=0;
let h3=document.querySelector("h3");

//step 2: keypress and level updation
document.addEventListener("keypress",function(){
        if(started==false){
            console.log("game started");
            started=true;
            levelUp();
        }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function levelUp(){
    level++;
    h3.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randColor=color[randomIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    console.log(randomIdx);
    console.log(randColor);
    console.log(randBtn);
}
