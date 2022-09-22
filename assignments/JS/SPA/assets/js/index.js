$(document).ready(function () {
    $('#btnDashboard a').css('color', 'black')
    $('#btnCustomer a').css('color', '#6c757d')
    $('#btnItems a').css('color', '#6c757d')
    $('#btnOrders a').css('color', '#6c757d')
    $('#btnOrderDetails a').css('color', '#6c757d')

    $('#dashboard').attr('style', 'display : block !important')
    $('#customer').attr('style', 'display : none !important')
    $('#item').attr('style', 'display : none !important')
    $('#place-order').attr('style', 'display : none !important')
    $('#order-details').attr('style', 'display : none !important')
})

$('#btnDashboard').click(function () {
    $('#btnDashboard a').css('color', 'black')
    $('#btnCustomer a').css('color', '#6c757d')
    $('#btnItems a').css('color', '#6c757d')
    $('#btnOrders a').css('color', '#6c757d')
    $('#btnOrderDetails a').css('color', '#6c757d')

    $('#dashboard').attr('style', 'display : block !important')
    $('#customer').attr('style', 'display : none !important')
    $('#item').attr('style', 'display : none !important')
    $('#place-order').attr('style', 'display : none !important')
    $('#order-details').attr('style', 'display : none !important')
})

$('#btnCustomer').click(function () {
    $('#btnDashboard a').css('color', '#6c757d')
    $('#btnCustomer a').css('color', 'black')
    $('#btnItems a').css('color', '#6c757d')
    $('#btnOrders a').css('color', '#6c757d')
    $('#btnOrderDetails a').css('color', '#6c757d')

    $('#dashboard').attr('style', 'display : none !important')
    $('#customer').attr('style', 'display : flex !important')
    $('#item').attr('style', 'display : none !important')
    $('#place-order').attr('style', 'display : none !important')
    $('#order-details').attr('style', 'display : none !important')
})

$('#btnItems').click(function () {
    $('#btnDashboard a').css('color', '#6c757d')
    $('#btnCustomer a').css('color', '#6c757d')
    $('#btnItems a').css('color', 'black')
    $('#btnOrders a').css('color', '#6c757d')
    $('#btnOrderDetails a').css('color', '#6c757d')

    $('#dashboard').attr('style', 'display : none !important')
    $('#customer').attr('style', 'display : none !important')
    $('#item').attr('style', 'display : flex !important')
    $('#place-order').attr('style', 'display : none !important')
    $('#order-details').attr('style', 'display : none !important')
})

$('#btnOrders').click(function () {
    $('#btnDashboard a').css('color', '#6c757d')
    $('#btnCustomer a').css('color', '#6c757d')
    $('#btnItems a').css('color', '#6c757d')
    $('#btnOrders a').css('color', 'black')
    $('#btnOrderDetails a').css('color', '#6c757d')

    $('#dashboard').attr('style', 'display : none !important')
    $('#customer').attr('style', 'display : none !important')
    $('#item').attr('style', 'display : none !important')
    $('#place-order').attr('style', 'block : none !important')
    $('#order-details').attr('style', 'display : none !important')
})

$('#btnOrderDetails').click(function () {
    $('#btnDashboard a').css('color', '#6c757d')
    $('#btnCustomer a').css('color', '#6c757d')
    $('#btnItems a').css('color', '#6c757d')
    $('#btnOrders a').css('color', '#6c757d')
    $('#btnOrderDetails a').css('color', 'black')

    $('#dashboard').attr('style', 'display : none !important')
    $('#customer').attr('style', 'display : none !important')
    $('#item').attr('style', 'display : none !important')
    $('#place-order').attr('style', 'display : none !important')
    $('#order-details').attr('style', 'display : flex !important')
})
