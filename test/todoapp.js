let inp=document.querySelector("#task");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
   let item=document.createElement("li");
   item.innerText=inp.value;
    ul.appendChild(item);

    let delBtn=document.createElement("button" );
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    inp.value="";
});

//using event bubling
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
             par.remove();
    }
});

//without using bubling
// let delBtns=document.querySelectorAll(".delete");
//     for( delBtn of delBtns){
//         delBtn.addEventListener("click",function(){
//        let par=this.parentElement;
//        par.remove();
    
// });}