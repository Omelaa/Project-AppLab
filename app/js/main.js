
  
new Swiper('.partners__items',{
  slidesPerView: 5,
  loop: true,
  centeredSlides: true,
  
  autoplay: {
    // Пауза между прокруткой
		delay: 2000,
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
  speed: 300,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 5,
    }
  },
});

new Swiper('.meet-slider',{

    navigation:{
      nextEl: ".meet-slider__next",
      prevEl: ".meet-slider__prev"
    },

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
  
    autoplay: {
     // Пауза между прокруткой
		  delay: 2000,
		  // Закончить на последнем слайде
		  stopOnLastSlide: false,
		  // Отключить после ручного переключения
		  disableOnInteraction: false
	  },
    speed: 300,
});
  
  
$(function(){

    if ($(window).scrollTop() > 1){
    $('.header').addClass("sticky");
    }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
  });


    $('.header__burger, .menu').click(function (){
     $('.header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });

       var mixer = mixitup('.prices__items');


       $('.asked__second-title').click(function () {
  if ($('.asked__item').hasClass('one')) {
      $('.asked__second-title').not($(this)).removeClass('active');
      $('.asked__text').not($(this).next()).slideUp(300);
  }
  $(this).toggleClass('active').next().slideToggle(300);
});
          
});