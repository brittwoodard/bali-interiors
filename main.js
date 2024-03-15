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

// Parallax
document.addEventListener('DOMContentLoaded', function() {
    var parallaxElement = document.getElementById('parallax-background'),
        startBackgroundPosition = 100; // Starting background position as a percentage

    window.addEventListener('scroll', function() {
        // Calculate the new background position
        var scrolledHeight = window.scrollY,
            elementOffsetTop = parallaxElement.offsetTop,
            windowHeight = window.innerHeight,
            elementHeight = parallaxElement.offsetHeight;

        var scrollProgress = (scrolledHeight - elementOffsetTop + windowHeight) / (elementHeight + windowHeight);
        var newBackgroundPosition = startBackgroundPosition - (scrollProgress * 50); // Adjust the 50 to control the speed

        // Apply the new background position if the element is in view
        if (scrolledHeight + windowHeight > elementOffsetTop && scrolledHeight < elementOffsetTop + elementHeight) {
            parallaxElement.style.backgroundPositionY = newBackgroundPosition + '%';
        }
    });
});
