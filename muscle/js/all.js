$('#tabContent2,#tabContent3').hide();
$('#advertise1,#advertise2').hide();

$(document).ready(function () {

    // game section
    $('#videoBox1').click(function () {
        $(".gameBox").append('<iframe id="gameFrame" src="https://www.youtube.com/embed/_qOC83aIOrc" title="巴斯夫安全照護 - P.R.O.P.E.R. USE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        $(".modal").css("display", "flex").fadeIn();
    });
    $('#videoBox2').click(function () {
        $(".gameBox").append('<iframe id="gameFrame" src="https://www.youtube.com/embed/J2hBzqm8O60" title="巴斯夫安全照護 - P.R.O.P.E.R. USE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        $(".modal").css("display", "flex").fadeIn();
    });
    $('#videoBox3').click(function () {
        $(".gameBox").append('<iframe id="gameFrame" src="https://www.youtube.com/embed/jf6EWQ99yWg" title="巴斯夫安全照護 - P.R.O.P.E.R. USE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        $(".modal").css("display", "flex").fadeIn();
    });
    $('#videoBox4').click(function () {
        $(".gameBox").append('<iframe id="gameFrame" src="https://www.youtube.com/embed/ouBT29FYFHQ" title="巴斯夫安全照護 - P.R.O.P.E.R. USE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        $(".modal").css("display", "flex").fadeIn();
    });
    $('#closeBtn').click(function () {
        $(".modal").fadeOut();
        $("#gameFrame").remove();
    });

    // advertise section
    $('#advertiseBtn1').click(function () {
        $("#advertise1").css("display", "flex").fadeIn();
    });
    $('#advertiseBtn2').click(function () {
        $("#advertise2").css("display", "flex").fadeIn();
    });
    $('.adCloseBtn').click(function () {
        $("#advertise1,#advertise2").fadeOut();
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

    $('#tabContent2,#tabContent3').hide();
    $('#tabBtn1').click(function () {
        $('.tabBtn').removeClass('active');
        $('#tabBtn1').addClass('active');
        $('.tabContent').hide();
        $('#tabContent1').fadeIn();
    });
    $('#tabBtn2').click(function () {
        $('.tabBtn').removeClass('active');
        $('#tabBtn2').addClass('active');
        $('.tabContent').hide();
        $('#tabContent2').fadeIn();
    });
    $('#tabBtn3').click(function () {
        $('.tabBtn').removeClass('active');
        $('#tabBtn3').addClass('active');
        $('.tabContent').hide();
        $('#tabContent3').fadeIn();
    });

});