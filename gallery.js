const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#main");
const heroimg = document.querySelector("#heroimg");

window.addEventListener("load", () => {
    setTimeout(() => {
        loaderContainer.classList.add("hidden");
        pageContent.classList.add("visible");
        heroimg.style.height = "60%";
        heroimg.style.opacity = "1";
    }, 1000);
});



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tl = gsap.timeline();

tl.from("#main-h1", {
  duration: 1.25,
  delay: 1.25,
  opacity: 0,
})
.from("#main-p", {
  duration: 1.0,
  opacity: 0,
  delay: -0.5,
});

gsap.from(".gallery-container", {
  scrollTrigger: {
    trigger: ".gallery-container",
    start: "top 95%",
    end: "top 60%",
    scrub: true,
  },
  duration: 1.0,
  opacity: 0,
  delay: -0.5,
});

gsap.to("#maintxt", {
  scrollTrigger: {
    trigger: "#hr",
    start: "top 50%",
    end: "top 5%",
    scrub: true,
  },
  duration: 1.0,
  opacity: 0,
});

// Scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2" });
});

