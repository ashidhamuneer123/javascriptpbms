var a=10
var b=20
var sum=a+b;
console.log(sum)


function mul(...numbers){
    let result=1;
    for(let num of numbers){
        result = result*num;
    }
    return result
}

console.log(mul(1,2,3,4,5));