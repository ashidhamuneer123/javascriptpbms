const promise=require('promise')
let student=new promise((resolve,reject)=>{
    let grade="A"
    if(grade==="A"){
        setInterval(() => {
            resolve("passed")
        },3000)
    }
    else{
        setTimeout(()=>{
            reject("failed")
        },2000)
    }
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("done")
})

let mark=new promise((res,rej)=>{
    let mark=50;
    if(mark>=50)
    {
        setInterval(() => {
            res("passed")
        }, 3000);
    }
    else{
        setTimeout(()=>{
            rej("failed")
        },2000)
    }
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Done")
})