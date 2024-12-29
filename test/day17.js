// let student=[["aman",98],["shradha",99],["rajat",100]];
// for(let i=0;i<student.length;i++){
//     console.log(i,student[i]);
//     for(let j=1;j<student[i].length;j++)
//     {
//         console.log(student[i][j]);
//     }
// }

// let todo=[];
// let req=prompt("enter request");
// while(true){
//     if(req=="quit")
//     {
//         console.log("quitting");
//         break;
//     }
//     else if(req=="list")
//     {console.log("---------------------");
//         for(let i=0; i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("---------------------");
//     }
//     else if(req=="add"){
//         let task=prompt("enter task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req=="delete")
//     {    for(let i=0; i<todo.length;i++){
//         console.log(i,todo[i]);}
//         let del=prompt("enter task number you want to delete");
//         todo.splice(del,1);
//         console.log("task deleted");
//     }
//     else{
//         console.log('invalid request');
//         break;
//     }
//     req=prompt("enter request");   
// }


//question one
// let arr=[1,2,3,4,5,6,2,3];
// console.log("before:",arr);
// let num=2;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==num)
//     {
//         arr.splice(i,1);
//     }
// }
// console.log("after:",arr);


//question three
let num="287152";
let sum=0;
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
    sum=sum+num[i]
}
console.log(sum);