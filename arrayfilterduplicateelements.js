
//duplicates in an array
const array=[2,3,4,5,2,3,7,8]
const duplicate=array.filter((ele,index,arr)=>arr.indexOf(ele)!=index)
console.log(duplicate)


const dup=new Set(array)
console.log(dup);

const dupe=array.filter((ele,index,arr)=>arr.indexOf(ele)!=index)
console.log(dupe)

//even and odd 

const arr1=[1,2,3,4,5,6,7,8,9]
const even=arr1.filter(x => x % 2 == 0)
const odd=arr1.filter(x => x % 2 != 0)
console.log([even,odd])

//numbers greater than 20 

const arr2=[2,3,45,65,34,12,13,77,83,1,5]
const great=arr2.filter( x => x > 20 )
console.log(great)

//numbers between 20 & 50

const arr3=[12,23,15,34,55,67,87,29,90,1]
const ar=arr3.filter(x => x > 20 && x < 50)
console.log(ar)

//square

const arr4=[1,2,3,4,5,6,7,8,9]
const square=arr4.map(a => a ** 2)
console.log(square)



const arr5=[2,2,2,2,3,3,3,4,4,6,6,77,5,4,3,2,9,8,7,6]

const dupli=arr5.filter((ele,index,arr)=>arr.indexOf(ele)!=index)
console.log(dupli)


const d=arr5.filter((ele,index,arr)=>arr.indexOf(ele)!=index)
console.log(d);