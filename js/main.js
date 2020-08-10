$('#hero-slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button type="button" class="slick-next"> ᐳ </button>',
    prevArrow: '<button type="button" class="slick-prev"> ᐸ </button>'
});

$(document).ready(function () {
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */

    $('#button-up').hide()

    $(window).scroll(function () {

        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 950) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
        console.log($(this).scrollTop());
    });

    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});