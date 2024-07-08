let read = require('readline-sync');
let string = read.question("Enter the string:")
let flag=0
let length = string.length
for(let i=0;i<length;i++)
{
    if(string[i] != string[length-i-1])
    flag=1
}
if(flag==0)
console.log("PALINDROME STRING!!!")
else
console.log("NOT A PALINDROME STRING!!!")