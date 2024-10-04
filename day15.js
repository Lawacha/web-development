let size=prompt("enter your size");
if(size==="XL")
    {console.log("price if rs 250");}

else if(size==="L")
       { console.log("price is rs 20");}
    else if(size ==="M")
        {console.log("price is rs 100");}
    else if(size==="S")
    {console.log("price is rs 50");}
    
else{console.log("free");}
    
let str=prompt("enter your string");
if(str[0]==="a"&&str.length>3)
    console.log("is a good string");
else
    console.log("is a bad string");

// Practice question(day 15)
let num=10;
if(num%10==0){
    console.log("good");
}
else
{
    console.log("bad");
}

// //question no two
let username=prompt("enter your username");
let age=prompt("enter your age");
alert(`${username} is ${age} years old`);

//question no three
let quarter=Number(prompt("enter quarter 1-4"));
switch(quarter){
    case 1:
        console.log("jan,febb,march");
        break;
        case 2:
            console.log("april,may,june");
            break;
            case 3:
                console.log("july, august, september");
                break;
                case 4:
                    console.log(october,nov,dec);
                    break;
                    default:
                        console.log("invalid");
        
}
 
// //question four
let a=prompt("enter a");
let b=prompt("enter b");
let c=prompt("enter c");
if(a>b)
{
    if(a>c)
        console.log("a is greatest");
    else
    console.log("c is greatest");
}
else{
    if(b>c)
        console.log("b is greatest")
    else
    console.log("c is greatest");
}


