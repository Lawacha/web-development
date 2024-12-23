let btn=document.querySelector("button");
btn.addEventListener("click",changeColor);

function changeColor(){
    this.style.backgroundColor="green";
}
let h2=document.querySelector("h2")
let inp=document.querySelector("input");
inp.addEventListener("input",function(){
    let filterName=inp.value.replace(/[^a-zA-Z\s]/g,'');
    inp.value=filterName;
    h2.innerText=filterName;
})