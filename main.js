const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#main");

window.addEventListener("load", () => {
    setTimeout(() => {
        loaderContainer.classList.add("hidden");
        pageContent.classList.add("visible");
    }, 1600);
});



/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};



const lenis = new Lenis({
  duration: 1.75,
  easing: (t) => Math.min(1, 1.1 - Math.pow(2, -8 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
requestAnimationFrame(raf);



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
var tl = gsap.timeline();

tl.to('#page-1', {
  scrollTrigger: {
    trigger: "navheader",
    scrub: true,
    start: "top 20%",
    end: "top 10%"
  },
  opacity: 0,
  y: -100,
  duration: 1,
});

tl.from('#cool-ball', {
  scrollTrigger: {
    trigger: "#page-3",
    start: "top 50%",
    end: "top 10%",
    scrub: true,
  },
  y: 250,
  duration: 0.5,
});

ScrollTrigger.refresh();

const duration_scroll = 2.0;

var contact_btn = document.querySelectorAll(".contact-btn");
contact_btn.forEach(button => button.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: "#page-3", ease: "power3.out" });
}));

// Scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn.addEventListener("click", () => {
  gsap.to(window, { duration: duration_scroll, scrollTo: 0, ease: "power3.inOut" });
});



// Set time on footer
const siteTime = document.getElementById("currTime");
function updateClock() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    siteTime.innerHTML = strTime + " GMT+5:30";
};
 
setInterval(updateClock, 1);