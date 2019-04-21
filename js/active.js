$(document).ready(function () {

//   slick-slider-area
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:false
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
        arrows:false,
        dots:true
    });
    
    //   brand-area
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows:false,
        dots:false
    });

    // function-last-brackets
})
