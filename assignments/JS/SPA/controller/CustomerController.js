$(function () {
    $("form").submit(function () {
        return false;
    });
});

// Button Save On Action
$("#btnSaveCustomer").on("click", function () {
    saveCustomer();
});

$("#btnAddNewCustomer").on("click", function () {
    $("#btnSaveCustomer").text("Save");
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

$('#txtCustomerSearch').on("keyup", function (event) {
    console.log($('#txtCustomerSearch').val())
    $("#tblCustomer > tbody").empty();
    for (let customer of customerDB) {
        if (customer.cusId.indexOf($("#txtCustomerSearch").val()) !== -1) {
            let row = `<tr><td>${customer.cusId}</td><td>${customer.cusName}</td><td>${customer.cusAddress}</td><td>${customer.cusSalary}</td><td><i className="bi bi-pencil-fill text-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i><i className="bi bi-trash text-danger"></i></td></tr>`;
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
customerValidations.push({reg: cusIDRegEx, field: $('#txtCusId'),error:'Customer ID Pattern is Wrong : C00-001'});
customerValidations.push({reg: cusNameRegEx, field: $('#txtCusName'),error:'Customer Name Pattern is Wrong : A-z 5-20'});
customerValidations.push({reg: cusAddressRegEx, field: $('#txtAddress'),error:'Customer Address Pattern is Wrong : A-z 0-9 ,/'});
customerValidations.push({reg: cusSalaryRegEx, field: $('#txtSalary'),error:'Customer Salary Pattern is Wrong : 100 or 100.00'});

$("#txtCusId,#txtCusName,#txtAddress,#txtSalary").on('keyup', function (event) {
    checkValidity();
});

$("#txtCusId,#txtCusName,#txtAddress,#txtSalary").on('blur', function (event) {
    checkValidity();
});


$("#txtCusId").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#txtCusID"))) {
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
            clearAllTexts();
        }
    }
});

function checkValidity() {
    let errorCount=0;
    for (let validation of customerValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setTextError(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textSuccess(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function focusText(txtField) {
    txtField.focus();
}

function setButtonState(value){
    if (value>0){
        $("#btnSaveCustomer").attr('disabled',true);
    }else{
        $("#btnSaveCustomer").attr('disabled',false);
    }
}

function clearAllTexts() {
    $("#txtCusId").focus();
    $("#txtCusId,#txtCusName,#txtAddress,#txtCusSalary").val("");
    checkValidity();
}
