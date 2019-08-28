(function($){
  "use strict";

  // Preloader
	// jQuery(window).on('load', function() {
	// 	jQuery("#status").fadeOut();
	// 	jQuery("#preloader").delay(350).fadeOut("slow");
	// });

	// on ready function
	jQuery(document).ready(function($) {
	var $this = $(window);


	//show hide login form js
	$('#search_button').on("click", function(e) {
		$('#search_open').slideToggle();
		e.stopPropagation();
	});

	$(document).on("click", function(e){
		if(!(e.target.closest('#search_open'))){
			$("#search_open").slideUp();
		}
   });

   // ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').on('click', function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});

   //------------------------ OWL JS Start --------------------//


   $(document).ready(function() {

    $('.news-ticker').owlCarousel({
      items: 1,
      loop:true,
      autoplay:true,
      autoplayTimeout: 3000,
      dots: false,
      slideTransition: 'linear',
      animateIn: 'slideInRight',
      animateOut: 'slideOutLeft'
    });

              $('.jp_tittle_slider_content_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
				animateOut: 'bounceInDown',
				animateIn: 'bounceInDown',
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })


			$(document).ready(function() {
              $('.jp_hiring_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: true
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
            
			$(document).ready(function() {
              $('.jp_career_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: true
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
			// Featured Products Js
				$('.ss_featured_products .owl-carousel').owlCarousel({
					loop:true,
					margin:0,
					nav:true,
					autoplay:true,
					navText:["PREV" , "NEXT"],
					dots:true,
					smartSpeed: 1200,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
				});


				$(document).ready(function() {
              $('.jp_spotlight_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })

			$(document).ready(function() {
              $('.jp_best_deal_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })

			$(document).ready(function() {
              $('.jp_client_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText : ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })

			//------------------------ OWL JS End--------------------//


	//-------------------------------------------------------
    // counter-section
    //-------------------------------------------------------

    $('.jp_counter_main_wrapper').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });	
			
        
        /*-----Range-----*/
        
        $(document).ready(function(){ 
            $('.range-slider-age').jRange({
    from: 18,
    to: 30,
    step: 1,
    scale: [18, 25, 30],
    format: '%s',
    width: 300,
    showLabels: true,
    isRange : true
});
            $('.range-slider-salary').jRange({
    from: 80000,
    to: 1000000,
    step: 10000,
    scale: [80000,300000,700000,1000000],
    format: '%s',
    width: 300,
    showLabels: true,
    isRange : true
});
            $('.range-slider-allowances').jRange({
    from: 10000,
    to: 50000,
    step: 5000,
    scale: [10000,20000,30000,40000,50000],
    format: '%s',
    width: 300,
    showLabels: true,
    isRange : true
});
            
        });
         
			//***------comment double hide show------***//
				
			 $(document).ready(function(){
    
    $('#epm_hover_hide').click( function(e) {
        
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('#emp_block_tab').toggle('fade');
        
    });
    
    $('#emp_block_tab').click( function(e) {
        
        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too
        
    });
    
    $('body').click( function() {
       
        $('#emp_block_tab').hide();
        
    });
    
});
$(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
});
					
	});
})();