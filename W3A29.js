let read=require('readline-sync');
let myArray=[]
let sum=0
let size=read.questionInt("Enter the Size of Array:")
function myFilter(myArray,callback)
{
   console.log("SUM:")
   return sum
}
console.log("Enter the elements of Array:")
for(let i=0;i<size;i++)
{
    myArray[i]=read.questionInt()
}
function callback()
{
     for(let i=0;i<size;i++)
     {
        sum=sum+myArray[i]
        
     }
     if(sum%2==0)
     return true
     else
     return false
      }

    console.log(callback())
    console.log(myFilter(callback))




