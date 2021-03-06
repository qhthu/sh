$(document).ready(function () {
    $(".items").slick({
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: false
                }
            }
        ]
    });
});


