let read = require('readline-sync');
class Area{
    circle(){
         let radius=read.questionFloat("Enter the radius:")
         let area=3.14*radius*radius
         console.log("Area of Circle = "+area)
    }
    square()
    {
        let side = read.questionFloat("Enter the length :")
      let  area=side*side
        console.log("Area of Square = "+area) 
    }
    rectangle()
    {
          let length=read.questionFloat("Enter the length:")
          let width = read.questionFloat("Enter the width:")
          let area=length*width
          console.log("Area of Triangle = "+area)
    }
    triangle()
    {
        let base=read.questionFloat("Enter the Base length:")
        let height=read.questionFloat("Enter the height:")
        let area=(base*height)/2
        console.log("Area of Triangle = "+area)
    }
}

class MyClass extends Area{
    main()
    {
        let choice = read.questionInt("Enter your choice:\n1.Circle\n2.Square\n3.Rectangle\n4.Triangle")
        switch(choice)
        {
            case 1:
                this.circle()
                break;
            case 2:
                this.square()
                break;
            case 3:
                this.rectangle()
                break;
            case 4:
                this.triangle()
                break;
            default:
                console.log("INVALID INPUT!!")
        }

    }

}
let myclass = new MyClass()
myclass.main()
