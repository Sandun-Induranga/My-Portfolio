$(function () {
    $("form").submit(function () {
        return false;
    });

    // Auto Focus Item Code
    $('#modelItem').on('shown.bs.modal', function () {
        $('#txtItemCode').trigger('focus');
    });
});

// Button Save On Action
$("#btnSaveItem").on("click", function () {
    saveItem();
});

$("#btnAddNewItem").on("click", function () {
    $("#btnSaveItem").text("Save");
});

function saveItem() {
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let unitPrice = $("#txtItemPrice").val();
    let qty = $("#qtyOnHand").val();

    if ($("#btnSaveItem").text() == "Save") {
        var item = setItem(itemCode, itemName, unitPrice, qty);
        itemDB.push(item);
    } else {
        updateItem(itemCode, itemName, unitPrice, qty);
    }

    loadAllItems();
    loadAllItemCodesInPurchaseOrder();
}

// Load all Items
function loadAllItems() {

    $("#tblItem > tbody").empty();

    for (let item of itemDB) {
        $("#tblItem > tbody").append(
            `<tr><td>${item.itemCode}</td><td>${item.itemName}</td><td>${item.unitPrice}</td><td>${item.qty}</td><td><i class="bi bi-pencil-fill text-success me-4" data-bs-toggle="modal" data-bs-target="#modelItem"></i><i class="bi bi-trash text-danger"></i></td></tr>`
        );
        bindEditEvent();
        bindDeleteEvent();
    }
}

// Edit button on action
function bindEditEvent() {

    $(".bi-pencil-fill").on("click", function () {
        var code = $(this).parent().parent().children(":eq(0)").text();

        var name = $(this).parent().parent().children(":eq(1)").text();

        var unitPrice = $(this).parent().parent().children(":eq(2)").text();

        var qty = $(this).parent().parent().children(":eq(3)").text();

        setItemTextFields(code, name, unitPrice, qty);
        $("#btnSaveItem").text("Update");
    });
}

function setItemTextFields(code, name, unitPrice, qty) {
    $("#txtItemCode").val(code);
    $("#txtItemName").val(name);
    $("#txtItemPrice").val(unitPrice);
    $("#qtyOnHand").val(qty);
}

function bindDeleteEvent() {
    // Delete button on action
    $(".bi-trash").on("click", function () {
        var itemCode = $(this).parent().parent().children(":eq(0)").text();
        deleteItem(itemCode);
        loadAllItems();
    });
}

function deleteItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        let indexNumber = itemDB.indexOf(item);
        itemDB.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}

function searchItem(itemCode) {
    for (let item of itemDB) {
        if (item.itemCode == itemCode) {
            return item;
        }
    }
    return null;
}

function updateItem(itemCode, itemName, unitPrice, qty) {
    let item = searchItem(itemCode);
    if (item != null) {
        item.itemCode = itemCode;
        item.itemName = itemName;
        item.unitPrice = unitPrice;
        item.qty = qty;
        return true;
    } else {
        return false;
    }
}

$('#txtItemSearch').on("keyup", function () {
    $("#tblItem > tbody").empty();
    for (let item of itemDB) {
        if (item.itemCode.indexOf($("#txtItemSearch").val()) !== -1) {
            let row = `<tr><td>${item.itemCode}</td><td>${item.itemName}</td><td>${item.unitPrice}</td><td>${item.qty}</td><td><i class="bi bi-pencil-fill text-success me-4" data-bs-toggle="modal" data-bs-target="#modelItem"></i><i class="bi bi-trash text-danger"></i></td></tr>`;
            $("#tblItem > tbody").append(row);
        }
    }
});

// Item Regular Expressions
const itemCodeRegEx = /^(ITM-)[0-9]{1,3}$/;
const itemNameRegEx = /^[A-z ]{5,20}$/;
const unitPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
const qtyOnHandRegEx = /^[0-9]{1,}$/

let itemValidations = [];
itemValidations.push({reg: itemCodeRegEx, field: $('#txtItemCode'), error: 'Item Code Pattern is Wrong : ITM-001'});
itemValidations.push({
    reg: itemNameRegEx,
    field: $('#txtItemName'),
    error: 'Item Name Pattern is Wrong : A-z 5-20'
});
itemValidations.push({
    reg: cusAddressRegEx,
    field: $('#txtItemPrice'),
    error: 'Item Price Pattern is Wrong : 100 or 100.00'
});
itemValidations.push({
    reg: qtyOnHandRegEx,
    field: $('#qtyOnHand'),
    error: 'Qty Pattern is Wrong : 100'
});

$("#txtItemCode,#txtItemName,#txtItemPrice,#qtyOnHand").on('keyup', function (event) {
    checkValidity(itemValidations);
});

$("#txtItemCode,#txtItemName,#txtItemPrice,#qtyOnHand").on('blur', function (event) {
    checkValidity(itemValidations);
});

$("#txtItemCode").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#txtItemCode"))) {
        $("#txtItemName").focus();
    } else {
        focusText($("#txtItemCode"));
    }
});

$("#txtItemName").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#txtItemName"))) {
        $("#txtItemPrice").focus();
    } else {
        focusText($("#txtItemName"));
    }
});

$("#txtItemPrice").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#txtItemPrice"))) {
        $("#qtyOnHand").focus();
    } else {
        focusText($("#txtItemPrice"));
    }
});
