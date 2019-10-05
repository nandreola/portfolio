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

    // Texh test for audio button
    $("#player").on("play", function () {
        $(".listenTxt").addClass("hidden");
        document.getElementById("player").style.clipPath="none";
    });

    $("#player").on("pause", function () {
        $(".listenTxt").removeClass("hidden");
        document.getElementById("player").style.clipPath = "circle(18px at 9% 50%)";
    });

});