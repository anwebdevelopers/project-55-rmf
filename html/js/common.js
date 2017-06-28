$(function() {

    'use strict';

    //*****************************************************
    //Меню
    //*****************************************************

    $('.button-menu').click(function() {
        $(this).toggleClass('active');
        $('.menu').slideToggle(300);
    });


    //*****************************************************
    //Chrome Smooth Scroll
    //*****************************************************
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

});
