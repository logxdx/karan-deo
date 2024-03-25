const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#main");

window.addEventListener("load", () => {
    setTimeout(() => {
        loaderContainer.classList.add("hidden");
        pageContent.classList.add("visible");
    }, 1000);
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



/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};



const lenis = new Lenis({
  duration: 1.28,
  easing: (t) => Math.min(1, 1.01 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
requestAnimationFrame(raf);



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);  

var tl = gsap.timeline();

tl.to('body', {
  scrollTrigger: {
    trigger: "navheader",
    scrub: true,
    start: "top 60%",
    end: "top 20%",
  },
  duration: 1,
  backgroundColor: '#010000',
});

tl.to('.moving-container', {
  scrollTrigger: {
    trigger: "navheader",
    scrub: true,
    start: "top 60%",
    end: "top 20%"
  },
  duration: 1,
  color: '#000',
});

tl.from('#page-2', {
  scrollTrigger: {
    trigger: "navheader",
    scrub: true,
    start: "top 95%",
    end: "top 50%",
  },
  opacity: 0.25
});

tl.to('#page-2', {
  scrollTrigger: {
    trigger: "#page-2",
    scrub: true,
    start: "bottom 60%",
    end: "bottom 10%"
  },
  backgroundColor: '#eeefef'
});

tl.from('#page-3', {
  scrollTrigger: {
    trigger: "#page-3",
    scrub: true,
    start: "top 60%",
    end: "top 10%"
  },
  duration: 1,
  opacity: 0,
  backgroundColor: '#010000',
});

tl.from('#cool-ball', {
  scrollTrigger: {
    trigger: "#page-3",
    scrub: true,
    start: "top 60%",
    end: "top 40%"
  },
  y: 100,
  duration: 1,
  delay: 2,
  opacity: 0
});

ScrollTrigger.refresh();


var contact_btn = document.querySelectorAll(".contact-btn");
contact_btn.forEach(button => button.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: "#page-3", ease: "power2" });
}));

// Scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2" });
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