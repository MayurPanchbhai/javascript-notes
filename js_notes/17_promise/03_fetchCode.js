const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
    proceedToPayment (orderId, function (paymentInfp) {
        showOrderSummary(paymentInfp, function () {
            updateWalletBalance();
        });
    });
});


createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return updateWalletBalance (paymentInfo);
    });