$(document).ready(function () {

    var quote = document.getElementById('quote');
    quote.innerHTML = '<span class="char">' + quote.innerHTML.split("").join('</span><span class="char">') + '</span>';
    TweenMax.staggerTo(".char", 0.5, { opacity: 1, yPercent: 50, }, 0.1);

    //header cover: web start motion
    var headerCover = gsap.timeline();
    headerCover.to(".loadingValue", 2, { width: "100%" })
        .to(".loadingBar", 0.1, { opacity: 0 })
        .to(".quote", 0.1, { opacity: 0 })
        .to(".headerCover", 0.5, { height: 0 })

    // progressBar
    var progress = gsap.timeline();
    progress.to(".progressValue", { width: '100%' })
    
    ScrollTrigger.create({
        animation: progress,
        trigger: ".banner",
        endTrigger:".footer",
        start: "top top",
        end:"top bottom",
        scrub: 1,
    });

    // header section: click popBtn and exclude pop up
    // gsap.from(".popBtn", 1, { yPercent: -100, width: "50vw", height: "50vw", delay: 1 });

    // var bannerAn = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".banner",
    //             start: "50% 30%",
    //             end: "bottom 30%",
    //             markers:true,
    //             toggleActions: "restart none none none"
    //         }});
    var bannerAn = gsap.timeline();
    bannerAn.from(".titleText", { yPercent: 100, duration: 1, delay: 2 })
        .to(".titleText", { color: '#dbc5a4', duration: 1})
        .fromTo(".bannerPic", { backgroundPosition: '50% 20%'}, { backgroundPosition: '50% 50%', duration: 10 }, 'step2' )
        .staggerFrom(".infoList", 0.5, { opacity: 0, yPercent: 50 }, 0.5, 'step2')
        .fromTo(".bannerPic", { filter: 'grayscale(100%)'}, {filter: 'grayscale(50%)', duration: 5}, 'step2' )
        .fromTo(".decorationText", { xPercent: 80, color: '#fff' },{ xPercent: -50,color: '#dbc5a4', duration: 30 }, 'step2')

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
    var num = document.getElementById("yearSum");
    var num2 = document.getElementById("workSum");
    var obj = { value: 0 };
    var obj2 = { value: 0 };

    TweenLite.to(obj, 2, {
        value: 5.4, ease: Power0.easeIn,
        roundProps: {
            value: 0.1
        },
        scrollTrigger: {
            trigger: "#yearSec",
            start: "top 50%",
            end: "bottom 50%",
            markers: false,
            toggleActions: "restart none none none"
        },
        onUpdate: function () {
            num.innerHTML = obj.value;
        }
    })
    TweenLite.to(obj2, 2, {
        value: 20, ease: Power0.easeIn,
        roundProps: {
            value: 1
        },
        scrollTrigger: {
            trigger: "#workSec",
            start: "top 50%",
            end: "bottom 50%",
            markers: false,
            toggleActions: "restart none none none"
        },
        onUpdate: function () {
            num2.innerHTML = obj2.value;
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
        .to("#hash1", { backgroundColor: '#dbc5a4', color: '#ffffff'},'hashGo0')
        .from(".textArea", { yPercent: 10, opacity: 0 },'hashGo0')
        .from(".ground", { yPercent: 100 })
        .from(".groundMud", { opacity: 0, yPercent: 10 })
        .from(".grassStep1", { opacity: 0 })
        .to(".ground", { yPercent: 100 },'progress0')
        .to(".groundMud", { opacity: 0, yPercent: 10 })
        .to(".textContentArticle", { xPercent: -100 },'grassStep0')
        .to("#hash1", { backgroundColor: '#ffffff', color: '#878176' },'hashGo1')
        .to("#hash2", { backgroundColor: '#dbc5a4', color: '#ffffff' },'hashGo1')
        .to(".textContentArticle", { xPercent: -200 },'hashGo1')
        .to(".grassStep1", { opacity: 0, yPercent: 10 },'hashGo1')
        .to(".grassStep1", { display: 'none' },'hashGo1')
        .from(".grassStep2", { opacity: 0, yPercent: 10 },'hashGo1')
        .to("#hash2", { backgroundColor: '#ffffff', color: '#878176' },'hashGo2')
        .to("#hash3", { backgroundColor: '#dbc5a4', color: '#ffffff' },'hashGo2')
        .to(".grassStep2", { opacity: 0, yPercent: 10 },'hashGo2')
        .to(".grassStep2", { display: 'none' },'hashGo2')
        .from(".grassStep3", { opacity: 0, yPercent: 10 },'hashGo2')
        .to(".textContentArticle", { xPercent: -300 },'hashGo2')
        .to(".textContentArticle", { xPercent: -400 })
        .to(".grassStep3", { opacity: 0, yPercent: 10 },'grassStep2')
        .to(".grassStep3", { display: 'none' },'grassStep2')
        .to("#hash3", { backgroundColor: '#ffffff', color: '#878176' },'hashGo3')

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
    .from(".sunlight", {opacity: 0, height: 0})
    .from(".endGrass", {opacity:0, yPercent:50})
    .from(".cheerWord", {opacity:0, yPercent:50})
    .to(".endGrass", {opacity:0, yPercent:50})
    .to(".cheerWord", {opacity:0, yPercent:50})

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