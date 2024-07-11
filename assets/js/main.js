(function($){
    "use strict";


        
    // testimonial
    var swiper = new Swiper(".tc-testimonial-active", {
        spaceBetween: 30,
        slidesPerView: 'auto',
        enteredSlides: true,
        keyboard: {
          enabled: true,
        },

        navigation: {
          nextEl: ".tc-test-button-next",
          prevEl: ".tc-test-button-prev",
        },
      });

    // testimonial
    var swiper = new Swiper(".brand-text-active", {
      spaceBetween: 30,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true,
      },
    });


    $('.popup-image').magnificPopup({
      type: 'image'
      // other options
    });

    $('.popup-video').magnificPopup({
      type: 'iframe'
      // other options
    });


})(jQuery);