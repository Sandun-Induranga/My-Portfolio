// Button Save On Action
$("#btnSaveCustomer").on("click", function () {
    saveCustomer();
});

function saveCustomer() {
    let customerId = $("#txtCusId").val();
    let name = $("#txtCusName").val();
    let address = $("#txtAddress").val();
    let salary = $("#txtSalary").val();

    if ($("#btnSaveCustomer").text() == "Save") {
        var customer = setCustomer(customerId, name, address, salary);
        customerDB.push(customer);
    } else {
        updateCustomer(customerId, name, address, salary);
    }

    loadAllCustomers();
}

// Load all customers
function loadAllCustomers() {

    $("#tblCustomer > tbody").empty();

    for (let customer of customerDB) {
        $("#tblCustomer > tbody").append(
            `<tr><td>${customer.cusId}</td><td>${customer.cusName}</td><td>${customer.cusAddress}</td><td>${customer.cusSalary}</td><td><i class="bi bi-pencil-fill text-success me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i><i class="bi bi-trash text-danger"></i></td></tr>`
        );
        bindEditEvent();
        bindDeleteEvent();
    }
}

// Edit button on action
function bindEditEvent() {

    $(".bi-pencil-fill").on("click", function () {
        var id = $(this).parent().parent().children(":eq(0)").text();

        var name = $(this).parent().parent().children(":eq(1)").text();

        var address = $(this).parent().parent().children(":eq(2)").text();

        var salary = $(this).parent().parent().children(":eq(3)").text();

        setCustomerTextFields(id, name, address, salary);
        loadAllCustomers();
        $("#btnSaveCustomer").text("Update");
    });
}

function bindDeleteEvent() {
    // Delete button on action
    $(".bi-trash").on("click", function () {
        var cusId = $(this).parent().parent().children(":eq(0)").text();
        deleteCustomer(cusId);
        loadAllCustomers();
    });
}

function setCustomerTextFields(id, name, address, salary) {
    $("#txtCusId").val(id);
    $("#txtCusName").val(name);
    $("#txtAddress").val(address);
    $("#txtSalary").val(salary);
}

function searchCustomer(customerID) {
    for (let customer of customerDB) {
        if (customer.cusId == customerID) {
            return customer;
        }
    }
    return null;
}

function updateCustomer(customerId, name, address, salary) {
    let customer = searchCustomer(customerId);
    if (customer != null) {
        customer.cusId = customerId;
        customer.cusName = name;
        customer.cusAddress = address;
        customer.cusSalary = salary;
        console.log(customer);
        return true;
    } else {
        return false;
    }
}

function deleteCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        let indexNumber = customerDB.indexOf(customer);
        customerDB.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}
