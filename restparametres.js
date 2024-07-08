function sum(...args){
    let total=args.reduce((total,num)=>total+num,0)
    
    return total
}

console.log(sum(1,2,3,4,5,6,7,8,9))
console.log(sum(3,4,5))