var menuButton = document.querySelector('.burger__menu-button');
var menu = document.querySelector('.header__information');
$(document).ready(function () {

  menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('burger__menu-button--active'); 
    menu.classList.toggle('header__information--active'); 
  });

  $(window).scroll(function(){
    // 200px от верха
    if ($(window).scrollTop() > '100'){
      $('.header__menu').css('background-color', '#e3fbdd');
      $('.header__menu').css('border-radius', '50px');
    }
    if ($(window).scrollTop() < '150'){
      $('.header__menu').css('background-color', 'transparent');
    }
  });
  
  $(document).ready(function () {
  //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

});
