let read=require('readline-sync')
let my_string=read.question("Enter the string:")
let result=Number(my_string)
try{
    if(!isNaN(result)){
        throw new Error(`${my_string} is not a string`)
    }
    var reversedString=my_string.split("").reverse("").join("")
    console.log(`Reversed string is:${reversedString}`)
}
catch(error){
    console.log(`Error:${error.message}`)
}
finally{
    if(isNaN(result)){
        console.log(`Type of my_string is:${typeof my_string}`)
    }
    else{
        console.log(`Type of my_string is:${typeof result}`)
    }
}