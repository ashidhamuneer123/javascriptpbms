//1.object values are written as :name-value pairs(collection of named values)
const person = {name:"Ashi",age:35,place:"calicut"};//name,age & place are properties of object person.Ashi,25,calicut values
console.log(" 1 ")
console.log(person)
console.log(person.age)//accessing object properties
console.log(person["age"])
console.log(person.name + " is " + person.age + " years old. ")
delete person.age //delete a property from object
console.log(person)
//2.nested objects: objects inside an object
const person1={
    name1:"ashidha",
    age1:35,
    place:"Dubai",
    family:{                   //inside family property the values are given as object
        husband:"Muneer",
        child1:"Hina Muneer",
        child2:"Hikmah Mariam Muneer"
    }
}
console.log(" 2 ")
console.log(person1)
console.log(person1.family) //accessing family object
console.log(person1.family.husband)//accessing value from a nested object
//3.nested arrays and objects:
const myDetails = {
    Name : "Ashidha",
    Age : 35,
    place:"Dubai",
    Family : [
       {Husband : "Muneer Ahamed", Age :35},
       {Childrens : ["Hina Muneer","Hikmah Mariam Muneer"]}
    ]
    }
    console.log(" 3 " )
    console.log(myDetails.Family)

    //4.object methods: methods are functions stored as object properties

    const mySelf = {
        first_Name : "Ashidha",
        last_name :"Muneer",
        full_Name : function(){
            return this.first_Name + " " + this.last_name ;
        }
    }
    console.log(" 4 ")
    console.log(mySelf.full_Name())//accessing object methods

    //5.displaying objects in loop

    const aboutMe = {
        first_Name : "Ashidha",
        last_name : "Muneer",
        age : 35,
        place : "Dubai",
        today : new Date()
    }
    let text = ""
    for(let a in aboutMe){
    text += aboutMe[a] + " "
    }
    console.log(" 5 ")
    console.log(text)

    //6.object.values()   js obj can b converted into array using object.values()

    const myarray = Object.values(aboutMe)
    console.log(" 6 ")
    console.log(myarray)
   //7.JSON.stringify()  js object can be converted to string using this

   const myString = JSON.stringify(aboutMe)
   console.log(" 7 ")
   console.log(myString)

   //8.object accessors:get & set
   const person3 = {
    first_Name:"hina",
    last_name:"muneer",
    language:"",
    set lang(lang){
        this.language = lang
        },
    get full_Name() {
        
         return  this.first_Name + " " + this.last_name;
    }
    
   }
   person3.lang = "en"
   person3.full_Name;
   console.log(" 8 ")
   console.log(person3)
   console.log(person3.full_Name)

//9.constructor function
function person7(name,age) {
     this.name=name,
     this.age=age,
     place="dubai"
}
let p1=new person7("ajmal",22)
console.log(p1)
   
