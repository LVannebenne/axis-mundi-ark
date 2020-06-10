
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "25vh";
    document.getElementById("header").style.backgroundPositionX = "left";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("nav").style.display = "flex";
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("nav").style.zIndex = "1001";
    document.getElementById("nav").style.left = "40%";
    document.getElementById("title").style.display = "block";
  } else {
    document.getElementById("header").style.height = "100vh";
    document.getElementById("header").style.backgroundPositionX = "center";
    document.getElementById("nav").style.display = "none";
  }
}