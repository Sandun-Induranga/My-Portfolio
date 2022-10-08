function setCustomer(customerId, name, address, salary) {
    let customer = {
        cusId: null,
        cusName: null,
        cusAddress: null,
        cusSalary: null
    }

    customer.cusId = customerId;
    customer.cusName = name;
    customer.cusAddress = address;
    customer.cusSalary = salary;

    return customer;
}
