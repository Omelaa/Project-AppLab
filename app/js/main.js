
  
let myImageSlider = new Swiper('.partners__items',{
  slidesPerView: 5,
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

       var mixer = mixitup('.prices__items');
          
});