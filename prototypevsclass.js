const { prototype } = require("promise")

function Animal(name,phrase){
    this.name=name
    this.phrase=phrase
    this.species="Animal"
}
Animal.prototype.run = () => console.log("runnnnnnnnnn")


const Animal1 = new Animal("Lion","King Of Jungle!!!")
const Animal2 = new Animal("Ostrich","Largest Bird!!!")

console.log(Animal1.name,Animal1.phrase)
console.log(Animal2.name,Animal2.phrase)
Animal1.run()




function Employee(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
Employee.prototype.fullname = function(){
    return this.fname+" "+this.lname;
}

var Emp01 = new Employee("Ashidha","Muneer")
var Emp02 = new Employee("Hina","Muneer")


console.log(Emp01.fullname());
console.log(Emp02.fullname())


