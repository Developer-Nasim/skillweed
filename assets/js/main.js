(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  });  

  
  // Header
  $(".hero-slider").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true
  });



  // Courses
  $(".thecourses").owlCarousel({
    loop: true,
    margin: 40,
    items: 4,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ], 
    nav: true, 
    stagePadding: 50,
    responsive: {
      0: {
        items: 1,
        margin: 20
      },
      767: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });
 

  /* magnificPopup img view */
  $(".plays").magnificPopup({
    type: "iframe", 
  }); 
  
 
})(jQuery);
