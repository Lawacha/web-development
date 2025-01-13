let url="https://catfact.ninja/fact";
// function fetchData(){
//     return fetch(url);
// }
// fetchData().then((res)=>{
//     console.log("res",res);
//    return res.json();
    
// }).then((data)=>{
//     console.log("data 1",data);
//     console.log("fact 1",data.fact);
//     return fetchData();
// }).then((res2)=>{
//     console.log("res2-",res2);
//     return res2.json();
// }).then((data2)=>{
//     console.log("data 2",data2);
//     console.log("fact 2-",data2.fact)
// })
// .catch((err)=>{
//     console.log(err);
// });
async function getData() {
   try{
    let res=await fetch(url); //waits until asynchronous call is completed;
    let data=await res.json();
    console.log(res);
    console.log(data.fact);
    
    let res2=await fetch(url); //waits until asynchronous call is completed;
    let data2=await res2.json();
    console.log(res2);
    console.log(data2.fact);
   }
   catch(e){
    console.log("error",e)
   }
}
getData();
