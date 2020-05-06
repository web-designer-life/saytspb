var cartButton = document.querySelector("#cart-button");
var close = document.querySelector("#close");
var modal = document.querySelector(".modal");

new WOW().init();

function toggleModal() {
  modal.classList.toggle("modal--active");
}

cartButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

