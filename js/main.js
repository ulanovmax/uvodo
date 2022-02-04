// Parallax Partners

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

// Preloader

window.onload = function () {
    document.body.classList.add('loaded');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

$(document).ready(function () {

    // Sliders

    $('.slider-reviews').slick({
        infinite: false,
        responsive: [
            {
                breakpoint: 875,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true
                }
            },
            {
                breakpoint: 655,
                settings: {
                    arrows: false
                }
            },
        ]
    })

    $(".authors-avatars .user").on("click", function () {
        $('.user').removeClass('active');
        $(this).addClass('active');
    });

    $(".slider-reviews .slick-next").on("click", function () {
        $('.user').removeClass('active');
        $('.user_men').addClass('active');

    });

    $(".slider-reviews .slick-prev").on("click", function () {
        $('.user').removeClass('active');
        $('.user_woman').addClass('active');
    });

    $(".user_woman").on("click", function () {
        $('.slider-reviews').slick('slickPrev');
    });

    $(".user_men").on("click", function () {
        $('.slider-reviews').slick('slickNext');
    });


    $('.slider-posts').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })



    // Scroll to Top

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    // Hamburger

    $('.hamburger-btn').on('click', function () {
        $('.menu').toggleClass('active');
        $(this).toggleClass('open');
        $('#scroller').toggleClass('d-none');
    })
    $('.menu-list__item a').on('click', function () {
        $('.menu').removeClass('active');
        $('#scroller').removeClass('d-none');
        $('.hamburger-btn').removeClass('open');
    })
});




