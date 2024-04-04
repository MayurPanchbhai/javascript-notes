// What is callback function in javascript

// callback function :- A function which is passed into an another function

function x(y){

}

x(function y(){//here y is an callbak function

})

setTimeout(function (){//this is also callback function
    console.log("timer")
},5000);