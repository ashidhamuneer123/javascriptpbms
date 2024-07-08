let read = require('readline-sync');
let arr1=[]
let arr2=[]
let sum=[]
let size=read.questionInt("Enter the size of Array: ")
class Array{
    getArray()
    {
      console.log("Enter the elements of Array 1: ")
       for(let i=0;i<size;i++)
       {
       arr1[i]=[]
       for(let j=0;j<size;j++)
       {
        arr1[i][j]=read.questionInt()
       }
      }
       console.log("Enter the elements of Array 2: ")
       for(let i=0;i<size;i++)
       {
       arr2[i]=[]
       for(let j=0;j<size;j++)
       {
        arr2[i][j]=read.questionInt()
       }
     }
    }
    addArray()
    {
        for(let i=0;i<size;i++)
        {
        sum[i]=[]
        for(let j=0;j<size;j++)
        {
            sum[i][j]=arr1[i][j]+arr2[i][j]
        }
    }
    }
    displayArray()
    {
       console.log(sum)
    }
}
let myarray=new Array()
myarray.getArray()
myarray.addArray()
myarray.displayArray()
