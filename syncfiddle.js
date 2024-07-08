const person = {
    name : 'geo',
    address: {         
    street : 'jh',
    pin :'566',        // structural to destructural
    qualifi :{
    docu : 'dfsd',
    }
    }
  }
 const{name,address:{street,pin,qualifi:{docu}}}=person;
 
 console.log(person.name)
 console.log(person.address.pin);
 console.log(person.address.qualifi.docu);
  
   const value = ['a','b','c']        // destructural
   const [first,second,third] = value;
   console.log(first)
  
   
   const nj = {              //object create
     name : 'nfdj',
     
   }

   const data=[23,45,87,88]
   const[a,b,c,d]=data;
   console.log(d);
   console.log(data[3]);