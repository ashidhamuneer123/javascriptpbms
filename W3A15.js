let read=require('readline-sync');
let array=[]
let size=read.questionInt("Enter the size of Array:")
class Array
{
    getarray()
    {
        console.log("Enter the Array Elements:")
       for(let i=0;i<size;i++)
       {
        array[i]=read.questionFloat()
       }
    }
    displayarray()
    {
          console.log("Entered Array is:")
        for(let i=0;i<size;i++)
        {
            console.log(array[i])
        }
    }
}
let myarray=new Array()
myarray.getarray()
myarray.displayarray()