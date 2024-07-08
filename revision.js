const { reject } = require("promise");

const person ={
    name:"ashidha",
    details:function(age,place){
        console.log(`name:${this.name} age:${age} place:${place}`)
    }
}

person.details(3,"dxb");

//call
const p1={
    name:"ajmal"
}
person.details.call(p1,34,"clt")

//apply

const p2={
    name:"nijil"
}
person.details.apply(p2,[30,"tvm"])
//bind
const p3={
    name:"mithilaj"
}
let p=person.details.bind(p3,23,"clt")
p();


//currying


function sum(num1){
    return function(num2){
        return function(num3){
            return num1+num2+num3;
        }
    }
}
let result =sum(3)(4)(5) ;
console.log(result)

//shallow copy

let array5=[1,2,3,6,5]
let shallowcopy=[...array5]
console.log(shallowcopy)

//deepcopy

let deepcopy=JSON.parse(JSON.stringify(array5))
console.log(deepcopy)


//promise

const promise1=new Promise((resolve,reject)=>{
    let number=4;
    if(number%2==0){
        setTimeout(()=>{
            resolve("even")
        },3000)
    }else{

        setTimeout(()=>{
            reject("odd")
        },5000)
    }
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
    

//setinterval & set time out

let asd = setInterval(() => {
    console.log('Hello');
}, 1000)

setTimeout(() => {
    clearInterval(asd)
}, 10000);





