//Инициализация
new Swiper('.image-slider', {

 pagination: { el: '.swiper-pagination', clickable: true },

breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  //Выравнивание высоты
  autoHeight: true,
  //Кол-во для показа
  slidesPerView: 3,
  //Сколько пролистывать
  slidesPerGroup: 1,

});
//////////

$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});


$(document).ready(function(){
    //radio
    $.each($('.radio-btn'),function(index, val){
         if($(this).find('input').prop('checked')==true){
          $(this).addClass('active');
         }
    });
    $(document).on('click', '.hot', function(event) {
      if($(this).hasClass('active')){
         $(this).find('input').prop('checked', false);
      }else{
        $(this).find('input').prop('checked', true);
      }

      $(this).toggleClass('active');

      return false;
    });
});

$(document).ready(function(){
    //radio
    $.each($('.radio-btn'),function(index, val){
         if($(this).find('input').prop('checked')==true){
          $(this).addClass('active');
         }
    });
    $(document).on('click', '.cold', function(event) {
      if($(this).hasClass('active')){
         $(this).find('input').prop('checked', false);
      }else{
        $(this).find('input').prop('checked', true);
      }

      $(this).toggleClass('active');

      return false;
    });
});