document.querySelector(".tab-hidden.ico-burger").addEventListener("click", function() {
  let burgerMenu = document.getElementById("burger-menu");
  burgerMenu.classList.add("show");
});

document.querySelector(".nav-burger").addEventListener("click", function() {
  let burgerMenu = document.getElementById("burger-menu");
  burgerMenu.classList.remove("show");
});