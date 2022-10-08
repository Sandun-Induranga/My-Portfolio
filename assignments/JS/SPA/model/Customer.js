let customer = {
    cusId: null,
    cusName: null,
    cusAddress: null,
    cusSalary: null
}

function setCustomer(customerId, name, address, salary) {
    customer.cusId = customerId;
    customer.cusName = name;
    customer.cusAddress = address;
    customer.cusSalary = salary;

    return customer;
}
