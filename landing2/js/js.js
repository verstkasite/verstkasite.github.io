$('.sl').slick({
    arrows: false,
    dots: true,
    
}); 

$(document).ready(function() {
    $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(767);
    });
        $(window).resize(function() {
            if($(window).width() > 767 ) {
                $('nav ul').removeAttr('style');
            }
        });

    });



          
