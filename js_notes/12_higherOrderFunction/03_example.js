// this is called functional programming

const radius=[1,2,3,4];

//all the required formula are declared below

function area(radius){
    return Math.PI * radius *radius//for area
}


function circumference(radius){//for circumference
    return 2 * Math.PI * radius
}

function diameter(radius){//for diameter
    return 2 * radius
}

// common function for all the calculation 
const calculate = function (radius , logic){//higher order function
    const output =[];

    for (let i=0; i<radius.length ;i++){
        output.push(logic(radius[i]))
    }

    return output
}



// map function 
console.log(radius.map(area))

// printing the output 
console.log(calculate(radius,area));

// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));