//array destructuring
let arr1 = ["hi","hello","hey"]

let[one,two,three]=arr1
console.log(one,two,three)

//object destructuring
let obj={
    state:"kerala",
    language:"malayalam"
}
let {state,language}=obj
console.log(state,language)


let array = [1,2,3,4,5]
let [a,b,c,d,e] = array
console.log(a+b+c+d+e)

function evenSum(...numbers){
    
        return numbers.reduce((total,num)=>total+num,0)
    
}
console.log(evenSum(1,2,3,4,5))

let even = array.filter((x)=>x%2==0)
let sumEven=even.reduce((total,num)=>total+num,0)
console.log(sumEven)


let arr=[4,5,6]
let [n1,n2,n3]=arr
console.log(n1)
console.log(n1+n3)


let arr2=[n1,n2,n3+1]
console.log(arr2)



let array1 = [33,4,556,76,87,8]
let evenArr=array1.filter((num)=>num%2===0)
let resulttt=evenArr.reduce((sum,num)=>sum+num,0)
console.log(resulttt);

