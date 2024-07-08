const promise=require('promise')
new promise((resolve,reject)=>{
    let grade = "B"
    if(grade==="A")
    resolve("passed")
    else
    reject("failed")
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("finished")
})