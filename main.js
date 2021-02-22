let atScroll = false;
let parallaxTitle = document.querySelectorAll('.parallax-title');

const scrollProgress = () => {
    atScroll = true
};

const raf = () => {
    if(atScroll) {
        parallaxTitle.forEach((element, index) => {
            element.style.transform = "translateX(" + window.scrollY / 10 + "%)";
        });
        atScroll = false
    }
    requestAnimationFrame(raf)
};

requestAnimationFrame(raf)
window.addEventListener("scroll", () => {
    scrollProgress();
});

var image = document.getElementsByClassName('parallax-img');
new simpleParallax(image, {
    scale: 1.5,
    orientation: 'down',
});
var image = document.getElementsByClassName('img-two');
new simpleParallax(image, {
    scale: 1.5,
    orientation: 'up',
});

