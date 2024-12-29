let btn=document.querySelector(".button1");
let div=document.querySelector("div");
let h3=document.querySelector("h3");
let btn1=document.querySelector(".reset");
btn.addEventListener("click",function(){
    let randomColor=generateColor();
    h3.innerText=randomColor;
    div.style.backgroundColor=randomColor;
});

function generateColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
};

btn1.addEventListener("click",function(){
    h3.innerText="Generate a random color";
    div.style.backgroundColor="rgb(255,255,255)";
});