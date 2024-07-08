let read = require('readline-sync');
console.log("Enter the Marks Scored!!!")
let wt = read.questionFloat("Written Test:")
let lab = read.questionFloat("Lab Exam:")
let assignment = read.questionFloat("Assignments:")
grade=(wt * 70)/100 + (lab * 20)/100 + (assignment * 10)/100
console.log("Grade :"+grade)