/*
* what is acync ?
* what is await ?
* how async and await work behind the scenes ?
* example of async and await
* Error handeling
* Interviwes
* Async await vs Promise.then/.catch

*/


/* //old method of promise and then

//how to create promise
const p=new Promise((resolve , reject)=>{
    resolve("Promise resolved");
})

//async function always return promise
// async function getData(){
//     return "namaste"
// }
async function getData(){
    return p
}

const dataPromise = getData();

dataPromise.then(res=>console.log(res));

*/


//new method of async and await 

const p=new Promise((resolve,reject)=>{
    resolve("promise resolved succesfully")
})



async function handlePromise(){
    const val = await p;//await is always written inside the async function & await is also form of promise named as val
    console.log(val);
}

handlePromise();