// Toggle hamburger menu to open/close 
$(function(){
    $('.hamburger').on('click', function () {
        $('.navMobile').slideToggle('slow');
        $('.hamburger i').toggleClass('fa-bars fa-times');
    });

    // Initializer for zoom-in animation  
    AOS.init();

    // setup smooth scroll 
    const scroll = new SmoothScroll('a[href *="#"]', { speed: 600 });

    // Show scrow to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.arrowUp').fadeIn();
        } else {
            $('.arrowUp').fadeOut();
        }
    });
});