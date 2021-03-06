$( document ).ready(function() {
  $('.slick-item').on('init', function(event, slick){
    $('.hidden').removeClass('hidden');
  });

  $('.slick-item').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   centerMode: false,
   infinite: true,
   arrows: true,
   nextArrow: "<button type='button' class='slick-hero-next slick-arrow'>Next</button>",
   prevArrow: "<button type='button' class='slick-hero-prev'>Prev</button>",
   centerMode: true,
   centerPadding: '10vw'
  });
});
