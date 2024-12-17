let slideIndex = [1, 1, 1];
let slideID = ["shader-slides", "particle-slides", "mocap-slides"]; // class tag for each slideshow so it can be gotten later
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function incrSlide(slideNo, slideShowID) {
    showSlides(slideIndex[slideShowID] += slideNo, slideShowID);
}

function showSlides(slideNo, slideShowID) {
    var i;
    let slides = document.getElementsByClassName(slideID[slideShowID]);
    
    if (slideNo > slides.length) {slideIndex[slideShowID] = 1}
    if (slideNo < 1) {slideIndex[slideShowID] = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[slideShowID] - 1].style.display = "block";
}