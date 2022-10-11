$(function () {
    $("#btnAddToCart").attr("disabled", true);
    $("#btnPlaceOrder").attr("disabled", true);
});

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
    var cartItem = searchCartItem($(this).val());
    $("#item_name").val(item.itemName);
    $("#unitPrice").val(item.unitPrice);
    if (cartItem != null) {
        $("#qty_OnHand").val(parseInt(item.qty) - parseInt(cartItem.qty));
    } else {
        $("#qty_OnHand").val(item.qty);
    }
    $("#btnAddToCart").attr("disabled", false);
});

$("#btnAddToCart").on("click", function () {
    var code = $("#cmbItemCode").val();
    var name = $("#item_name").val();
    var qtyOnHand = $("#qty_OnHand").val();
    var unitPrice = $("#unitPrice").val();
    var qty = $("#txtQty").val();
    var cartItem = searchCartItem(code);

    if (cartItem == null) {
        var cart = {
            code: code,
            name: name,
            qtyOnHand: qtyOnHand,
            unitPrice: unitPrice,
            qty: qty,
            total: parseFloat(unitPrice) * parseInt(qty)
        }
        cartDB.push(cart);
        // updateItem(cart.code, cart.name, cart.unitPrice, cart.qtyOnHand-cart.qty);
    } else {
        cartItem.qtyOnHand = cartItem.qtyOnHand - parseInt($("#txtQty").val());
        cartItem.qty = parseInt(cartItem.qty) + parseInt($("#txtQty").val());
    }

    loadCart();
    $("#btnPlaceOrder").attr("disabled", false);
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
    setTotal();
}

function bindEditEvent() {
    $(".bi-pencil-fill").on("click", function () {
        var code = $(this).parent().parent().children(":eq(0)").text();
        var cartItem = searchCartItem(code);

        var item = searchItem(code);
        $("#cmbItemCode").val(item.itemCode);
        $("#item_name").val(item.itemName);
        $("#qty_OnHand").val(parseInt(item.qty) - parseInt(cartItem.qty));
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

function setTotal() {
    let total = 0;
    for (let cartItem of cartDB) {
        total += parseFloat(cartItem.total);
    }
    $("#total").text(total + " /=");
}

function generateNewOrderId() {
    if (ordersDB.length > 0) {
        var lastId = ordersDB[ordersDB.length - 1].orderId;
        var digit = lastId.substring(6);
        var number = parseInt(digit) + 1;
        return lastId.replace(digit, number);
    } else {
        return "ORD-001";
    }
}

$("#btnPlaceOrder").on("click", function () {
    $("#orderId").val(generateNewOrderId());
    $("#customerId").val($("#cmbCustomerId").val());
    $("#totalAmount").val($("#total").text());
});

$("#dis").on("keyup", function () {
    if ($(this).val() !== "") {
        $("#amount").val(parseFloat($("#totalAmount").val()) - parseFloat($(this).val()));
    } else {
        $("#amount").val($("#totalAmount").val());
    }
});

$("#btnPurchaseOrder").on("click", function () {
    let orderId = $("#orderId").val();
    let customerId = $("#customerId").val();
    let total = $("#totalAmount").val();
    let discount = $("#dis").val();
    let amount = $("#amount").val();
    var order = setOrder(orderId, customerId, total, discount, amount);
    ordersDB.push(order);
});
