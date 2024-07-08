let read = require('readline-sync');
let size = read.questionInt("Enter the size of Array:")
let array=[]
console.log("Enter the elements:")
for(let i=0;i<size;i++)
{
    array[i]=read.questionInt()
}
array.sort(descent);
console.log("Array after sorting in descending order:")
function descent(a,b)
{
    return b-a
}
console.log(array)