let read = require('readline-sync');
let array=[]
let size=read.questionInt("Enter the size of Array: ")
class Array{
    getArray()
    {
      console.log("Enter the elements of Array : ")
       for(let i=0;i<size;i++)
       {
       array[i]=[]
       for(let j=0;j<size;j++)
       {
        array[i][j]=read.questionInt()
       }
      }
       
    }
    displayArray()
    {
       console.log(array)
    }
}
let myarray=new Array()
myarray.getArray()
myarray.displayArray()