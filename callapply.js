const person={
    name:"ASHi",
    details:function(age,place){
        console.log(`name:${this.name} age:${age} place:${place}`)
    }
}
person.details(3,"dxb");

const pers1={
    name:"Muni"
}
const pers2={
    name:"Hina"
}
const pers3={
    name:"hik"
}
person.details.call(pers1,5,"pls")
person.details.apply(pers2,[4,"clt"])
let p=person.details.bind(pers3,6,"ytr")
p();