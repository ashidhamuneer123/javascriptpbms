const numbers = [5, 10, 15, 20];
// Expected output: 50
const res=numbers.reduce((t,n)=>t+n,0)
console.log(res);


//count num of even numbers
const numbers1 = [2, 5, 8, 11, 14];
// Expected output: 3
const even=numbers1.filter((x)=>x%2==0)
const c=even.length;
console.log(c);


//Find the average of all numbers in an array.
const numbers2 = [10, 20, 30, 40, 50];
// Expected output: 30
let cnt=numbers2.length;
const avg=numbers2.reduce((t,n)=>t+n/cnt,0)
console.log(avg);

//Check if all elements in an array are greater than a specific value.

const numbers3 = [25, 10, 35, 40];
const threshold = 20;
// Expected output: false

const res3=numbers3.every((num)=>num>threshold)
console.log(res3);

//check if atlest one element greater than a specific value
const numbers4=[22,34,1,55,67,3]
const val=20
const res4=numbers4.some((num)=>num>val)
console.log(res4);

//Remove all duplicate elements from an array.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// Expected output: ['apple', 'banana', 'orange']
const res5=new Set(fruits)
const arrRes=Array.from(res5)
console.log(arrRes);


//Find the index of a specific element in an array.
const colors = ['red', 'green', 'blue', 'yellow'];
const targetColor = 'blue';
// Expected output: 2
const res6=colors.indexOf(targetColor)
console.log(res6);

//Sort an array of strings alphabetically.
const names = ['John', 'Alice', 'Bob', 'Charlie'];
// Expected output: ['Alice', 'Bob', 'Charlie', 'John']
const res7=names.sort()
console.log(res7);

//Reverse the elements of an array.
const elements = [1, 2, 3, 4, 5];
// Expected output: [5, 4, 3, 2, 1]
const res8=elements.reverse()
console.log(res8);

//Find the maximum element in an array.
const numbers9 = [10, 20, 30, 40, 50];
// Expected output: 50

let res9=Math.max(...numbers9)
console.log(res9)

//Merge two arrays into a single array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Expected output: [1, 2, 3, 4, 5, 6]
const res10=arr1.concat(arr2)
console.log(res10);

//Reduce: Concatenate all elements of an array into a single string. 
const words = ['Hello', 'World', 'from', 'JavaScript'];
const res11=words.toString().replaceAll(","," ")
const res12=words.reduce((acc,current)=>acc+current,"")
console.log(res11);
console.log(res12);

const words1 = ['apple', 'banana', 'orange', 'kiwi'];
// Expected output: [5, 6, 6, 4]
//Map: Convert an array of strings to an array of their lengths.
const res13=words1.map((item)=>item.length)
console.log(res13);