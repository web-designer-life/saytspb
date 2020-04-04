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

  var next = $('.news__next');
  var prev = $('.news__prev');
  
  next.css('left', '80px');

  //Валидация формы
  $('.price__form').validate({
    errorClass: "invalid",
    ignore: ":disabled",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      userAddress: {
        required: true,
        url: true
      },
      userMessange: "required"
    }, // сообщения
    errorElement: 'div',
    messages: {
      userName: {
        required: "Заполните поле: Имя",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя может иметь максимум 15 букв"
      },
      userEmail: {
        required: "Заполните поле: Email",
        email: "Введите корректный email"
      },
      userAddress: {
        required: "Заполните поле: Адрес веб-сайта",
        url: "Введите корректный адрес веб-сайта"
      },
      userMessange: "Заполните поле: Сообщение"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();ym(61354918, 'reachGoal', 'form');
          modal.toggleClass('modal--visible');
          success.toggleClass('success--visible'); return true;
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  //маска для телефона
  $('[type=tel]').mask('+7 (999) 999-99-99');

});
