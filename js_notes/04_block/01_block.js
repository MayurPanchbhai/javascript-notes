// Block :- It is used to combine multiple javascript statement into an group . where expect multiple statement as a single statement
if(true){
    // compound statement 
    let a=67;
    console.log(a);
}


// shadowing means redeclaring the variable like
// also when the local variable within the function or block scope has a same name as variable in other scope this is known as shadowing
var v=9;
console.log(v);
{
    var v=10;//here it is been shadowed or redeclaring the variable
    console.log(v);
}
console.log(v);

//let and const has blocked scope when we see that in the dibuger window it will shows that it is defined in the block scope and not in the global scope 

let b=20;
console.log(b);
{
    b=60;//this is called re-initialization
}

console.log(b);