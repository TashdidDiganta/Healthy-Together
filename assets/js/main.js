(function($){
    "use strict";

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: false
  })


  let timeline = gsap.timeline();


  timeline.from('.td-btn-white',{
    y: 300,
    delay: 0.05,
    duration: 1
  })


  let vision = gsap.timeline( {
    scrollTrigger: {
			trigger: ".td-review-area",
			start: "top 25%",
			markers: false,
			scrub: 1,
      ease: "power2.in",
			// end: "bottom 100%",
		}
  })

  vision.from('.heart-img',{
    scale: 1.5,
    ease: "power2.in",
  })

  vision.to('.card-1',{
    x: 300,
    duration: 3,
    ease: "easeIn",
    delay: 0.1
  })
  vision.to('.card-2',{
    x: -380,
    duration: 7,
    delay: 0.2
  })
  vision.to('.card-3',{
    x: 300,
    duration: 3,
    delay: 0.3
  })
  vision.to('.card-4',{
    x: -480,
    duration: 1,
    delay: 0.1
  })


//Reveal Animation 
const anim_reveal = document.querySelectorAll(".td-hero-title, .title-black");
anim_reveal.forEach(areveal => {

	var duration_value = 1.5
	var onscroll_value = 1
	var stagger_value = 0.02
	var data_delay = 0.05

	if (areveal.getAttribute("data-duration")) {
		duration_value = areveal.getAttribute("data-duration");
	}
	if (areveal.getAttribute("data-on-scroll")) {
		onscroll_value = areveal.getAttribute("data-on-scroll");
	}
	if (areveal.getAttribute("data-stagger")) {
		stagger_value = areveal.getAttribute("data-stagger");
	}
	if (areveal.getAttribute("data-delay")) {
		data_delay = areveal.getAttribute("data-delay");
	}

	areveal.split = new SplitText(areveal, {
		type: "lines,words,chars",
		linesClass: "tp-reveal-line"
	});

	if (onscroll_value == 1) {
		areveal.anim = gsap.from(areveal.split.chars, {
			scrollTrigger: {
				trigger: areveal,
				start: 'top 85%',
			},
			duration: duration_value,
			delay: data_delay,
			ease: "circ.out",
			y: 200,
			stagger: stagger_value,
			opacity: 0,
		});
	} else {
		areveal.anim = gsap.from(areveal.split.chars, {
			duration: duration_value,
			delay: data_delay,
			ease: "circ.out",
			y: 200,
			stagger: stagger_value,
			opacity: 0,
		});
	}

});


let tl =  gsap.timeline({
    scrollTrigger: {
        trigger: '.td-benefits-area',
        start: 'top 10%',
        scrub: true,
        markers: false,
        invalidateOnRefresh: true
    }
})

tl.to('.td-benefits-area',{
    width: "1700",
    borderRadius: "50px"
		// height: "1060",
})


let video =  gsap.timeline({
  scrollTrigger: {
      trigger: '.td-vision-video',
      start: 'top 20%',
      end: 'bottom 10%',
      scrub: true,
      markers: false,
      pin: true
      // invalidateOnRefresh: true
  }
})

video.to('.td-vision-video',{
  // rotationZ: 360, 
  // rotationY: -90,
  // x:1000
})


        
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