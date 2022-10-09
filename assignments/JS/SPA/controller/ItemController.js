$(function () {
    $("form").submit(function () {
        return false;
    });

    // Auto Focus Item Code
    $('#modelItem').on('shown.bs.modal', function() {
        $('#txtItemCode').trigger('focus');
    });
});

// Button Save On Action
$("#btnSaveItem").on("click", function () {
    saveItem();
});

$("#btnSaveItem").on("click", function () {
    $("#btnSaveItem").text("Save");
});

function saveItem() {
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let unitPrice = $("#txtItemPrice").val();
    let qty = $("#qtyOnHand").val();

    if ($("#btnSaveItem").text() == "Save") {
        var item = setItem(itemCode, itemName, unitPrice, qty);
        itemDB.push(customer);
    } else {
        updateCustomer(customerId, name, address, salary);
    }

    loadAllCustomers();
}
