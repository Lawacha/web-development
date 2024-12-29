let inp=document.querySelector("input");
let p=document.querySelector("p");
inp.addEventListener("input",function(event){
    p.innerText=this.value;
   console.log(this.value);
});