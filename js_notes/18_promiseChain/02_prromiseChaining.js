// this one is the promise chaining part

const cart=["shoes","caps","alloys","NOS"];


//consumption of the APIs
CreateOrder(cart)
    .then(function(OrderId) {//this part is used when everything is resolved 
        console.log(OrderId);
        return orderId;
    })
    .then(function (OrderId) {
        return proceedToPayment(OrderId);
    })
    .then(function (paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function (err){//this will be called when we reject the promise or an error occured in the code
        console.log(err.message);
    })


//creating of APIs or Prodecer

function CreateOrder(cart){
    const pr= new Promise(function (resolve, reject ){
        //createOrder 
        // validateCart
        //orderId

        if(!validateCart(cart)){
            const err=new Error("Cart is not validate");
            reject(err);
        }

        // logic for create order
        const orderId="12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
            
        } 
    });

    return pr
}

function proceedToPayment(OrderId){
    ///proceed to payment code

    return new Promise(function (resolve,reject){
        resolve("payment successful")
    })
}

function validateCart(cart){
    return true;
}