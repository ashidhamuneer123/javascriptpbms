let read = require('readline-sync');
let pa = read.questionInt("Enter the Principal Amount:")
let interest = read.questionFloat("Enter the interest:")
let years = read.questionFloat("Enter the number of years:")
SimpleInterest = (pa * interest * years)/100
console.log("Simple Interest =", +SimpleInterest)