// reduce():- take all the array elements and reduce them to single element 

const arr=[-89,2,1,2,3,6];

let re=arr.reduce(function (acc,current){
    return acc+current; 
},0)//here we pass the value for accumulator
console.log(re);