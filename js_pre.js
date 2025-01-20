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


     function reverseNum(num){
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
    console.log(reverseNum(123))