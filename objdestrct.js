
//nested obj destructuring
const person ={
    id:123,
    name:{
        fname:'ashidha',
        lname:'muneer'
    },
    place:'dubai'
}

let {
    name:{
        fname,lname
    }
}=person
console.log(fname)



const person1={
    nam:"ashi",
    place:"dxb"
}

let {nam,place}=person1;
console.log(nam)