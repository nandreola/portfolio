// Toggle hamburger menu to open/close 
$(function(){
    $(".hamburger").on('click', function () {
        $(".navMobile").slideToggle("slow");
        $(".hamburger i").toggleClass("fa-bars fa-times");
    });

    // Initializer for zoom-in animation  
    AOS.init();

    // setup smooth scroll 
    const scroll = new SmoothScroll('a[href *="#"]', { speed: 600 });
});