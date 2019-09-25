$(document).ready(function() {
    // ------------------------------------- Carousel ------------------------------------- //
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/chevron-right.png"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });
    // ------------------------------------- Tabs ------------------------------------- //
    $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('.container').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    // ------------------------------------- Slide details ------------------------------------- //
    function slideDetails(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__product').eq(i).toggleClass('catalog-item__product_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }
    slideDetails('.catalog-item__link');
    slideDetails('.catalog-item__back');
    // ------------------------------------- Validate forms ------------------------------------- //
    function formValidate(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    number: true
                },
                email: {
                    required: true,
                    email: true,
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Пожалуйста, введите {0} символа!")
                },
                phone: {
                    // required: "Пожалуйста, введите свой номер телефона",
                    number: "Пожалуйста, введите корректный номер телефона"
                },
                email: {
                    required: "Пожалуйста, введите свой e-mail",
                    email: "Пожалуйста, введите корректный e-mail"
                }
            }
        });
    }
    formValidate('#consultation-form');
    formValidate('#consultation form');
    formValidate('#order form');
    // ------------------------------------- Phone input mask ------------------------------------- //
    $('input[name=phone]').mask('+7 (999) 999-99-99');
    // ------------------------------------- Modal windows ------------------------------------- //
    $('button[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    })
    $('.button_small').each(function(i) {
        $(this).on('click', function() {
            $('.modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    })
    $('.modal__close').on('click', function() {
        $('.overlay, #order, #consultation, #thanks').fadeOut();
    })
    // ------------------------------------- Smooth scroll and pageup ------------------------------------- //
    $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else
            $('.pageup').fadeOut();
    })
    $("a[href='#up'], a[href='#catalog']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 'slow');
        return false;
    });
    // ------------------------------------- Wow effects ------------------------------------- //
    new WOW().init();
});