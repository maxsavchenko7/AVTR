$(document).ready(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="assets/images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="assets/images/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 541,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    arrows: false,
                },
            }
        ]
    });
});