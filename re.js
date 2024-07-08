const person = {
    name:"Ashi"

}
person.name
console.log(`name:${this.name}`)

const array=[1,2,3,4,5]
const array1=array.map((x)=>x+5)
console.log(array1)

const array2=array.reduce((a,b)=>a+b,0)



function sum(){
    return function(a){
        return function(b){
            return function(c){
                return a+b+c
            }
        }
    }
}

console.log(sum(1,2,3))