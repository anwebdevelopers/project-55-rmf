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
    //Адаптивный слайдер
    //*****************************************************
    $('.slider').addClass('owl-carousel').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 3000,
        autoplay: true,
        smartSpeed: 1200,
    });


    //*****************************************************
    //Chrome Smooth Scroll
    //*****************************************************
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {};

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });

});
