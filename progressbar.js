window.onscroll = function() {myFunction()};


function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var progressbar  = document.querySelector(".progressbar");

  progressbar.style.width = scrolled + "%";
}