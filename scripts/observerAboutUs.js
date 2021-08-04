import observer from "./observer.js";
const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");

observer.observe(leftSection);
observer.observe(rightSection);
