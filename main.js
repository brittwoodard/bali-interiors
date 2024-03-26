// Slick
$('.slider-container').slick({
	autoplay: true, 
	autoplaySpeed: 2000, 
	speed: 500, 
	arrows: false, 
	accessibility: true, 
	dots: false, 
	fade: true, 
	infinite: true, 
	pauseOnHover: false, 
});

$('.episodes-container').slick({
	autoplay: false, 
	speed: 500, 
	arrows: true, 
	accessibility: true, 
	dots: false, 
	fade: false, 
	infinite: false, 
	pauseOnHover: false, 
});

// Parallax
window.addEventListener('scroll', function() {
    var offset = window.pageYOffset / 2;
    // Select the element by ID
    var elem = document.getElementById('parallax-background');
    if (elem) {
        elem.style.backgroundPositionY = offset + "px";
    }
});