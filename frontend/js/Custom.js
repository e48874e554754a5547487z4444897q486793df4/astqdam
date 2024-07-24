$(document).ready(function() {


    $(".preloader").delay(1200).fadeOut(300);

    //spinner
    $(".spinner ").fadeOut("slow");

    // Datetimepicker
    $.datetimepicker.setLocale("pt-en");
    $("#datetimepicker").datetimepicker();

    // odometer
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    //navbar animation
    $(window).scroll(function() {
        var appScroll = $(document).scrollTop();
        if ((appScroll > 60) && (appScroll < 99999999999)) {
            $("#Header").addClass("animatedNav");
        };
        if ((appScroll > 0) && (appScroll < 60)) {
            $("#Header").removeClass("animatedNav");
        };
    });
    //MainSlider
    var mainSlider = new Swiper(".mainSliderContainer", {
        spaceBetween: 0,
        loop: true,
        effect: "fade",
        speed: 500,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".mainSliderNext",
            prevEl: ".mainSliderPrev",
        },
    });

    //MainSlider
    var swiper = new Swiper('.MainSlider-container', {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        effect: 'fade',
        speed: 500,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // partnersSlider
    var swiper = new Swiper(".partnersSlider", {
        effect: "cards",
        grabCursor: true,
        speed: 700,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    // testimonials
    var swiper = new Swiper('.testimonialsSlider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 'auto',
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        },
        observer: true,
        observeParents: true,
    });
    //blogs
    var swiper = new Swiper('.blogs-container', {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
        },
    });


    $(".Service-carousel").owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        dots: false,
        center: false,
        margin: 70,
        autoplay: true,
        navText: [
            '<i class="fa-solid fa-chevron-right"></i>',
            '<i class="fa-solid fa-chevron-left"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            767: {
                items: 1,
                margin: 0,
            },
            991: {
                items: 2,
            },
            1024: {
                items: 2,
            },
            1199: {
                items: 3,
            },
        },
    });

    //Categories Slider
    var referencesSlider = new Swiper(".referencesSlider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 5,
        speed: 1000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // services slider
    var cvSlider = new Swiper(".cvSlider", {
        navigation: {
            nextEl: ".cvSliderNext",
            prevEl: ".cvSliderPrev",
        },
        pagination: {
            el: ".cvSliderPagination",
            clickable: true,
        },
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    $(".cvSlider").hover(
        function() {
            this.swiper.autoplay.stop();
        },
        function() {
            this.swiper.autoplay.start();
        }
    );

    // tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    // job form
    $(".JoinBtn").click(function() {
        $(".joinForm").slideToggle(300);
    });
    //select2
    $('.select2').select2();
    //WOW js
    new WOW().init();
    //dropify
    $('.dropify').dropify();
});
jQuery(
    (function($) {
        "use strict";

        // Button Hover JS
        $(function() {
            $(".default-btn")
                .on("mouseenter", function(e) {
                    var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                    $(this).find("span").css({
                        top: relY,
                        left: relX
                    });
                })
                .on("mouseout", function(e) {
                    var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                    $(this).find("span").css({
                        top: relY,
                        left: relX
                    });
                });
        });

        // Nice Select JS
        $("select").niceSelect();

        // Datetimepicker
        $.datetimepicker.setLocale("pt-en");
        $("#datetimepicker").datetimepicker();

        // Team Slider
        $(".team-slider").owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Testimonials Slider
        $(".testimonials-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 50,
            nav: false,
            autoplay: false,
            autoplayHoverPause: true,
            dots: true,
        });

        // Blog Slider
        $(".blog-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Dedicated Slider
        $(".dedicated-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Treatment Slider
        $(".treatment-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Doctors Slider
        $(".doctors-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Clients Slider
        $(".clients-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 30,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 2,
                },
            },
        });

        // Testimonials Three Slider
        $(".testimonials-three-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Doctors List Slider
        $(".doctors-list-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Blog Three Slider
        $(".blog-three-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Partner Slider
        $(".partner-slider").owlCarousel({
            loop: true,
            dots: false,
            margin: 30,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },
            },
        });

        // Accordion JS
        $(".accordion > li:eq(0) .title").addClass("active").next().slideDown();
        $(".accordion .title").click(function(j) {
            var dropDown = $(this).closest("li").find(".accordion-content");
            $(this)
                .closest(".accordion")
                .find(".accordion-content")
                .not(dropDown)
                .slideUp();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this)
                    .closest(".accordion")
                    .find(".title.active")
                    .removeClass("active");
                $(this).addClass("active");
            }
            dropDown.stop(false, true).slideToggle();
            j.preventDefault();
        });

        // PROJECTS PORTFOLIO
        try {
            var mixer = mixitup("#Container", {
                controls: {
                    toggleDefault: "none",
                },
            });
        } catch (err) {}

        // Preloader JS
        jQuery(window).on("load", function() {
            jQuery(".preloader").fadeOut(500);
        });

        // Go to Top
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 0) {
                $(".go-top").addClass("active");
            } else {
                $(".go-top").removeClass("active");
            }
        });
        $(function() {
            $(window).on("scroll", function() {
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $(".go-top").addClass("active");
                if (scrolled < 600) $(".go-top").removeClass("active");
            });

            $(".go-top").on("click", function() {
                $("html, body").animate({
                    scrollTop: "0"
                }, 1000);
            });
        });

        // // Switch Btn
        // $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
    })(jQuery)
);