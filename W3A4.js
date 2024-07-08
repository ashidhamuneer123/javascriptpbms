let read = require('readline-sync');
let mark = read.questionFloat("Enter the Mark:")
if(mark >= 50 && mark <= 100)
console.log("PASSED")
else if(mark < 0 || mark > 100)
console.log("Invalid Entry!!!")
else
console.log("FAILED")