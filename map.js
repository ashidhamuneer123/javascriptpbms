
const vegetables = new Map([
   ["potatoes",200],
   ["onion",300],
   ["chilly",100] 
])
console.log(vegetables)

//set()
vegetables.set("garlic",150)
console.log(vegetables)

//get()
console.log(vegetables.get("chilly"))

//has()
console.log(vegetables.has("onion"))
console.log(vegetables.has("mushroom"))

//delete()
vegetables.delete("garlic")
console.log(vegetables)
