(function ($) {


   // Global jquery function
   $('.testimonial-active').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         }
      ]
   });


})(jQuery);