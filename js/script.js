

/*OWL CAROUSEL PROPERTIES */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    loop:true,
    responsive:{
        0:{
            items:1,
            dots:true
        },
        600:{
            items:3,
            dots:true
        },
        1000:{
            items:4,
            dots:false
        }
    }
})