let slideIndex = 1;
let slideTimer;

document.addEventListener("DOMContentLoaded", function slideShow (){
    var i;
    let review = document.querySelectorAll(".review");
    let comment = document.querySelectorAll(".review__comment");
    let name = document.querySelectorAll(".review__name");
    let occupation = document.querySelectorAll(".review__occupation");
    let avatar = document.querySelectorAll(".review__avatar");
    let dot = document.querySelectorAll(".dot");
    let dotBorderOn = "1px solid var(--primary-color)";

    for(i=0; i < review.length; i++){                       // get the values from JSON to the DOM
        name[i].innerHTML = reviews[i].name;
        comment[i].innerHTML = reviews[i].comment;
        occupation[i].innerHTML = reviews[i].occupation;
        avatar[i].src=reviews[i].avatar;   
    }
    
    // display only the first review and the border of the first dot
    for(i=0; i< review.length; i++){                        
        review[i].style.display = "none";
        dot[i].style.border = "none";
    }
 
    review[0].style.display = "block";                      
    dot[0].style.border = dotBorderOn;   
                         
    
    autoSlideShow();
    
})

const autoSlideShow = function () {    
    let review = document.querySelectorAll(".review");
    let dot = document.querySelectorAll(".dot");
    let dotBorderOn = "1px solid var(--primary-color)";

    slideTimer = setTimeout(function () {
        if(slideIndex != reviews.length){
            review[slideIndex].style.display = "block";
            review[slideIndex-1].style.display = "none";

            dot[slideIndex].style.border = dotBorderOn;
            dot[slideIndex-1].style.border = "none";

            slideIndex++;
            autoSlideShow();
        }
        else {
            review[slideIndex-1].style.display = "none";
            dot[slideIndex-1].style.border = "none";

            slideIndex = 0; 
            review[slideIndex].style.display = "block";
            dot[slideIndex].style.border = dotBorderOn;
            
            slideIndex++;
            autoSlideShow();
        }
            
    },6500);
}


const selectReview = function (el){
    let review = document.querySelectorAll(".review"); 
    let dot = document.querySelectorAll(".dot");
    let dotBorderOn = "1px solid var(--primary-color)";

    for(i=0; i< review.length; i++){
        review[i].style.display = "none";
        dot[i].style.border = "none";
    }

    if(el-1 != reviews.length){
        review[el-1].style.display = "block";
        dot[el-1].style.border = dotBorderOn;
    }
    else {
        el=1;
        review[0].style.display = "block";
        dot[0].style.border = dotBorderOn;
    }
    
    slideIndex = el;
    clearTimeout(slideTimer); //reset the slideshow's timer
    autoSlideShow(); 
}

const plusSlide = function() {
    clearTimeout(slideTimer);
    selectReview(slideIndex+1);
}

const minusSlide = function() {
    
    if(slideIndex != 1){
        selectReview(slideIndex-1);
    }
    else {
        selectReview(reviews.length);
    }
}





const reviews = [     
    {
        name: "Brendon Summers",
        avatar: "/assets/images/thispersondoesnotexist5.jfif",
        occupation: "Chief Executive Officer of EntertainmentForest",
        comment: '"Appify at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate."'
    },
    {
        name: "Julia Carroll",
        avatar: "/assets/images/thispersondoesnotexist3.jfif",
        occupation: "Web Developer",
        comment: '"Top sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut fugit"'
    },
    {
        name: "Aiysha Roberts",
        avatar: "/assets/images/thispersondoesnotexist1.jfif",
        occupation: "Manager at OtkinGroup",
        comment: '"Appify ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis exercitation."'
    },
];