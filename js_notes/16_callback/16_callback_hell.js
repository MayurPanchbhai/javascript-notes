// number of call back function inside another call back function is know as callback-hell or pyramid of dooms (in this code grow horizontally instead of vertically)


// Inversion of control :_ loosing of the control of code while using the callback function 

const cart=["shoes","cap","riding gears"];

api.createOrder(cart , function{
    api.proceedToPayment()
})



// **************************

// callback are important to handle async operation 

// issue with the callbacks 
// 1. callback hell
//2. Inversion of control
// **************************