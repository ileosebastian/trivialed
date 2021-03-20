$(() => {
    // alert("es cargada");
    $('.circle-user').on('click', () => {
        // alert("algo");
        $('.nav-menu-user').toggleClass('div-none');

        $('.circle-user').css('z-index',9);
    }); 

    $('.nav-menu-user ul li').on('mouseenter', function() {
        $(this).css('background-color', '#000000');
        $(this).children().css('color', "white");
        console.log("Entra");
    });

    $('.nav-menu-user ul li').on('mouseleave', function() {
        $(this).css('background-color', '#DEDEDE');
        $(this).children().css('color', "black");
        console.log("Sale");
    });

    $('.nav-menu-user ul li').last().on('mouseenter', function() {
        $(this).css('background-color', '#C83C3C');
        $(this).children().css('color', "white");
    });

    $('.nav-menu-user ul li').last().on('mouseleave', function() {
        $(this).css('background-color', '#DEDEDE');
        $(this).children().css('color', "#C83C3C");
    });

});