const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#main");
const heroimg = document.querySelector("#heroimg");
const back = document.querySelector(".nav-link i");

window.addEventListener("load", () => {
  setTimeout(() => {
    loaderContainer.classList.add("hidden");
    pageContent.classList.add("visible");
    heroimg.style.height = "55%";
    heroimg.style.opacity = "1";
  }, 1200);
});




const lenis = new Lenis({
  lerp: 0.05,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
requestAnimationFrame(raf);



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tl = gsap.timeline();

tl.to("#main-h1 .intro h1", {
  opacity: 1,
  y: "-10%",
  stagger: 0.25,
  duration: 0.75,
  delay: 1.75,
})
  .from("#main-p", {
    y: 100,
    opacity: 0,
    duration: 1.0,
    delay: -0.75,
  });

gsap.from(".gallery-container", {
  scrollTrigger: {
    trigger: ".gallery-container",
    start: "top 90%",
    end: "top 50%",
    scrub: true,
  },
  duration: 1.0,
  opacity: 0,
  delay: -0.5,
});

gsap.to("#maintxt", {
  scrollTrigger: {
    trigger: "#hr",
    start: "top 40%",
    end: "top 0%",
    scrub: true,
  },
  duration: 1.0,
  opacity: 0,
});

// Scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn.addEventListener("click", () => {
  gsap.to(window, { duration: 3, scrollTo: 0, ease: "power3.inOut" });
});
