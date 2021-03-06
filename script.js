/*JS for code page */
function responseveIframe() {
  $('iframe').height(
	$('iframe').attr("height") / $('iframe').attr("width") * $('iframe').width()
  );
}

responseveIframe();

$(window).resize(function() {
  responseveIframe();
});



var slideIndex = [1,1];
var slideId = ["slides1", "slides2"]
var dotsId = ["dot1", "dot2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotsId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
	dots[i].className=dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}





// Next/previous controls
function addSlides(n) {
  displaySlides(charSlideIndex += n);
}

// Thumbnail image controls
function shownSlide(n) {
  displaySlides(charSlideIndex = n);
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("char-slide");
  var dots = document.getElementsByClassName("char-img");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {charSlideIndex = 1}
  if (n < 1) {charSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[charSlideIndex-1].style.display = "block";
  dots[charSlideIndex-1].className += " active";
  captionText.innerHTML = dots[charSlideIndex-1].alt;
}