let volume = function(length){
    return function(breadth){
        return function(height){
            return length*breadth*height;
        }
    }
}
console.log("volume of the cube =" +volume(3)(2)(1))


//using arrow function

function volume1(length){
    return (width) =>{
        return (height) =>{
            return length*width*height
        }
    }
}
let vol = volume1(4)(5)(6)
console.log("volume= " +vol)



function voll(length){
    return (width)=>{
        return(height)=>{
            return length*width*height
        }
    }
}


let vvvol=voll(2)(4)(5)
console.log(vvvol);