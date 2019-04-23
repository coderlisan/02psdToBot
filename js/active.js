$(document).ready(function () {


    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu',
    });





    //   slick-slider-area
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });
    // counter-area
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });


    //   testimonial-slider-area
    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    //   brand-area
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        margin: 10,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // function-last-brackets
})
