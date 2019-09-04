(function($) {
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

        $(document).on("click", function(e) {
            if (!(e.target.closest('#search_open'))) {
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
                scrollTop: 0
            }, 500);
        });

        //------------------------ OWL JS Start --------------------//




        $('.news-ticker').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            dots: false,
            slideTransition: 'linear',
            animateIn: 'slideInRight',
            animateOut: 'slideOutLeft'
        });

        $('.jp_tittle_slider_content_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
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




        $('.jp_hiring_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
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



        $('.jp_career_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
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

        // Featured Products Js
        $('.ss_featured_products .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            navText: ["PREV", "NEXT"],
            dots: true,
            smartSpeed: 1200,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });



        $('.jp_spotlight_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
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



        $('.jp_best_deal_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
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



        $('.jp_client_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
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


        //------------------------ OWL JS End--------------------//


        //-------------------------------------------------------
        // counter-section
        //-------------------------------------------------------

        $('.jp_counter_main_wrapper').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
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
				width: 'auto',
				showLabels: true,
				isRange : true
			});
			$('.range-slider-age').jRange('setValue', '20, 28');
			$('.range-slider-salary').jRange({
				from: 80000,
				to: 1000000,
				step: 10000,
				scale: [80000,300000,700000,1000000],
				format: '%s',
				width: 'auto',
				showLabels: true,
				isRange : true
			});
				$('.range-slider-allowances').jRange({
				from: 10000,
				to: 50000,
				step: 5000,
				scale: [10000,20000,30000,40000,50000],
				format: '%s',
				width: 'auto',
				showLabels: true,
				isRange : true
			});            
		});

        //***------comment double hide show------***//



        $('#epm_hover_hide').click(function(e) {

            e.preventDefault(); // stops link from making page jump to the top
            e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
            $('#emp_block_tab').toggle('fade');

        });

        $('#emp_block_tab').click(function(e) {

            e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too

        });

        $('body').click(function() {

            $('#emp_block_tab').hide();

        });






        $(".fab,.backdrop").click(function() {
            if ($(".backdrop").is(":visible")) {
                $(".backdrop").fadeOut(125);
                $(".fab.child")
                    .stop()
                    .animate({
                        bottom: $("#masterfab").css("bottom"),
                        opacity: 0
                    }, 125, function() {
                        $(this).hide();
                    });
            } else {
                $(".backdrop").fadeIn(125);
                $(".fab.child").each(function() {
                    $(this)
                        .stop()
                        .show()
                        .animate({
                            bottom: (parseInt($("#masterfab").css("bottom")) + parseInt($("#masterfab").outerHeight()) + 70 * $(this).data("subitem") - $(".fab.child").outerHeight()) + "px",
                            opacity: 1
                        }, 125);
                });
            }
        });


        $("#demo_1").ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 100,
            from: 18,
            to: 80,
            step: 1
        });
        $("#salary_range").ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 10000000,
            from: 0,
            to: 10000000,
            step: 10
        });

        $('.js-example-basic-multiple').select2();


        /*-- Date Picker Config Start ------------------------------------------------------------------- */

        /**
         * formatDateToString Function get date in valid fromat.
         * @input: call the function with date object.
         */
        function formatDateToString(date) {
            // 01, 02, 03, ... 29, 30, 31
            var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
            // 01, 02, 03, ... 10, 11, 12
            var mm = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
            // 1970, 1971, ... 2015, 2016, ...
            var yyyy = date.getFullYear();

            // create the format you want
            return (mm + "/" + dd + "/" + yyyy); // Set format patten according Datepicker format.
        }
        $('#datepicker').val(formatDateToString(new Date()));
        $('#datepicker').datepicker({
            clearBtn: true,
            daysOfWeekDisabled: "0,6", // 0 - Su, 1 - Mo, 2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sa
            defaultViewDate: { year: new Date().getFullYear(), month: new Date().getMonth(), day: new Date().getDate() },
            format: "mm/dd/yyyy",
            todayHighlight: true
        });


        /*-- Date Picker Config Ends ------------------------------------------------------------------- */

    });
})();