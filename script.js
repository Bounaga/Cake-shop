// navbar toggle
const menu =    document.querySelector('.bars-icon'); 
const navbarCaontainer = document.querySelector('.navbar-container');

const hideNavbar = () => {
    navbarCaontainer.classList.toggle('hide-navbar-container');
}
menu.addEventListener('click', hideNavbar);

// gallery
// const CenteredText = document.querySelectorAll(".centered");
// const galleryImg = document.querySelectorAll('.gallery-img')


// for (imageIndex = 0; imageIndex < galleryImg.length;  imageIndex++) {
//     debugger;
//     galleryImg[imageIndex].addEventListener("mouseover", function hello() {
//         debugger;
//         alert(imageIndex)
//     });

// }

// let imgIndex;
// let CenteredTextIndex = 0;
// const  displayCenteredText  = ()  => {
//       CenteredText[imgIndex].classList.toggle('centered-display');
// }
// for (i=0; i<galleryImg.length; i++) {
//     imgIndex = i;
//     galleryImg[imgIndex].addEventListener("mouseover",displayCenteredText )
// }
// galleryImg[imgIndex].addEventListener("mouseover",displayCenteredText )



//  
// for (i=0; i<galleryImg.length;  i++) {
//  galleryImg[i].addEventListener("mouseover", alert('hello'));
//  debugger;
// }
//const sayHi = ()  => {
    //   for (j=0; j <  CenteredText.length; j++) {

//       CenteredText[j].classList.toggle('centered-display');

//   }
// }


// slider
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


// const CenteredText = document.querySelectorAll(".centered");

// const showTextOverImage = () => {
//   CenteredText.style.color = "red";
// }

// showTextOverImage();