const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclarations des variables et constantes
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p")

let currentSlide = 0;
const lastSlide = slides.length - 1;

const selectedDotClass = 'dot_selected';



slides.forEach(slide => {
 const newDot =	document.createElement("div");
 newDot.classList.add("dot");
 document.querySelector(".dots").appendChild(newDot);
 document.querySelectorAll(".dot")[currentSlide].classList.add(selectedDotClass);
});


// Fonction permettant de changer de slide après évènement
function updateSlide () {
	const slide = slides[currentSlide];
	image.src = "./assets/images/slideshow/" + slide.image
	tagLine.innerHTML = slide.tagLine;
	document.querySelector(".dot_selected").classList.remove(selectedDotClass);
	document.querySelectorAll(".dot")[currentSlide].classList.add(selectedDotClass);

}


// Evènements au clic sur les flèches gauche et droite
arrowLeft.addEventListener("click", function() {
	if (currentSlide === 0) {
		currentSlide = lastSlide;
	  } else {
		currentSlide = currentSlide - 1;
	  }

	updateSlide();

  console.log("Clic sur la flèche gauche");
});


arrowRight.addEventListener("click", function() {
	if (currentSlide === lastSlide) {
		currentSlide = 0;
	  } else {
		currentSlide = currentSlide + 1;
	  }

	  updateSlide();

  console.log("Clic sur la flèche droite");
});