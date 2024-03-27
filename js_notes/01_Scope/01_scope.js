// scope chain  
// 01
function a(){
    console.log(b);//here b can be access inside the scope beacuse of the b is present in the global space and not on the local space  and    that is also present in the lexical Environment
}

let b=10;
a();


// 02
function a1(){
    let b1=20; //here b cant be access outside of the blocked scoped
}

// console.log(b1);//this line will give an error (b1 is not defined)
a1();

// SCOPE :- Where you can access the variable