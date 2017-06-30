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
    //Scroll
    //*****************************************************

    $('.menu a').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) + 600), 'swing');
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
    //Табы
    //*****************************************************
    $('.route__buttons button').first().addClass('active');
    $('.route__item').not(':first').hide();
    $('.route__buttons').on('click', 'button:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').closest('.route__tabs').find('.route__item').slideUp(300).eq($(this).index()).slideDown(300);
    });

    //*****************************************************
    //Animation
    //*****************************************************
    $('.program__item, .activities__item, .keys__box, .show__box, .forum__img-inner, .price__count, .price__item, .route__tabs, .footer__events-item').animated('animate');

    //*****************************************************
    // Google Map
    //*****************************************************
    var markerPosition = new google.maps.LatLng(55.996432, 36.265463);

    function initialize() {
        var loc, map;

        loc = new google.maps.LatLng(55.996432, 36.265463);

        map = new google.maps.Map(document.getElementById("map"), {
             zoom: 12,
             center: loc,
             mapTypeId: google.maps.MapTypeId.ROADMAP,
             scrollwheel: false
        });

        var marker = new google.maps.Marker({
            map: map,
            position: markerPosition,
            visible: true,
            icon: 'img/icon-map.png'
        });

        map.set('styles', [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":"17"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e8b73b"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"invert_lightness":true},{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#e8b73b"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#e8b73b"},{"lightness":"39"},{"gamma":"0.43"},{"saturation":"-47"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#555555"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]);
    }
    initialize();
    google.maps.event.addDomListener(window, 'load', initialize);


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
