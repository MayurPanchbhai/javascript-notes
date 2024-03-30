// variable created using the var are part of global/window/this object and variable with the let and const are not stored or part of window object

console.log(b);//undefined 
var b=20;//var is always hoisted in the global memory space , while the let and const are hoisted or stored in the script memory and without defining it can't be access (and here comes the concept on temporal dead zone)

// TDZ :- A specific period in the execution of JavaScript code where variables declared with let and Const exist but cannot be accessed or assigned any value.

// eg
console.log(c);//this will give the error (ReferenceError: Cannot access 'c' before initialization) as we are accessing the element before assigning the value
const c=60;

let a=10;//while this will not give an error
console.log(a);

// let a =100; // this is syntax error cant redelare the variable declare with let and const

