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
function findGreatcountry(country){
    for(let i=0;i<country.length;i++){
        let a=[];
        a[i]=country[i].length;
        if(a[i]>a[i-1]&&a[i]>a[i+1])
        {
            console.log(country[i]);
        }
    }
}
findGreatcountry(country);

//question no four
// let strin="aeiou";
// let count=0;
// function countVowels(strin){
//     for(let i=0;i<strin.length;i++)
//     {
//         if(strin[i]=="a"||strin[i]=="e"||strin[i]=="i"||strin[i]=="o"||strin[i]=="u")
//     {
//         count++;
//     }
//         }
//         return  count;
// }
// let v=countVowels(strin);
// console.log(v);

//question five
// let start=10;
// let end=11;
// function generateRandom(start,end){
//     let diff=end-start+1;
// let random=Math.floor(Math.random()*diff)+start;
// return random;
// }
// console.log(generateRandom(start,end));

