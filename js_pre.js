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

let sum = 0
let n =prompt("Enter the value of n")
n = Number.parseInt(n)
for(let i=0; i<n; i++){
    sum += (i+1)
    console.log((i+1), "+" )
}
console.log("sum of first number"  +  n  +  " natural number is "  +  sum)