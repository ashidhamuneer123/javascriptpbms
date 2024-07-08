let read=require('readline-sync');
let my_height=read.question("Enter Your Height: ")
try{
    if(my_height > 0 && my_height <= 9)
    console.log("Height = "+my_height)
    else if(my_height > 9)
    throw "HugeHeightError!!!"
    else if(my_height<1)
    throw "tinyHeightError!!!"
    else 
    throw "notANumberError!!!"
    
}
catch(err){

   console.log(err)
}