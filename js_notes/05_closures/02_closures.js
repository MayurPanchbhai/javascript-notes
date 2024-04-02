function x(){
    let a=30;

    function y(){
        console.log(a);
    }
    return y;
}


let z=x(); //assiggning to an variable
console.log(z);//here it will print the function y 
z();//even if the execution context of the x() is not present still the function y() has its lexical environment and that's why this code run without giving an error