window.onscroll = function () { fixFunction() };
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function fixFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("headerFix");
  } else {
    header.classList.remove("headerFix");
  }
}