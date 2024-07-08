const fs=require('fs')

const string="hello ashiiii \n"
const repeatCount=10;
const file="repeat.js";

for(let i=0;i<repeatCount;i++){
    fs.appendFileSync(file,string)
}
console.log(`content written ${repeatCount} Times`)


fs.readFile("repeat.js","utf8",function(data,err){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})