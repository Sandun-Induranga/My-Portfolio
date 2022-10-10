function setOrder(orderId, customerId, total, discount, amount) {
    return {
        orderId: orderId,
        customerId: customerId,
        total: total,
        discount: discount,
        amount:amount
    };
}
