function setOrder(orderId, customerId, customerName, date, total, discount, amount) {
    return {
        orderId: orderId,
        customerId: customerId,
        customerName: customerName,
        date: date,
        total: total,
        discount: discount,
        amount: amount
    };
}
