var menuButton = document.querySelector('.burger__menu-button');
var menu = document.querySelector('.header__information');

$(document).ready(function () {
  var modal = $('.modal'),
      success = $('.success'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      successBtn = $('[data-toggle=success]'),
      close = $('.success__close'),
      input = $('.modal input[type=text]'),
      switchModal = function() {
        modal.toggleClass('modal--visible'),
        input.focus();   
      },
      switchSuccess = function() {
        success.toggleClass('success--visible');
      };

  modalBtn.on('click', switchModal);

  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
  });

  modal.keyup(function(event) {
      if (event.key === 'Escape') {
        modal.removeClass('modal--visible');
      }
  });
  
  modal.on('click', function (event) {
    if (modal.has(event.target).length == 0) {
      modal.toggleClass('modal--visible');
    }
  });

  successBtn.on('click', switchSuccess);

  close.on('click', function () {
    success.removeClass('success--visible');
  });

  success.keyup(function(event) {
      if (event.key === 'Escape') {
        success.removeClass('success--visible');
      }
  });
  
  success.on('click', function (event) {
    if (success.has(event.target).length == 0) {
      success.toggleClass('success--visible');
    }
  });

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
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
    
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });
  
  $(".logo").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".information__container").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  if (window.matchMedia("(min-width: 992px)").matches) {
    /* the viewport is at least 400 pixels wide */
  } else {
    /* the viewport is less than 400 pixels wide */
  }
  
  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  var next = $('.news__next');
  var prev = $('.news__prev');
  
  next.css('left', '80px');

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "inval",
    ignore: ":disabled",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required"
    }, // сообщения
    errorElement: 'div',
    messages: {
      userName: {
        required: "Заполните поле: Имя",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя может иметь максимум 15 букв"
      },
      userPhone: "Заполните поле: Телефон"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.toggleClass('modal--visible');
          success.toggleClass('success--visible');
          ym(61647805, 'reachGoal', 'click'); return true;
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

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
        url: "Формат: https://example.com"
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
          $(form)[0].reset();
          success.toggleClass('success--visible');
          ym(61647805, 'reachGoal', 'click'); return true;
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invali",
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
      userPhone: "required",
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
      userPhone: "Заполните поле: Телефон",
      userMessange: "Заполните поле: Сообщение"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          success.toggleClass('success--visible'); 
          ym(61647805, 'reachGoal', 'click'); return true;
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  new WOW().init();

  //маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00');
});