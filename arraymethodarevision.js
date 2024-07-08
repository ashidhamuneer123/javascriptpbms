let arr1=[10,20,30]
let length=arr1.push(40,50)
console.log(arr1)
console.log(length)

let colours=["orange","red","white","black"]
let byp=["blue","yellow","pink"]
for(color of byp){
    colours.push(color)
}
//or
// colours.push(...byp)
console.log(colours)

let fruits=["orange","apple","banana","kiwi","guava"];
let sliceFruits=fruits.slice(2,4)
console.log(sliceFruits)

let fruitSplice=["orange","apple","banana","kiwi","guava"];
fruitSplice.splice(3,1);


fruitSplice.splice(2,0,"pineapple","pomegranate")
console.log(fruitSplice)


let num=[1,2,3,4,5]
let numSlice=num.slice(1,4)
console.log(numSlice)

num.splice(3,1)
console.log(num)
num.splice(1,0,8,9,7)
console.log(num)

let string=["orange","apple","banana","kiwi","guava","ant","ball"];
let a=string.filter((word)=>word.startsWith("a"))
console.log(a)

let wordss=["orange","apple","banana","kiwi","guava","ant","ball","also","but","cut","dress","audit"]
let w1=wordss.filter((w)=>w.startsWith("a"))
let w2=wordss.filter((w)=>w.endsWith("a"))
console.log(w1,w2);



    
        
    
