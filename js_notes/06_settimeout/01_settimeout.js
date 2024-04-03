function a(){
    let x=10;
    setInterval (function (){
        console.log(x);
        x
    },1000);
    console.log("it will not wait for the set time out function")
}

a();