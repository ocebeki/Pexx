$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.header__toggleButton').click(function () {
        $('.header__nav').toggleClass('active');
        $('.header__toggleButton span').toggleClass('open');
    })
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.header__nav').addClass('header__navFixed');
            
        }else {
            $('.header__nav').removeClass('header__navFixed');
        }

    });

});
