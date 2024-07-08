let read = require('readline-sync');
let num1=read.questionFloat("Enter the first number:")
let num2=read.questionFloat("Enter the second number:")
class Arithmetic{
        add()
        {
           let sum=num1+num2
           console.log("RESULT= "+sum)
        }
        Sub()
        {
            let sub=num1-num2
            console.log("RESULT= "+sub)
        }
        mul()
        {
             let mul=num1*num2
             console.log("RESULT= "+mul)
        }
        div()
        {
              let div=num1/num2
              console.log("RESULT= "+div)
        }
}
let choice=read.questionInt("Enter your choice:\n1.ADDITION\n2.SUBTRACTION\n3.MULTIPLICATION\n4.DIVISION")
let myclass=new Arithmetic()
switch(choice)
{
    case 1:
        myclass.add()
        break;
    case 2:
        myclass.Sub()
        break;
    case 3:
        myclass.mul()
        break;
    case 4:
        myclass.div()
        break;
    default:
        console.log("Invalid Choice!!!")
        break;
}

