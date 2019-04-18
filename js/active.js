    // abcd-active
    $('.abcd-active').owlCarousel({
        responsiveClass: true,
        nav: false,
        loop: true,
        dots: false,
        margin: 50,
        responsive: {
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 6,
            }
        }
    })

    // magnify-active
    $('.video-popup').magnificPopup({ type: 'iframe' })
    
    
    // master-menu-active
    jQuery('header nav').meanmenu({
        
        
        
    });
    
    // function-last-brackets
})
