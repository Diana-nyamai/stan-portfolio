$(document).ready(function(){
    $(".text h1, bg-text h2, .text h5, .text h6").lettering();

    var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 2000,
    });

    tl
    .add({
        targets: 'h1 span',
        opacity: [0,1],
        translateX: [100, 0,],
        delay: anime.stagger(200)
    })
    .add({
        targets: '.text h5',
        opacity: [0,1],
        translateX: [-50, 0,]
    }, '-=500')
    .add({
        targets: '.text h6',
        opacity: [0,1],
        delay: anime.stagger(200)
    }, '-=1000')
    .add({
        targets: '.btn',
        opacity: [0,1],
        delay: anime.stagger(200)
    }, '-=1000')
});

// back to top button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

