const promise = require('promise')
function sum(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1==0){
            reject("First number is a zero")
        }
        resolve(num1+num2)
    })
}
sum(0,20).then((result)=>{
    console.log(result)
}).catch((err)=>{
     console.log(err)
})



function mul(n1,n2){
    return new Promise((res,rej)=>{
        if(n1===0 || n2===0){
            rej("zero occured")
        }else{
            res(n1*n2)
        }
    })
}
mul(4,0).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

