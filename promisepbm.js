const promise = require('promise')
/*let number = new promise((resolve,reject)=>{
    let num = 5
    if(num%2==0){
        resolve("even")
    }
    else
    reject("odd")
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("done!")
})*/






const pro1=new promise((res,rej)=>{
    let num=7
    if(num%2===0)
    {
        
        res("evenp1")
    }else{
        
        rej("oddp1")
    }
})
const pro2=new promise((res,rej)=>{
    let num=9
    if(num%2===0)
    {
        res("evenp2")
    }else{
        rej("oddp2")
    }
})
const promises=[pro1,pro2]
promise.all(promises)
.then((values)=>{
    console.log(values)
}).catch((err)=>{
    console.log(err)
})


