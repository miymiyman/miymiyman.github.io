$(function() {
    var slider = $(".slider-main");

    if (slider.length > 0) {
        slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            infinite: true,
            cssEase: 'ease-in-out'
        });
    }

   
});