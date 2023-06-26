$(document).ready(function () {

    // click hamburger would change shape
    $('.burger').click(function(){
        $('.burger').toggleClass('x-shape');
        $('aside.sidebar').toggleClass('in');
    });

    $('.sidebar .menu-aside li').click(function(){
        $('.burger').removeClass('x-shape');
        $('aside.sidebar').removeClass('in');
    });

    //Scroll to designated position
    $('.navBar .menu ul a, .sidebar .menu-aside ul a, #scroll').click(function(){
        $('html,body').animate({
        'scrollTop':$(this.hash).offset().top},800);
        $('.burger').removeClass('x-shape');
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll').stop().fadeOut("fast");
        } else {
            $('.scroll').fadeIn("fast");
        }
    });

    $((function() {
        console.log('test')
        $.each(Array(6), (function(e) {
        console.log('test', e)
            var t = $("#card" + ++e);
        console.log('test', t)
            $(t).click((function() {
                $("#card" + e).toggleClass('active');
            }
            ))
        }
        ))
    }
    ));

});