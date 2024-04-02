// Closures :- It is function along with its lexical scope is known as clouser

function x(){
    let a =10;//lexical envirnoment 
    function y(){//function
        console.log(a);
    }
    y();
}
x();


