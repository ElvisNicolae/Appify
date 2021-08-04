import observer from "./observer.js";

const testimonial = document.querySelector(".testimonials");
const aboutUs = document.querySelector(".about-us");
const projects = document.querySelector(".projects");

observer.observe(testimonial);
observer.observe(aboutUs);
observer.observe(projects);