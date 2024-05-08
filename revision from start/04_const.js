// variable decalred eith const has block scope and and be redeclared and reassigned 
// must be declared before use (can't be hoisted)

// console.log(num);//reference error


//1 
const num=6;
console.log(num);

{
    const num=8;
    console.log(num);
}

console.log(num);

//2

const num2=45;
console.log(num2);

{
    // num2=8;//error can't be reassign
    console.log(num2);
}

console.log(num2);

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp