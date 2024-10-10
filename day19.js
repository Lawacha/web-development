//practice question no one
// let arr=[1,2,3,4,5,6,7,8,9];
// let num =3;
// function findGreat(){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num)
//         {
//             console.log(arr[i]);
//         }
//     }
// }
// findGreat();

//practice question two
let str="abcdabcdefggh";


//question three
let country=["australia","germany","united states of america"];
console.log(country.length);
function findGreat(country){
    for(let i=0;i<country.length;i++){
        let a=[];
        a[i]=country[i].length;
        if(a[i]>a[i-1]&&a[i]>a[i+1])
        {
            console.log(country[i]);
        }
    }
}
findGreat(country);