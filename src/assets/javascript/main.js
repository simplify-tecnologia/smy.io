/* ======= Preloader ======= */
$(window).on('load',function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

/* ======= NavBar ======= */
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 80) {
        $('.navbar').addClass('navbar-active');
    } else {
        $('.navbar').removeClass('navbar-active');
    }
});


$(function() {

    /* ======= Bootstrap Scroll Spy ======= */
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 95,
    });

    /* ======= Smoothscroll ======= */
    $('.navbar-default .navbar-nav li a, .scroll-icon a').smoothScroll({
        speed: 1500,
        offset: -80,
    });

});

