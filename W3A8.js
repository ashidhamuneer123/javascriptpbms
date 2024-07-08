let read = require('readline-sync');
let limit = read.questionInt("Enter the limit:")
let sum = 0;
for(let i=1;i<=limit;i++){
if(i%2 != 0)
sum = sum + i
}
console.log("Sum of Odd numbers upto ",+limit+ "=",+sum)
