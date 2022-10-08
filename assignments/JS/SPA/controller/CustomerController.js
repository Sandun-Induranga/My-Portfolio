$("#btnSaveCustomer").on("click", function () {
    saveCustomer();
});

function saveCustomer() {
    let customerId = $("#txtCusId").val();
    let name = $("#txtCusName").val();
    let address = $("#txtAddress").val();
    let salary = $("#txtSalary").val();

    console.log(setCustomer(customerId, name, address, salary));

}

function loadAllCustomers() {

    $("#tblCustomer > tbody").empty();

    for (let customer of customers) {
        $("#tblCustomer > tbody").append(
            `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td><td><i class="bi bi-pencil-fill text-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="edit"></i><i class="bi bi-trash text-danger"></i></td></tr>`
        );
    }
}
