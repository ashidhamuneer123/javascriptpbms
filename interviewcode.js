//reverse of a string

function reversestring(str){
    return str.split("").reverse().join("");
}
console.log(reversestring("Welcome Ashidha"))

//revering string using arrow function

const reverse = (str) => str.split("").reverse().join("")
console.log(reverse("ash"))

//greatest num in an array

const array3=[1,2,3,4,5,6,7,8,9,12,34,56,78,90,34,67,89]
function findMaxNumber(array3) { 

    return Math.max(...array3); 
  
  } 
  console.log(findMaxNumber(array3))
//smallest num in an array

function findSmallNum(array3){
    return Math.min(...array3)
}
console.log(findSmallNum(array3))
//sum of all numbers in an array

function sumofall(array3){
    return array3.reduce((total,num) => total + num , 0)
}
console.log(sumofall(array3))
//sum of two numbers
function sumoftwo(a,b){
    return a+b
}
let sum=sumoftwo(3,4)
console.log(sum)

// palindrome string
let str="malayalam"
let a=str===str.split("").reverse().join("")  
if(a==true)
{
    console.log("palindrome")
}
else
{
console.log("Not palindrome")

}

let string="hollow"
let s=string===string.split("").reverse().join("")
if(s==true)
{
    console.log("pal")
}else{
    console.log("npal")
}


array5=[2,34,54,65,77,88,23,56,78,99,76]
function greatestNum(array5){
    return Math.max(...array5)
}
console.log(greatestNum(array5))


let arrstr=["Ashidha","Muneer"];
let letters=arrstr.flatMap((str)=>str.split(''))
console.log(letters)

let arrstr1=["Ashidha","Muneer"];
let letters1=arrstr.map((str)=>str.split(''))
console.log(letters1)

