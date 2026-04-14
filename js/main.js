/*
  [JS Index]
*/


/*
  1. preloader
  2. show elements
    2.1. show fadeIn
    2.2. show logo, nav icon
    2.3. show hero bg
  3. navigation
    3.1. navigation active links
    3.2. navigation launcher
    3.3. navigation OPEN/CLOSE
    3.4. navigation hover state
    3.5. navigation animation
    3.6. navigation scroll animation
  4. scroll elements SHOW/HIDE
  5. charts
  6. slick slider
    6.1. slick testimonials slideshow
  7. owl carousel
    7.1. owl sessions carousel
  8. magnificPopup
    8.1. magnificPopup single
	8.2. magnificPopup gallery
  9. swiper slider
  10. contact form
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. show elements
        // 2.1. show fadeIn
        setTimeout(function() {
            $(".fadeIn-element").delay(1400).css({
                display: "none"
            }).fadeIn(1600);
        }, 0);
        // 2.2. show logo, nav icon
        setTimeout(function() {
            $(".logo, #nav-launch-btn").removeClass("top-position");
        }, 800);
		setTimeout(function() {
            $(".swiper-slide-pagination, .swiper-slide-controls-play-pause-wrapper, .hero-slider-bg-controls").removeClass("bottom-position");
        }, 800);
        // 2.3. show hero bg
        $(".hero-bg").addClass("hero-bg-show");
    });
	
    // 3. navigation
    // 3.1. navigation active links
    $("a.navigation-state").on("click", function() {
        $("a.navigation-state").removeClass("active");
        $(this).addClass("active");
    });
    // 3.2. navigation launcher
    $("#nav-launch-btn").on("click", function() {
        if ($(".introduction").hasClass("introduction-off")) {
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
            $("nav.navigation-menu").removeClass("show");
        } else {
            $(".introduction").removeClass("introduction-on").addClass("introduction-off");
            $("nav.navigation-menu").addClass("show");
        }
    });
    // 3.3. navigation OPEN/CLOSE
    $("nav.navigation-menu a").on("click", function() {
        if ($("nav.navigation-menu").hasClass("show")) {
            $("nav.navigation-menu").removeClass("show");
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
        } else {
            $("nav.navigation-menu").addClass("show");
        }
    });
    // 3.4. navigation hover state
    hoverMenu();
    imgMenu();
    function hoverMenu() {
        $(".menu li a").on("mouseenter", function() {
            var ref = $(this).data("ref"),
                menuImg = $('.nav-img[data-ref="' + ref + '"]');
            $(".menu li a").removeClass("active");
            $(this).addClass("active");
            $(".nav-img").removeClass("active");
            menuImg.addClass("active");
        });
    }
    function imgMenu() {
        $("[data-bg]").each(function() {
            var bg = $(this).data("bg");
            $(this).css({
                "background-image": 'url(' + bg + ')',
                "background-position": "center center",
                "background-size": "cover"
            });
        });
    }
    // 3.5. navigation animation
    $(".line-icon").on("mouseenter", function() {
        $(this).addClass("line-icon-animation");
        setTimeout(function() {
            $(".line-icon-animation").removeClass("line-icon-animation")
        }, 2000);
    })
    // 3.6. navigation scroll animation
    $(".scroll-page").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
	
    $(window).on("scroll", function() {
        // 4. scroll elements SHOW/HIDE
        if ($(this).scrollTop() > 100) {
            $(".go-home").addClass("show");
            $(".scroll-indicator-wrapper").addClass("scroll-indicator-wrapper-position-secondary");
			$(".logo").addClass("logo-remove-fixed");
			$(".swiper-slide-pagination, .swiper-slide-controls-play-pause-wrapper, .hero-slider-bg-controls").addClass("swiper-remove-fixed");
        } else {
            $(".go-home").removeClass("show");
            $(".scroll-indicator-wrapper").removeClass("scroll-indicator-wrapper-position-secondary");
			$(".logo").removeClass("logo-remove-fixed");
			$(".swiper-slide-pagination, .swiper-slide-controls-play-pause-wrapper, .hero-slider-bg-controls").removeClass("swiper-remove-fixed");
        }
    });
	
    // 5. charts
    $(".chart-appear-about").appear(function() {
        $(".chart-about").easyPieChart({
            easing: "easeOutBounce",
            onStep: function(from, to, percent) {
                $(this.el).find(".percent-about").text(Math.round(percent));
            }
        });
    });
	
    // 6. slick slider
    // 6.1. slick testimonials slideshow
    $(".slick-testimonials").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 7. owl carousel
    // 7.1. owl sessions carousel
    $("#sessions-carousel").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
	
	// 8. magnificPopup
    // 8.1. magnificPopup single
    $(".popup-photo-single").magnificPopup({
        type: "image",
        gallery: {
            enabled: false
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
		fixedContentPos: false
    });
    // 8.2. magnificPopup gallery
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
	// 9. swiper slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
		scrollbar: false
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.pause();
            this.currentTime = 0;
        });
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            //this.rest
            this.play();
        });
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	
	// 10. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    let underscoreActive = false;
	setInterval(function(){
        
        var url = underscoreActive ? "logo.png" : "logo_no_underscore.png";
        $("#logotop").css("background", "url(../img/" + url + ") no-repeat");
        underscoreActive = !underscoreActive;
    }, 1000);
    

});