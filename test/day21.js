//question no one
let arr=[1,2,3,4,5];
let square=arr.map((num)=>{
    return num*num;
});
console.log(square);

let sum=arr.reduce((acc,el)=>(acc+el),0);
console.log(sum);
let avg=sum/arr.length;
console.log(avg);

//question no two
let newArray=arr.map((el)=>{
    return el+5;})
console.log(newArray);

//question no three
let names=["shradha","aman","rohan","rajat"];

let newName=names.map((name)=>
    name.toUpperCase()
 );
 console.log(newName);

//question no four
