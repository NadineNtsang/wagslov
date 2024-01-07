function myFunction() {
  var x = document.getElementById("nav-nav");
  if (x.className === "mybar") {
    x.className += " responsive";
  } else {
    x.className = "mybar";
  }
}
function myFunctions() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
window.onscroll = function () { myFunction1() };
var navbar = document.getElementById("head");
var sticky = navbar.offsetTop;
function myFunction1() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


