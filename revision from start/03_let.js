// Variable declared with the let has blocked scope(function scope) the value can be reassigned 
// must be declared before use else give the reference error
// can't be hoisted


// console.log(i);//this will give refernce error
let i=8;
console.log(i);

// let i=9;//redeclaration can't be possible
i=9//reassignment can be possible 
console.log(i);


// block scope
{
    let m="t";
    console.log(m);//can be accessed over here 
}
// console.log(m);//give refrnce error



// eg

let mn=56;
console.log(mn);
{
    let mn=8;
    console.log(mn);
}

console.log(mn);