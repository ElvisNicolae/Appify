const testimonial = document.querySelector(".testimonials");
const about = document.querySelector(".about-us");

const intersectionCallBack = function (entries){
    
    console.log(entries[0]);
    
    if(entries[0].intersectionRatio > 0.7){
        entries[0].target.style.animation = "scrollfade 1s ease-out";
        entries[0].target.style.opacity = 1;
    }
    else{
        entries[0].target.style.animation = "none";
    }
}

const observer = new IntersectionObserver( intersectionCallBack, 
{
    threshold: 0.7
});

observer.observe(testimonial);

