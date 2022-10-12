$(function () {
    $("form").submit(function () {
        return false;
    });

    // Auto Focus Customer Id
    $('#staticBackdrop').on('shown.bs.modal', function () {
        $('#txtCusId').trigger('focus');
    });
});

// Button Save On Action
$("#btnSaveCustomer").on("click", function () {
    saveCustomer();
});

$("#btnAddNewCustomer").on("click", function () {
    $("#btnSaveCustomer").text("Save");
    $("#txtCusId,#txtCusName,#txtAddress,#txtSalary").val("");
    checkValidity(customerValidations)
});

function saveCustomer() {
    let customerId = $("#txtCusId").val();
    let name = $("#txtCusName").val();
    let address = $("#txtAddress").val();
    let salary = $("#txtSalary").val();

    if ($("#btnSaveCustomer").text() == "Save") {
        var customer = setCustomer(customerId, name, address, salary);
        customerDB.push(customer);
        clearAllCustomerTexts();
        saveAlert();
    } else {
        updateCustomer(customerId, name, address, salary);
        updateAlert();
    }
    loadAllCustomers();
    loadAllCustomerIdsInPurchaseOrder();
}

// Load all customers
function loadAllCustomers() {

    $("#tblCustomer > tbody").empty();

    for (let customer of customerDB) {
        $("#tblCustomer > tbody").append(
            `<tr><td>${customer.cusId}</td><td>${customer.cusName}</td><td>${customer.cusAddress}</td><td>${customer.cusSalary}</td><td><i class="bi bi-pencil-fill text-success me-4 customer-edits" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i><i class="bi bi-trash text-danger customer-deletes"></i></td></tr>`
        );
    }
    bindCustomerEditEvent();
    bindCustomerDeleteEvent();
}

// Edit button on action
function bindCustomerEditEvent() {

    $(".customer-edits").on("click", function () {
        var id = $(this).parent().parent().children(":eq(0)").text();

        var name = $(this).parent().parent().children(":eq(1)").text();

        var address = $(this).parent().parent().children(":eq(2)").text();

        var salary = $(this).parent().parent().children(":eq(3)").text();

        setCustomerTextFields(id, name, address, salary);
        $("#btnSaveCustomer").text("Update");
    });
}

function bindCustomerDeleteEvent() {
    // Delete button on action
    $(".customer-deletes").on("click", function () {
        var cusId = $(this).parent().parent().children(":eq(0)").text();
        deleteCustomer(cusId);
        alert("come")
    });
}

function setCustomerTextFields(id, name, address, salary) {
    $("#txtCusId").val(id);
    $("#txtCusName").val(name);
    $("#txtAddress").val(address);
    $("#txtSalary").val(salary);
}

$('#txtCustomerSearch').on("keyup", function () {
    $("#tblCustomer > tbody").empty();
    for (let customer of customerDB) {
        if (customer.cusId.indexOf($("#txtCustomerSearch").val()) !== -1) {
            let row = `<tr><td>${customer.cusId}</td><td>${customer.cusName}</td><td>${customer.cusAddress}</td><td>${customer.cusSalary}</td><td><i class="bi bi-pencil-fill text-success customer-edits" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i><i class="bi bi-trash text-danger customer-deletes"></i></td></tr>`;
            $("#tblCustomer > tbody").append(row);
        }
    }
});

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
        loadAllCustomers();
        return true;
    } else {
        return false;
    }
}

// customer regular expressions
const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidations = [];
customerValidations.push({reg: cusIDRegEx, field: $('#txtCusId'), error: 'Customer ID Pattern is Wrong : C00-001'});
customerValidations.push({
    reg: cusNameRegEx,
    field: $('#txtCusName'),
    error: 'Customer Name Pattern is Wrong : A-z 5-20'
});
customerValidations.push({
    reg: cusAddressRegEx,
    field: $('#txtAddress'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
customerValidations.push({
    reg: cusSalaryRegEx,
    field: $('#txtSalary'),
    error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});

$("#txtCusId,#txtCusName,#txtAddress,#txtSalary").on('keyup', function (event) {
    checkValidity(customerValidations);
});

$("#txtCusId,#txtCusName,#txtAddress,#txtSalary").on('blur', function (event) {
    checkValidity(customerValidations);
});


$("#txtCusId").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#txtCusId"))) {
        $("#txtCusName").focus();
    } else {
        focusText($("#txtCusId"));
    }
});


$("#txtCusName").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusNameRegEx, $("#txtCusName"))) {
        focusText($("#txtAddress"));
    }
});


$("#txtAddress").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusAddressRegEx, $("#txtAddress"))) {
        focusText($("#txtSalary"));
    }
});


$("#txtSalary").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusSalaryRegEx, $("#txtSalary"))) {
        let res = confirm("Do you want to add this customer.?");
        if (res) {
            saveCustomer();
        }
    }
});

function clearAllCustomerTexts() {
    $("#txtCusId").focus();
    $("#txtCusId,#txtCusName,#txtAddress,#txtSalary").val("");
    checkValidity(customerValidations);
}
