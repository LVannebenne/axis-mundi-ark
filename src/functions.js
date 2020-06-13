
window.onscroll = function() {scrollHeaderFunction()};

function scrollHeaderFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    switch (true) {
      case ( window.innerWidth > 1200):
        document.getElementById("header").style.height = "25vh";
        document.getElementById("logo").style.width = "15vw";
        document.getElementById("logo").style.height = "15vw";
        document.getElementById("title").style.fontSize = "3.5rem";
        document.getElementById("title").style.width = "60vw";
        document.getElementById("title").style.marginBottom = "4rem";
        document.getElementById("logo").style.backgroundPosition = "center bottom -4rem";
        break;
      case ( window.innerWidth <= 1200 && window.innerWidth > 768 ):
        document.getElementById("header").style.height = "25vh";
        document.getElementById("logo").style.width = "15vw";
        document.getElementById("logo").style.height = "15vw";
        document.getElementById("title").style.fontSize = "3.5rem";
        document.getElementById("title").style.width = "70vw";
        document.getElementById("title").style.marginBottom = "3rem";
        document.getElementById("logo").style.backgroundPosition = "center bottom -1rem";
        break;
      case ( window.innerWidth <= 768 && window.innerWidth > 596  ):
        document.getElementById("logo").style.width = "20vw";
        document.getElementById("logo").style.height = "20vw";
        document.getElementById("header").style.height = "20vh";
        document.getElementById("title").style.fontSize = "3rem";
        document.getElementById("title").style.width = "60vw";
        document.getElementById("title").style.marginBottom = "2rem";
        document.getElementById("logo").style.backgroundPosition = "center bottom -1rem";
        break;
      case ( window.innerWidth <= 596 ):
        document.getElementById("logo").style.width = "15vw";
        document.getElementById("logo").style.height = "15vw";
        document.getElementById("header").style.height = "15vh";
        document.getElementById("title").style.margin = "0";
        document.getElementById("title").style.fontSize = "2rem";
        document.getElementById("title").style.width = "70vw";
        document.getElementById("title").style.marginBottom = "1rem";
        document.getElementById("logo").style.backgroundPosition = "center bottom -1rem";
        break;
      default:
        document.getElementById("header").style.height = "20vh";
        break;
    }
    document.getElementById("logo").style.backgroundSize = "cover";
    document.getElementById("header").style.flexDirection = "row";
    document.getElementById("header").style.alignItems = "flex-end";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("nav").style.zIndex = "1001";
    document.getElementById("nav").style.display = "flex";
  } else {
    document.getElementById("header").style.height = "100vh";
    document.getElementById("header").style.flexDirection = "column";
    document.getElementById("header").style.alignItems = "center";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("logo").style.width = "95vw";
    document.getElementById("logo").style.height = "95vw";
    document.getElementById("logo").style.backgroundSize = "cover";
    document.getElementById("logo").style.backgroundPosition = "top";
    document.getElementById("title").style.margin = "2rem";
    document.getElementById("nav").style.display = "none";
  }
}
var elmntTo = document.getElementById("scroll");


var el = document.getElementById("header")
if ( el ) { 
  el.addEventListener(
    'onclick', 
    () => {
      
      elmntTo.scrollIntoView(); 
    }
  )
}

