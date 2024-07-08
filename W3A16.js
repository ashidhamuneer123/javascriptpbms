let read=require('readline-sync');
let num=read.questionInt("Enter a number:")
let flag=0
for(let i=2;i<num;i++)
{
    if(num%i==0)
    flag=1 
}
if(flag==1 || num==1)
console.log("NOT A PRIME NUMBER")
else
console.log("PRIME NUMBER")
