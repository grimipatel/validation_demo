// const number =543
// const str = number.toString()
// const strArray = str.split('')
// const reverseArray =strArray.reverse()
// const arrayToString = reverseArray.join('')

// console.log("reverse is : ", Number(arrayToString))

// let age = prompt("what is your age")
// if(age>10 && age<20){
//     console.log("your age lies between 10 and 20")
// }
// else{
//     console.log("your age doesn't lies between 10 and 20")
// }

/*let age = prompt("what is your age");
switch(age){
    case 12:
        console.log("your age is 12")
        break;
    case 13:
        console.log("your age is 12")
        break;
    case 14:
        console.log("your age is 12")
        break;
    case 15:
        console.log("your age is 12")
        break;
    default:
        console.log("your age is not special")
}*/

/*let num = prompt("what is your age")
num = Number.parseInt(num)
if (num % 2 == 0 || num % 3 == 0) {
    console.log("your number is divisible by 2 and 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}*/

// let age = 12
// let a = age>18? "you can drive" : "you can not drive"
// console.log(a)

// for(let i=0; i<5; i++){
//     console .log(i)
// }

// let sum = 0
// let n =prompt("Enter the value of n")
// n = Number.parseInt(n)
// for(let i=0; i<n; i++){
//     sum += (i+1)
//     console.log((i+1), "+" )
// }
// console.log("sum of first number"  +  n  +  " natural number is "  +  sum)


/*function reverseNum(num){
    if(num>=0 && num<=9){
        return num;
    }
    let reverseNum = 0;
    while(num != 0){
        reverseNum = reverseNum * 10 +(num%10)
        num = Math.floor(num/10)
    }
   return reverseNum;
}
console.log(reverseNum(123))*/

/*function findLargest(a, b, c, d) {
    let largest;
  
    if (a >= b && a >= c && a >= d) {
      largest = a;
    } else if (b >= a && b >= c && b >= d) {
      largest = b;
    } else if (c >= a && c >= b && c >= d) {
      largest = c;
    } else {
      largest = d;
    }
  
    return largest;
  }
  
  const a = 15;
  const b = 5;
  const c = 8;
  const d = 10;
  const result = findLargest(a,b,c,d);
  
  console.log("The largest value is:", result);*/

  /*let sum =0
  let n = prompt("enter the number n")
  n = Number.parseInt(n)
  for(let i = 0; i<n; i++){
    sum += (i)
  }
  console.log(n + sum)*/

  /*let obj = {
    grimi : 28,
    tisha : 45,
    rutvi : 45,
    dhani : 35
  }
  for(let a in obj){
     console.log(a + obj[a])
  }*/

     /*let n = prompt("enter the value of n")
     n = Number.parseInt(n)
     let i = 0;
     while(i < n){
        console.log(i)
        i++; 
     }*/


     /*function reverseNum(num){
        if(num>=0 && num<=9){
            return num;
        }
        let reverseNum = 0;
        while(num != 0){
            reverseNum = reverseNum * 10 +(num%10)
            num = Math.floor(num/10)
        }
       return reverseNum;
    }
    console.log(reverseNum(123))*/

    /*let n = prompt("enter the number n")
    n = Number.parseInt(n)
    let i = 10;
    do{
        console.log(i)
        i++;
    }while(i < n)*/


    /*const hello = ()=>{
        console.log("hey how are you")
        return "hi"
    }

    function onePlusAvg(x,y){
        return 1 + (x + y) / 2
    }
    
    const sum = (p, q)=>{
        return p + q
    }

    let a = 1;
    let b = 2;
    let c = 3;
    let v = hello();

    console.log(v)
    console.log(onePlusAvg(a ,b))
    console.log(onePlusAvg(b, c))
    console.log(onePlusAvg(c, a))
    console.log(sum(9,7))*/

    /*let marks = {
        grimi : 34,
        tisha : 35,
        rutvi : 36,
        dhani : 37
    }
    
    for (let i in marks){
        console.log(i + marks [i])
    }*/

    /*let cn = 23
    let i
    while(i != cn){
        i = prompt("enter a number")
    }
    console.log("you have entered a correct number")*/

    /*const mean =(a, b, c, d) => {
        return(a+ b+ c+ d)/4
    }

    console.log(mean(4, 5, 6, 7))*/

    /*let name = "grimi"
    console.log(name.length)*/

    let girl1 = "grimi";
    let girl2 = "tisha";
    
    let sentence = `${girl1} is friend of ${girl2}`
    console.log(sentence)