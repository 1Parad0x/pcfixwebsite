var hamburger = document.getElementById("hamburger");
function myNav() {
  var menu = document.querySelector(".main-nav");
  menu.classList.toggle("responsive");
}

hamburger.onclick = function () {
  myNav();
};
