function car(name,mileage,max_speed)
{
    this.name=name
    this.mileage=mileage
    this.max_speed=max_speed
    this.display=function(){
    console.log("Name: "+this.name+ " Mileage: "+this.mileage+ " Max_Speed: "+this.max_speed)
}
}

let Audi=new car("Audi a7","5 km","240 km/hr")
let Nissan=new car("Nissan Tiida","13 km","200 km/hr")

Audi.display()
Nissan.display()