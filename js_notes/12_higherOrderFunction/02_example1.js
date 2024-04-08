const radius =[1,2,3,4];

const calculateArea = function (radius){
    let output=[];

    for (let i=0; i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));


const calculateCircumference = function (radius){
    let output=[];

    for (let i=0; i<radius.length;i++){
        output.push(2 * Math.PI * radius[i] );
    }
    return output;
}

console.log(calculateCircumference(radius));


//by this method we have to write the code again and again