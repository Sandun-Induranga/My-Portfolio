$(function () {
    $("form").submit(function () {
        return false;
    });

    // Auto Focus Customer Id
    $('#modelItem').on('shown.bs.modal', function() {
        $('#txtItemCode').trigger('focus');
    });
});
