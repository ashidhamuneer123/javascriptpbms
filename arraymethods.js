    //shift method (removes first element in an array)
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();
    console.log(fruits)
    //pop method(removes last element in an array)
    const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
    fruits1.pop();
    console.log(fruits1)
    // reversethe elements in an array
    let arr = [1, 2, 3, 4, 5];

    arr.reverse();
    console.log(arr)
    //square of all elements in an array using map method
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(a => a * a);
    console.log(squares)
    //cube of all elements in an array
    const numbers1 = [1, 2, 3, 4, 5];
    const cube1 = numbers1.map(a => a ** 3);
    console.log(cube1)
    //sorting elements in an array 
    const arr1=[0,1,1,0,0,0,1]
    const array1=arr1.filter(x=>x===1)
    const array2=arr1.filter(x=>x===0)
    console.log([array1,array2])

    //sum of elements in an array
    const arr3=[1,2,3,4,5]
    const sum=arr3.reduce((a,b)=>a+b,0)
    console.log(sum)

    const arr5=[1,2,3,4,5,6]
    const myarr5=arr5.flatMap(x=> x+2 )
    console.log(myarr5)

    //array as type of object
  
    const person = {
        name:"ashi",
        age:33,
        place:"calicut"
    }

    for(x in person){
        console.log(person[x])
    }
    console.log(person)
    console.log(person.name)
   let srt= arr.sort((a,b)=>b-a)
   console.log(srt);

