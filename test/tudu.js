let addBtn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");


addBtn.addEventListener("click",function()
{
    let newTask=document.createElement("li");
    newTask.innerText=inp.value;
    ul.appendChild(newTask);
   inp.value="";

   let delBtn=document.createElement("button");
   delBtn.innerText="Delete";
   newTask.appendChild(delBtn);
   delBtn.classList.add(".delete");
   
});
ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
    let par=event.target.parentElement;
    par.remove();
  }
})
