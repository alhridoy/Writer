(function ($) {

    "use strict";

 
    /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    
    /*==== Sticky ====*/
    $("#header").sticky({topSpacing:0});
    //filter container mixitup

 

    //
      $('#MixItUp1').mixItUp({
    selectors: {
      filter: '.filter',
      
    }
  });
      // ===== Scroll to Top ==== 

    $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
    

   

    /*==== Smoothscroll ====*/    
    $('#home a, .custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
          event.preventDefault();
    });
    
  /* banner-Owl*/
$(".banner-carousel").owlCarousel({          
       loop:true,
        margin:0,
        nav:false,
        responsiveClass:true,
        autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 2500,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            700:{
                items:1,
                nav:false,
                loop:true
            },
            1170:{
                items:1,
                nav:true,
                loop:true
            }
        }
      
      
    });  
//Active books carousel
 $('.active-books').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
        items: 3,
        margin: 20,
        autoHeight : true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        responsive: {
              0:{
                items:1,
                nav:false,
                autoplay:true,
                autoplayTimeout:1500,
                autoplayHoverPause:true,
                margin: 0
            },
            440:{
                items:1,
                nav: false
            },
            768:{
                items:3,
                nav: false
            },
            1000:{
                items:4,
            }
        }
    })

   //Book-Review
   
     if($(".flexslider")[0]) { 
        $('.flexslider').flexslider(
            { 
                "directionNav" : true,
                "controlNav" : false,
                "animation" : "slide",
                "prevText" : "",
                "nextText" : "",
                "animationLoop" : false,
                "animationSpeed" : 1000,
                "slideshowSpeed" : 15000,
          
        });
    }
    //
    var owl = $('.owl-carousel'),
        owlOptions = {
            loop: false,
            margin: 10,
            responsive: {
                0: {
                    items: 2
                }
            }
        };

    if ( $(window).width() <385 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 854 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
    
})(jQuery);