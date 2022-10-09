$(function () {
    $("form").submit(function () {
        return false;
    });

    // Auto Focus Customer Id
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

}
