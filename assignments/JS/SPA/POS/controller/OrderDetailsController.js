$(function () {
    $("form").submit(function () {
        return false;
    });

    loadAllOrders();
});

function loadAllOrders() {
    $("#tblOrders > tbody").empty();

    for (let order of ordersDB) {
        $("#tblOrders > tbody").append(
            `<tr><td>${order.orderId}</td><td>${order.customerId}</td><td>${order.customerName}</td><td>${order.date}</td><td>${order.total}</td><td>${order.discount}</td><td>${order.amount}</td><td><i class="bi bi-trash text-danger order-deletes"></i></td></tr>`
        );
    }
    bindOrdersDeleteEvent();
}

$('#txtOrderSearch').on("keyup", function () {
    $("#tblOrders > tbody").empty();
    for (let order of ordersDB) {
        if ($("#orderSearch").val() == "Order Id") {
            if (order.orderId.indexOf($("#txtOrderSearch").val()) !== -1) {
                let row = `<tr><td>${order.orderId}</td><td>${order.customerId}</td><td>${order.customerName}</td><td>${order.date}</td><td>${order.total}</td><td>${order.discount}</td><td>${order.amount}</td><td><i class="bi bi-trash text-danger order-deletes"></i></td></tr>`;
                $("#tblOrders > tbody").append(row);
            }
        } else {
            if (order.customerId.indexOf($("#txtOrderSearch").val()) !== -1) {
                let row = `<tr><td>${order.orderId}</td><td>${order.customerId}</td><td>${order.customerName}</td><td>${order.date}</td><td>${order.total}</td><td>${order.discount}</td><td>${order.amount}</td><td><i class="bi bi-trash text-danger order-deletes"></i></td></tr>`;
                $("#tblOrders > tbody").append(row);
            }
        }
    }
    bindOrdersDeleteEvent();
});

// Delete button on action
function bindOrdersDeleteEvent() {
    $(".order-deletes").on("click", function () {
        var orderId = $(this).parent().parent().children(":eq(0)").text();
        deleteOrder(orderId);
    });
}

function deleteOrder(OrderId) {
    let order = searchOrder(OrderId);
    if (order != null) {
        let indexNumber = ordersDB.indexOf(order);
        ordersDB.splice(indexNumber, 1);
        loadAllOrders();
        return true;
    } else {
        return false;
    }
}

function searchOrder(orderId) {
    for (let order of ordersDB) {
        if (order.orderId == orderId) {
            return order;
        }
    }
    return null;
}
