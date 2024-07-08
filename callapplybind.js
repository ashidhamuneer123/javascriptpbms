const person = {
    name : "Ashidha",
    details : function(age,place){
    console.log(`Name:${this.name}  Age:${age}  Place:${place}`)}
}
person.details(30,"Dubai")

//call()

const person1 = {
    name:"Hina",
    }
    person.details.call(person1,25,"calicut")

    //apply()
    const person2 = {
        name:"Hikmah"
    }
    person.details.apply(person2,[5,"thalassery"])

    //bind()

    const person3 = {
        name : "Muneer"
    }
    let p3 = person.details.bind(person3,35,"UAE")
    p3()