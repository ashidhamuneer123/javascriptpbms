const str=["apple","boat","cat","pomegranate"]

const larStr=str.reduce((large,current)=>{
    return current.length>large.length ? current : large
})
console.log(larStr);



const largest=str.reduce((largest,current)=>{
    if(current.length>largest.length){
        return current
    }else{
        return largest
    }
})
console.log(largest);