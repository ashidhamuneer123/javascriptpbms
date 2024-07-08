let read = require('readline-sync');
let size = read.questionInt("Enter the size of the array:")
let array = []
let count = 0
console.log("Enter the elements of array:")
for(let i=0;i<size;i++)
{
    array[i] = read.questionInt()
    if(array[i]%2==0)
    count=count+1
}
console.log("Number of even numbers : "+count)
