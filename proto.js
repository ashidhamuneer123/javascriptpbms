function Employee(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
Employee.prototype.company="brototype"


var Emp01 = new Employee("Ashidha","Muneer")
var Emp02 = new Employee("Hina","Muneer")


console.log(Emp01.fname+" "+Emp01.lname+" "+Emp01.company)