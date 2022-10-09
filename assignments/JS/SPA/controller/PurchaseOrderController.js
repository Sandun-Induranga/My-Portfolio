
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
        qty: qty,
        total: parseFloat(unitPrice)*parseInt(qty)
    }
    cartDB.push(cart);
    console.log(cart);
    loadCart();

});

// Load Cart
function loadCart() {

    $("#tblCart > tbody").empty();

    for (let cart of cartDB) {
        $("#tblCart > tbody").append(
            `<tr><td>${cart.code}</td><td>${cart.name}</td><td>${cart.unitPrice}</td><td>${cart.qty}</td><td>${cart.total}</td><td><i class="bi bi-pencil-fill text-success me-4"></i><i class="bi bi-trash text-danger"></i></td></tr>`
        );
        bindEditEvent();
        bindDeleteEvent();
    }
}

function bindEditEvent() {
    $(".bi-pencil-fill").on("click", function () {
        var code = $(this).parent().parent().children(":eq(0)").text();

        var item = searchItem(code);
        $("#cmbItemCode").val(item.itemCode);
        $("#item_name").val(item.itemName);
        $("#qty_OnHand").val(item.qty);
        $("#unitPrice").val(item.unitPrice);
        $("#txtQty").val("");
    });
}

function bindDeleteEvent() {
    $(".bi-trash").on("click", function () {
        var code = $(this).parent().parent().children(":eq(0)").text();
        deleteCartObject(code);
        loadCart();
    });
}

function deleteCartObject(code) {
    let cartItem = searchCartItem(code);
    if (cartItem != null) {
        let indexNumber = cartDB.indexOf(cartItem);
        cartDB.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}

function searchCartItem(code) {
    for (let cartItem of cartDB) {
        if (cartItem.code == code) {
            return cartItem;
        }
    }
    return null;
}
