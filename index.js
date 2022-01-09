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