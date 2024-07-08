let read = require('readline-sync')
let arr1=[]
let arr2=[]
let size=read.questionInt("Enter the size of array:")
console.log("Enter the Array elements:")
for(let i=0;i<size;i++)
{
    arr1[i]=read.questionFloat()
}
console.log("Array after multiplying with adjacent element:")
for(i=0;i<size-1;i++)
{
    arr2[i]=arr1[i]*arr1[i+1]
}
console.log(arr2)