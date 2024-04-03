// function statement //function declaration
function a(){
    console.log("a called");
}
a();

// function expression :_ assigning to an variable
let b = function (){
    console.log("b is called"); //this function can't be hoisted because of variable
}
b();


//Anonymous function :- function without identity (it is used as a value)
// function (){ //syntax

// }


// Named Function Expression
let c = function d(){
    console.log("d and c is called") //same as function expression but have name to the inner function
}
c();


// parameter :- which is in present while declaring the fuction 
function e(para){
    console.log("hello "+ para)
}
// arguments which is passed in the function while calling it
let argu ="Myur"
e(argu)

