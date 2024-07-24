// MOBIL RESPONSIVE
const menuIcon = document.getElementById('menu-icon');
const mobileDiv = document.getElementById('mobil-menu-bar');

function openMenuBar(){
mobileDiv.style.display = "flex"
menuIcon.style.display = "none"   
}

function closeMenuBar(){   
mobileDiv.style.display = "none"
menuIcon.style.display = "flex"
}


// 
/* <!-- SLIDER SHOW CONTACT START --> */


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* <!-- SLIDER SHOW CONTACT END--> */
