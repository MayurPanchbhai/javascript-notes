// First Class Function or First class function
//  the ability of function used as an argument into an another function is called as first class function

//                                         or 
//functions can be assigned to any other variable or passed as an argument or can be returned by another function

function b(){
    function c(){
        console.log("hello");
    }
    c();
}
b();

// assigning function to an variable
let n = () => {
    console.log("hit the goal");
}
n();

// returing the function
function c(){
    return function () {
        console.log(hello);
    }
}
c();

// Passing a function as an argument

function greet(){
    return "hello "
}

function welcome (gr , nm){
    console.log(gr()+nm);
}

welcome(greet,"mayur");