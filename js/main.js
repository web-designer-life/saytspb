var menuButton = document.querySelector('.burger__menu-button');
var menu = document.querySelector('.header__information');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('burger__menu-button--active'); 
  menu.classList.toggle('header__information--active'); 
});