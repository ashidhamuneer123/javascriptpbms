//file system 
const fs = require('fs')
const currentDateTime = new Date();
fs.writeFile('date.js','console.log("current Date & Time")',(err)=>{
          let counter = 0;
          for(counter=0;counter<10;counter++){
            setTimeout(()=>{
                console.log(currentDateTime)
            },2000)
          }
})
fs.readFile('sum.js','utf8',function(err,data){
    console.log(data)
})
//fs.unlink('date.js',(err)=>{console.log("deleted ")})
//currying
function sum(a){
    return (b)=>{
        return(c)=>{
            return a*b*c
        }
    }
}
let result = sum(1)(2)(3);
console.log(result)
    