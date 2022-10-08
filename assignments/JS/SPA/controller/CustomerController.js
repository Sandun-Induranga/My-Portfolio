$("#btnSaveCustomer").on("click", function () {
    saveCustomer();
});

function saveCustomer() {
    let customerId = $("#txtCusId").val();
    let name = $("#txtCusName").val();
    let address = $("#txtAddress").val();
    let salary = $("#txtSalary").val();
}
