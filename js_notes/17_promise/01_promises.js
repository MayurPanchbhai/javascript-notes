// promises are used to handle async operation in javascript

const cart=["shoes","cap"]

createOrder(cart,function(orderId){ //by this way we have to problem (1.inversion of control.  2.Pyramid of dooms)
    proceedToPayment(orderId);
});

// so we go with promises : in promises it return the empty object and it will be filled with the neccesary details in his own require time and the new function/process does not have to wait for the previous function to be complete . And next function will be automatically run 


const promise = createOrder(cart);
//{data:undefined}  // take time to fill the data 

promise.then(function (orderId){//one the data is filled in the object from promise and the it run the then function without depending on the other function
    proceedToPayment(orderId);
})