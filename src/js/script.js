$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/chevron-right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
      });
  });