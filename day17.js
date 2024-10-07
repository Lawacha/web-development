// let student=[["aman",98],["shradha",99],["rajat",100]];
// for(let i=0;i<student.length;i++){
//     console.log(i,student[i]);
//     for(let j=1;j<student[i].length;j++)
//     {
//         console.log(student[i][j]);
//     }
// }
let todo=[];
let req=prompt("enter request");
switch(req){
    case "add":
        let task=prompt("enter task");
        todo.push(task);
        console.log("task added");
        break;
    case "list":
        console.log(todo);
        break;
    
    
    }
