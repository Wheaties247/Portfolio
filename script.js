window.onload = () =>{

console.log('CONECTED')

const aboutButton = document.querySelector("#about_title"),
skillButton = document.querySelector("#skill_title"),
projectButton = document.querySelector("#project_title"),
footerButton = document.querySelector("footer"),
aboutModal = document.querySelector("#about_info"),
skillModal = document.querySelector("#skill_info"),
projectModal = document.querySelector("#project_info"),
contactModal = document.querySelector("#contact_info"),
modals = document.querySelectorAll(".modal_container"),
body = document.querySelector("body"),
leftArrow = document.querySelector("#left_arrow"),
rightArrow = document.querySelector("#right_arrow"),
projectLeftArrow = document.querySelector("#project_left_arrow"),
projectRightArrow = document.querySelector("#project_right_arrow"),
closeButton = document.querySelectorAll(".close_btn"),
slides = document.querySelectorAll(".skills_tab"),
projectSlides = document.querySelectorAll(".project_tab");

let slideIndex = 0,
projectSlideIndex = 0;
 

const openAboutModal = () =>{
	aboutModal.style.display = "block";
	body.style.overflow ="hidden";
} ;


const closeModal = (e)=>	modals.forEach(node=>{
	e.stopPropagation();
	node.style.display = "none";
	body.style.overflow = "auto";
}) ;
	// closes all modals if you click off on one or the X icon
const openSkillModal =()=>{
	showDivs(slideIndex);
	skillModal.style.display = "block"; 
	body.style.overflow ="hidden";
} 

const plusDivs = (n) => {
		showDivs(slideIndex+=n);
	}
const showDivs = (n) => {

	if (n >= slides.length) {
		console.log("here on line 46")
		slideIndex = 0;
	}
	if (n < 0){
		slideIndex = (slides.length - 1);
		console.log("here on line 51")

	}
	for(let i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	let currentSlide = slides[slideIndex];
	currentSlide.style.display = "block";
	}

const openProjectModal = () => {
	showProjectDivs(projectSlideIndex);
	projectModal.style.display = "block";
	body.style.overflow ="hidden";
}
// project slideshow
const plusProjectDivs = (n) => {
		showProjectDivs(projectSlideIndex+=n);
	}
const showProjectDivs = (n) => {

	if (n >= projectSlides.length) {
		console.log("here on line 46")
		projectSlideIndex = 0;
	}
	if (n < 0){
		projectSlideIndex = (projectSlides.length - 1);
		console.log("here on line 51")

	}
	for(let i = 0; i < projectSlides.length; i++){
		projectSlides[i].style.display = "none";
	}
	let currentSlide = projectSlides[projectSlideIndex];
	currentSlide.style.display = "block";
	}
const openFooterModal = () => {
	contactModal.style.display = "block";
	body.style.overflow = "hidden";
};
//Event Listenters
	closeButton.forEach(node=> node.addEventListener('click', closeModal));
	footerButton.addEventListener('click', openFooterModal);
	aboutButton.addEventListener('click', openAboutModal);
	skillButton.addEventListener('click', openSkillModal);
	projectButton.addEventListener('click', openProjectModal);
	leftArrow.addEventListener('click', ()=> plusDivs(-1));
	rightArrow.addEventListener('click', ()=> plusDivs(+1));
	projectLeftArrow.addEventListener('click', ()=> plusProjectDivs(-1));
	projectRightArrow.addEventListener('click', ()=> plusProjectDivs(+1));
};
