//question no. one
let square=(n)=>{
    for(let i=1;i<=n;i++){
        console.log(i*i);
    }
}
square(9);

//question no. two


//practice question no. one
let arr=[1,2,3];
let sum=0;
let avg;
const arrayAverage=(arr)=>{
    for(let i=0;i<arr.length;i++){
         sum=sum+arr[i];
    }
    avg=sum/arr.length;
    console.log(`the average is ${avg}`);
}
arrayAverage(arr);

//practice question no. two
let num=2;
const even=(num)=>{
   return num%2==0;
}
console.log(even(num));

//practice question no. three
const object = {
    message: "helloworld",
    logMessage() {
      console.log(this.message);
    }
  };
  
  setTimeout(object.logMessage, 1000);

  //practice question no. four
  let length=4;
  function callback(){
    console.log(this.length);
  }
  const objects={
    length:5,
    method(callback){
        callback();
    },
  }
  objects.method(callback,1,2);
  