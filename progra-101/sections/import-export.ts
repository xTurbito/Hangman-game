import {addTwoNumbers, susbractTwoNumbers, timeTwoNumbers,divideTwoNumbers} from '../helpers/math-helpers';


//let firstName = "Juan";
let num1 = 10;
let num2 = 20;


//greet(firstName);



let total1: number = addTwoNumbers(num1 , num2);
let total2: number = susbractTwoNumbers(num1 , num2);
let total3: number = timeTwoNumbers(num1 , num2);
let total4: number = divideTwoNumbers(num1 , num2);
console.log("Total: ", total1);
console.log("Total: ", total2);
console.log("Total: ", total3);
console.log("Total: ", total4);