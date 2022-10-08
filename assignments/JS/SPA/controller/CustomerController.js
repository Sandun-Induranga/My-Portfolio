$("#btnSaveCustomer").on("click", function () {
    saveCustomer();
});

function saveCustomer() {
    let customerId = $("#txtCusId").val();
    let name = $("#txtCusName").val();
    let address = $("#txtAddress").val();
    let salary = $("#txtSalary").val();

    var customer = setCustomer(customerId, name, address, salary);
    customerDB.push(customer);
    console.log(customer);

    loadAllCustomers();
    bindEditEvent();

}

function loadAllCustomers() {

    $("#tblCustomer > tbody").empty();

    for (let customer of customerDB) {
        $("#tblCustomer > tbody").append(
            `<tr><td>${customer.cusId}</td><td>${customer.cusName}</td><td>${customer.cusAddress}</td><td>${customer.cusSalary}</td><td><i class="bi bi-pencil-fill text-success me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i><i class="bi bi-trash text-danger"></i></td></tr>`
        );
    }
}

function bindEditEvent() {
    $(".bi-pencil-fill").on("click", function () {
            var id = $(this).parent().parent().children(":eq(0)").text();

            var name = $(this).parent().parent().children(":eq(1)").text();

            var address = $(this).parent().parent().children(":eq(2)").text();

            var salary = $(this).parent().parent().children(":eq(3)").text();

            setCustomerTextFields(id, name, address, salary);
        }
    )
}

function setCustomerTextFields(id, name, address, salary) {
    $("#txtCusId").val(id);
    $("#txtCusName").val(name);
    $("#txtAddress").val(address);
    $("#txtSalary").val(salary);
}
