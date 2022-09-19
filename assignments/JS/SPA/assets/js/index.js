$('#btnCustomer').click(function () {
    $('#btnDashboard a').css('color','#6c757d')
    $('#btnCustomer a').css('color','black')
    $('#btnItems a').css('color','#6c757d')
    $('#btnOrders a').css('color','#6c757d')
    $('#btnOrderDetails a').css('color','#6c757d')

    $('#dashboard').css('display','none !important')
    $('#customer').css('display','block !important')
    $('#item').css('display','none !important')
    $('#place-order').css('display','none !important')
    $('#order-details').css('display','none !important')
})
