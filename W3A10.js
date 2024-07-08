let read = require('readline-sync');
let size = read.questionInt("Enter the size of array:")
let array1=[]
let array2 = []
let temp = []
console.log("Enter the elements of array 1:")
for(let i=0;i<size;i++)
{
    array1[i] =read.questionInt()
}
console.log("Enter the elements of array 2:")
for(i=0;i<size;i++)
{
    array2[i] = read.questionInt()
}
console.log("Arrays after swapping:")
for(i=0;i<size;i++)
{
    temp[i] = array1[i]
    array1[i] = array2[i]
    array2[i] = temp[i]
}
console.log("Array 1 :"+array1)
console.log("Array 2:"+array2)