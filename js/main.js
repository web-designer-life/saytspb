var menuButton = document.querySelector('.burger__menu-button');
var menu = document.querySelector('.header__information');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('burger__menu-button--active'); 
  menu.classList.toggle('header__information--active'); 
});

$(window).scroll(function(){
  // 200px от верха
  if ($(window).scrollTop() > '100'){
    $('.header__menu').css('background-color', '#e3fbdd');
    $('.header__menu').css('border-radius', '20px');
  }
  if ($(window).scrollTop() < '150'){
    $('.header__menu').css('background-color', 'transparent');
  }
});