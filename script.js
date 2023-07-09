let flag=0;
function controller(x){
    flag=flag+x; 
    slideshow(flag)
}
slideshow(flag)
function slideshow(num){
    let slides=document.getElementsByClassName('slide');
    if(num==slides.length){
        flag=0;
        num=0;

    }
    if (num<0){
        flag=6;
        num=6;
    }
    for (let y of slides){
       y.style.display="none";
    }
    slides[num].style.display="block";
       //slides[num].style.display = "block";: After hiding all the slides, this line shows the slide at the specified index (num) by setting its display property to "block". Setting it to "block" ensures that the slide will be displayed as a block-level element, taking up space in the layout.
    
console.log("working")
}

