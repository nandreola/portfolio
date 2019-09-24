// setup smooth scroll 
const scroll = new SmoothScroll( 'a[href *="#"]' , {speed: 600} );

// Toggle hamburger menu to open/close 
$(function(){
    $(".hamburger").click(function () {
        $(".navMobile").slideToggle("slow");
        $(".hamburger i").toggleClass("fa-bars fa-times");
    });
});