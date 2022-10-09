
function loadAllCustomerIdsInPurchaseOrder() {
    $("#cmbCustomerId").empty();
    $("#cmbCustomerId").append(`<option disabled selected hidden>Customer ID</option>`);

    for (let customer of customerDB) {
        $("#cmbCustomerId").append(`<option>${customer.cusId}</option>`);
    }
}

function loadAllItemCodesInPurchaseOrder() {
    $("#cmbItemCode").empty();
    $("#cmbItemCode").append(`<option disabled selected hidden>Item Code</option>`);

    for (let item of itemDB) {
        $("#cmbItemCode").append(`<option>${item.itemCode}</option>`);
    }
}

$("#cmbCustomerId").change(function () {
    var customer = searchCustomer($(this).val());
    $("#cusName").val(customer.cusName);
    $("#cusAddress").val(customer.cusAddress);
    $("#cusSalary").val(customer.cusSalary);
});

$("#cmbItemCode").change(function () {
    var item = searchItem($(this).val());
    $("#item_name").val(item.itemName);
    $("#qty_OnHand").val(item.qty);
    $("#unitPrice").val(item.unitPrice);
});

$("#btnAddToCart").on("click", function () {
    $("#tblCart").empty();
    var code = $("#cmbItemCode").val();
    var name = $("#item_name").val();
    var qtyOnHand = $("#qty_OnHand").val();
    var unitPrice = $("#unitPrice").val();
    var qty = $("#txtQty").val();

    var cart = {
        code: code,
        name: name,
        qtyOnHand: qtyOnHand,
        unitPrice: unitPrice,
        qty: qty
    }
    cartDB.push(cart);
    console.log(cart);

})
