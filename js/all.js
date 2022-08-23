
// document.querySelector('#carousel-generic').style.height = window.innerHeight+'px';
  $('.worksContent').hide();

$(document).ready(function(){

    //fly background
    for (i=0;i<5;i++){
        $('#vBoard').append('<li class="vline">');
    }
    TweenMax.staggerTo(".vline", 0.5, {opacity:1, height:"100vh"}, 0.1);

    // date counter
    var now = new Date().getTime();
    var step1 = new Date("Oct 13, 2022 09:00:00").getTime();
    var distance1 = step1 - now;

    if(distance1 > 0) {
        setInterval(() => {
            distance1 -= 1000;
            $("#day").text(Math.floor(distance1 / (1000 * 60 * 60 * 24)));
            $("#hour").text(Math.floor(Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
            $("#minute").text(Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60)));
            $("#second").text(Math.floor((distance1 % (1000 * 60)) / 1000));
        }, 1000);
    } else {
        $("#day").text("0");
        $("#hour").text("0");
        $("#minute").text("0");
        $("#second").text("0");
    }

    //openning
    $('.timeBar .line').animate({'width':'100%'},1000);
        var num = 0;
        var count = setInterval(function(){
            num = num + 1;
            $('.num').text(num);
            if (num>=100) {
                clearInterval(count);
                $('.openning').fadeOut();}
        }, 10);

    //Scroll to designated position
    $('.tagMenu .pic a').click(function(){
    	$('html,body').animate({
    		'scrollTop':$(this.hash).offset().top},500);
    });

    // click hamburger would change shape
    $('.burger').click(function(){
        $('.burger').toggleClass('x-shape');
        $('aside.sidebar').toggleClass('in');
    });

    $('.sidebar .menu-aside li').click(function(){
        $('.bueger').removeClass('x-shape');
        $('aside.sidebar').removeClass('in');
    });

    // sectionNews
    $('.tagSelect .btn[data-new="0"]').click(function(){
            $('.newsBox ul li').hide(200);
            $('.newsBox ul li').show(200);
        });
        $('.tagSelect .btn[data-new="1"]').click(function(){
            $('.newsBox ul li').hide(200);
            $('.newsBox ul li[data-new="1"]').show(200);
        });
        $('.tagSelect .btn[data-new="2"]').click(function(){
            $('.newsBox ul li').hide(200);
            $('.newsBox ul li[data-new="2"]').show(200);
        });
        $('.tagSelect .btn[data-new="3"]').click(function(){
            $('.newsBox ul li').hide(200);
            $('.newsBox ul li[data-new="3"]').show(200);
        });

});