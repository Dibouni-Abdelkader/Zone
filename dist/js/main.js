$('document').ready(function(){

//-------------------------------------------------------------------------

  // Trigger Typed.js

  $(".typed").typed({
      strings: ["Designer.", "Developer."],
      loop: true,
      typeSpeed: 150
  });
//-------------------------------------------------------------------------
  
   //Trigger NiceScroll
  $('html').niceScroll({

      cursorcolor: "#070E19",
      cursorwidth: '8px',
      cursorborder: 'none',
      cursorborderradius: '0',
      zIndex: '99999'
  });

//--------------------------------------------------------------------------
  //Trigger Mixitup
  var mixer = mixitup('.max');

//--------------------------------------------------------------------------

  // controll box  add/remove active class
  $('.control-box button').on('click', function(){

    $(this).addClass('active').siblings().removeClass('active');
  });
//-------------------------------------------------------------------------
  // Back To Top Button
  var BackToTop = $('.packtop');
    
    BackToTop.click(function (e) {
        
        e.preventDefault();
        $('html, body').animate({
            
            scrollTop: 0
        
        }, 600);
    });


    // Smoothly Scroll To Element
   $('.navbar li a').click(function (e){
        
      e.preventDefault();
      $('html, body').animate({

      	
      	scrollTop: $("#" + $(this).data('scroll')).offset().top + 1
      }, 1000);


      // Add Active Class To The Active Link And Remove It From Sibling
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    });
//-----------------------------------------------------------------------------------------------

  $(window).on('scroll', function(){

	// Toggle Class Fixed In Navigation 
    if ($(this).scrollTop() >= 50) {

    	$("nav").addClass('fixed');
        
       
    } else {
       $('nav').removeClass('fixed'); 
      
    }

		// Show/Hide Back to top  button
   if ($(this).scrollTop() >= 500) {
          
          if (BackToTop.is(':hidden')) {
              
              BackToTop.fadeIn();
          }
      } else {
          
          BackToTop.fadeOut();
      }


    $('.smoth-section').each(function () {
            
            if ($(window).scrollTop() > $(this).offset().top) {

                var BlockId = $(this).attr('id');
                
                $('.navbar a').removeClass('active');
      
                $('.navbar li a[data-scroll=' + BlockId + ']').addClass('active');
       
            }
            
        });

  });

  
});