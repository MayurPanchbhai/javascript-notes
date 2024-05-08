// Varialbe declare with the var keyword has the global scope and use of this to avoided in the ES6 javascript



var i =9;
console.log(i);


var i=10;//redeclaring the same variable with var is valid
console.log(i);

// let i=19;//this is not valid
// console.log(i);

// const i=19;//this is not valid
// console.log(i);


// notes

// var can't be redeclared with the let and const
// var can be used before declaration(this will print the undefined but not give reference error)
console.log(o);
var o=10;