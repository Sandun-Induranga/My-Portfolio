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

}

function loadAllCustomers() {

    $("#tblCustomer > tbody").empty();

    for (let customer of customerDB) {
        $("#tblCustomer > tbody").append(
            `<tr><td>${customer.cusId}</td><td>${customer.cusName}</td><td>${customer.cusAddress}</td><td>${customer.cusSalary}</td><td><i class="bi bi-pencil-fill text-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="edit"></i><i class="bi bi-trash text-danger"></i></td></tr>`
        );
    }
}
