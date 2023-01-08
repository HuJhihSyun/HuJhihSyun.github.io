$(document).ready(function () {

    //header cover: web start motion
    // var headerCover = gsap.timeline();
    // headerCover.to(".progressValue", 1, { width: "100%" })
    //     .to(".headerCover", 0.5, { opacity: 0 })
    //     .to(".headerCover", 0.5, { height: 0 })

    // progressBar
    var progress = gsap.timeline();
    progress.from(".progressValue", {width:0})
    
    ScrollTrigger.create({
        animation: progress,
        trigger: ".first-article",
        endTrigger:".footer",
        start: "top top",
        end:"top bottom",
        scrub: 1,
    });

    // article section: crab data
    // TweenMax.staggerTo(".basfLogoEffect", 0.5, { opacity: 1, yPercent: 10, }, 0.1);

    // header section: click popBtn and exclude pop up
    // gsap.from(".popBtn", 1, { yPercent: -100, width: "50vw", height: "50vw", delay: 1 });

    $('.paddy-carousel>.owl-nav>.owl-next,.paddy-carousel>.owl-nav>.owl-prev').click(function(){
        var slideTag = location.href.split('#step')[1];
        console.log(slideTag);
        $('.boxMonth').removeClass('active');
        var target = $('#stepEf' + slideTag);
        target.find('.boxMonth').addClass('active');
    });

    $(function () {
        $.each(Array(5), function (i) {
            var step = $("#stepEf" + (++i));
            $(step).click(function () {
                $('.boxMonth').removeClass('active');
                var target = $('#stepEf' + i);
                target.find('.boxMonth').addClass('active');
            });
        });
    });

    // article section: crab data
    // var crab = TweenMax.staggerFrom(".crabData", 0.5, {opacity:0, yPercent:20,}, 0.1);
    // ScrollTrigger.create({
    //     animation: crab,
    //     trigger: ".article",
    //     start: "top 50%",
    //     end:"bottom 50%",
    //     toggleActions: "restart none restart none"
    // });

    gsap.from(".riceGroupImg", {
        scrollTrigger: {
            trigger: "#riceFade",
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "restart none none none"
        },
        yPercent: 100,
        duration: 2,
    });

    // article section: 500 ton every year
    var num = document.getElementById("riceSum");
    var obj = { value: 0 };

    TweenLite.to(obj, 1, {
        value: 145, ease: Power0.easeIn,
        roundProps: {
            value: 1
        },
        scrollTrigger: {
            trigger: "#riceFade",
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "restart none none none"
        },
        onUpdate: function () {
            num.innerHTML = obj.value;
        }
    })

    // bad-weather section: talking a story 
    // var storyTop = gsap.timeline();
    // storyTop.to(".bad-weather", { backgroundColor: '#7a6d7c' })
    //     .from(".cloud-day-1", { opacity: 0 })
    //     .from(".cloud-day-2", { opacity: 0 })
    //     .from(".sun", { opacity: 0, yPercent: 100 })
    //     .from("#storyContent1", { opacity: 0, yPercent: 100 })
    //     .from(".flash1", { opacity: 0, xPercent: -10 })
    //     .from(".flash2", { opacity: 0, xPercent: 10 })
    //     .to(".cloud-day-1", { opacity: 0 })
    //     .to(".cloud-day-2", { opacity: 0 })
    //     .to(".sun", { opacity: 0, yPercent: 100 })
    //     .to("#storyContent1", { opacity: 0, yPercent: 100 })
    //     .to(".flash1", { opacity: 0, xPercent: -10 })
    //     .to(".flash2", { opacity: 0, xPercent: 10 })

    // ScrollTrigger.create({
    //     animation: storyTop,
    //     trigger: ".bad-weather",
    //     start: "top top",
    //     end: "+=2000",
    //     scrub: 2,
    //     pin: true,
    //     anticipatePin: 1
    // });

    // grow-story section: talking a story
    var growStory = gsap.timeline();
    growStory
        .from(".dialogue", { xPercent: -10, opacity: 0 })
        .from(".growCloud1", { opacity: 0, xPercent: -100 })
        .from(".growCloud2", { opacity: 0, xPercent: 100 })
        .to(".dialogue", { xPercent: 10, opacity: 0 })
        .from(".light", { opacity: 0, height: 0 })
        .to(".progressContent", { width: '8%' },'hashGo0')
        .to("#hash1", { backgroundColor: '#1b6d5d', color: '#ffffff'},'hashGo0')
        .from(".textArea", { yPercent: 10, opacity: 0 },'hashGo0')
        .from(".calendar", { yPercent: 100, opacity: 0 },'hashGo0')
        .from(".ground", { yPercent: 100 })
        .from(".groundMud", { opacity: 0, yPercent: 10 })
        .from(".grassStep1", { opacity: 0 })
        .to(".ground", { yPercent: 100 },'progress0')
        .to(".groundMud", { opacity: 0, yPercent: 10 })
        .from(".wave", { yPercent: 100 })
        .to(".textContentArticle", { xPercent: -100 },'grassStep0')
        .to(".calendar1", { opacity: 0 },'grassStep0')
        .from(".leftFlower", { opacity: 0, yPercent: 10 })
        .from(".rightFlower", { opacity: 0, yPercent: 10 })
        .from(".seedBox", { opacity: 0, yPercent: -500})
        .from(".butterfly", { opacity: 0 })
        .from(".butterfly2", { opacity: 0 })
        .to("#hash1", { backgroundColor: '#ffffff', color: '#1b6d5d' },'hashGo1')
        .to(".progressContent", { width: '38%' },'hashGo1')
        .to("#hash2", { backgroundColor: '#1b6d5d', color: '#ffffff' },'hashGo1')
        .to(".calendar2", { opacity: 0 },'hashGo1')
        .to(".textContentArticle", { xPercent: -200 },'hashGo1')
        .to(".grassStep1", { opacity: 0, yPercent: 10 },'hashGo1')
        .to(".grassStep1", { display: 'none' },'hashGo1')
        .from(".grassStep2", { opacity: 0, yPercent: 10 },'hashGo1')
        .from(".weed1Box", { opacity: 0, yPercent: 100 })
        .from(".weed2Box", { opacity: 0, yPercent: 100 })
        .from(".weed3Box", { opacity: 0, yPercent: 100 })
        .to(".butterfly", { opacity: 0 })
        .to(".butterfly2", { opacity: 0 })
        .to("#hash2", { backgroundColor: '#ffffff', color: '#1b6d5d' },'hashGo2')
        .to(".progressContent", { width: '68%' },'hashGo2')
        .to("#hash3", { backgroundColor: '#1b6d5d', color: '#ffffff' },'hashGo2')
        .to(".grassStep2", { opacity: 0, yPercent: 10 },'hashGo2')
        .to(".grassStep2", { display: 'none' },'hashGo2')
        .from(".grassStep3", { opacity: 0, yPercent: 10 },'hashGo2')
        .to(".textContentArticle", { xPercent: -300 },'hashGo2')
        .to(".calendar3", { opacity: 0 },'hashGo2')
        .from(".bug1Box", { opacity: 0, yPercent: 100 })
        .from(".bug2Box", { opacity: 0, yPercent: 100 })
        // .from(".bug3Box", { opacity: 0, yPercent: 100 })
        .from(".bug4Box", { opacity: 0, yPercent: 100 })
        .to(".light", { opacity: 0, height: 0 },'progress1')
        .to(".growCloud1", { opacity: 0, xPercent: -100 })
        .to(".growCloud2", { opacity: 0, xPercent: 100 })
        .to(".textContentArticle", { xPercent: -400 })
        .fromTo(".seaScene", { backgroundColor: '#cafdff' },{ backgroundColor: '#7a6d7c' },'grassStep1')
        .to(".textContentArticle", { color: '#ffffff' },'grassStep1')
        .to(".grassStep3", { opacity: 0, yPercent: 10 },'grassStep2')
        .to(".grassStep3", { display: 'none' },'grassStep2')
        .from(".grassStep4", { opacity: 0, yPercent: 10 },'grassStep2')
        .from(".grove1Box", { opacity: 0, yPercent: 100 },'grassStep2')
        .to(".calendar3-1", { opacity: 0 },'grassStep2')
        .from(".rainCover", { opacity: 0 })
        .from(".cloud-date-1", { opacity: 0 })
        .from(".cloud-date-2", { opacity: 0 })
        .to("#hash3", { backgroundColor: '#ffffff', color: '#1b6d5d' },'hashGo3')
        .to(".progressContent", { width: '98%' },'hashGo3')
        .to("#hash4", { backgroundColor: '#1b6d5d', color: '#ffffff' },'hashGo3')
        .to(".calendar4", { opacity: 0 },'hashGo3')
        .to(".textContentArticle", { xPercent: -500 },'hashGo3')
        .to(".grassStep4", { opacity: 0, yPercent: 10 },'hashGo3')
        .to(".grassStep4", { display: 'none' },'hashGo3')
        .from(".grassStep5", { opacity: 0, yPercent: 10 },'hashGo3')
        .from(".grove2Box", { opacity: 0, yPercent: 10 },'hashGo3')
        .to(".rainCover", { opacity: 0 },'progress2')
        .to("#hash4", { backgroundColor: '#ffffff', color: '#1b6d5d' })
        .to(".calendar5", { yPercent: 100, opacity: 0 })

    ScrollTrigger.create({
        animation: growStory,
        trigger: ".grow-story",
        start: "top top",
        end: "+=10000",
        scrub: 1,
        pin: true,
        anticipatePin: 1
    });

    var protectEquip = gsap.timeline();
    protectEquip
    .to(".picBefore", {opacity: 0})
    .to(".picAfter", {opacity:1},'picAfter')
    // .to(".productDetailBefore", {opacity:0, yPercent:-10},'picAfter')
    // .to(".productDetailBefore", {display:'none'},'picAfter')
    // .from(".productDetailAfter", {opacity:0, yPercent:10})
    .to(".textContentWord", { xPercent: -100 },'picAfter')
    .from(".productDetail", {opacity:0, xPercent:-10},'picAfter')
    .from(".backLight", {opacity: 0},'picAfter')
    .from(".backLight", {rotationZ: 90},'picAfter')

    ScrollTrigger.create({
        animation: protectEquip,
        trigger: ".equipment",
        start: "10% 0%",
        end:"bottom 100%",
        toggleActions: "play none none none",
    });

    var storyEnd = gsap.timeline();
    storyEnd
    .to(".scene", { backgroundColor: '#c7ffff'})
    .from(".cloud-day-3", {opacity: 0})
    .from(".cloud-day-4", {opacity: 0})
    .from(".sunlight", {opacity: 0, height: 0})
    .from(".calendarer6", { opacity: 0 })
    .from(".endGrass", {opacity:0, yPercent:50})
    .from(".cheerWord", {opacity:0, yPercent:50})
    .from(".bigCloud", {opacity:0})
    .to(".cloud-day-3", {opacity: 0})
    .to(".cloud-day-4", {opacity: 0})
    .to(".calendarer6", { opacity: 0 })
    .to(".endGrass", {opacity:0, yPercent:50})
    .to(".cheerWord", {opacity:0, yPercent:50})
    .to(".bigCloud", {opacity:0})

    ScrollTrigger.create({
        animation: storyEnd,
        trigger: ".story-end",
        start: "top top",
        end:"+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1
    });

    // period nav that slide to designed location
    $('.yearBar .numberBar .number a').click(function () {
        $('html,body').animate({
            'scrollTop': $(this.hash).offset().top
        }, 1000);
    });
});