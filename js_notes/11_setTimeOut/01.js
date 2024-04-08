// callback function always run when the call stack is empty 

console.log("Start");

setTimeout(function cb (){
    console.log("Callback");
},5000)

console.log("End");


let n=1;
let startDate = new Date().getTime();
let endDate =startDate;

while(endDate < startDate + 7000){
    endDate = new Date().getTime();
    // console.log(n);
    // n++;
}
console.log("While End");