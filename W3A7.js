let read = require('readline-sync');
let number = read.questionInt("Enter the number")
console.log("Multiplication Table of "+number)
for(let i=1 ; i<=10 ; i++)
{
    let result = number * i
    console.log(number+ 'x' +i+ '=' +result)
}

