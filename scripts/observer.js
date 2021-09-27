const threshold = window.innerWidth < 600 ? 0.5 : 0.7;

const intersectionCallBack = ([entries]) => { 
    if(entries.isIntersecting){
        entries.target.style.animation = "scrollfade 1s ease-out";
        entries.target.style.opacity = 1;
        observer.unobserve(entries.target);
    }
}

const observer = new IntersectionObserver( intersectionCallBack, 
{
    threshold
});

export default observer;
