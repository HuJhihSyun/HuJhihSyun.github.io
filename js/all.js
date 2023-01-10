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

    var bannerAn = gsap.timeline();
    bannerAn.from(".titleText", { yPercent: 100, duration: 1, delay: 2 })
        .to(".titleText", { color: '#dbc5a4', duration: 1})
        .fromTo(".bannerPic", { backgroundPosition: '50% 20%'}, { backgroundPosition: '50% 50%', duration: 10 }, 'step2' )
        .staggerFrom(".infoList", 0.5, { opacity: 0, yPercent: 50 }, 0.5, 'step2')
        .fromTo(".bannerPic", { filter: 'grayscale(100%)'}, {filter: 'grayscale(50%)', duration: 5}, 'step2' )
        .fromTo(".decorationText", { xPercent: 80, color: '#fff' },{ xPercent: -50,color: '#dbc5a4', duration: 30 }, 'step2')

    // gsap.from(".workImg", {
    //     scrollTrigger: {
    //         trigger: "#workSec",
    //         start: "top 50%",
    //         end: "bottom 50%",
    //         markers:true,
    //         toggleActions: "restart none none none"
    //     },
    //     yPercent: 100,
    //     duration: 2,
    // });
    var contactBox = gsap.timeline({
        scrollTrigger: {
            trigger: "#article",
            start: "50% 30%",
            end: "bottom 30%",
            toggleActions: "restart none none none"
        }});
    contactBox.from("#instagram", { opacity:0, scale: 5, duration: 0.5 })
        .from("#facebook", { opacity:0, scale: 0.1, duration: 0.5 })
        .from("#behance", { opacity:0, rotate: '360deg', duration: 0.5 })
        .from("#linkedin", { opacity:0, borderRadius: '5px', duration: 0.5 })
        // .from(".fa-linkedin-in", { color: '#ffffff', duration: 0.1 })
        .from("#copyLink", { opacity:0, rotateY: '360deg', duration: 0.5 })
    

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

    // grow-story section: talking a story
    var growStory = gsap.timeline();
    growStory
        .to("#hash1", { backgroundColor: '#dbc5a4', color: '#ffffff'},'hash0')
        .from(".textArea", { yPercent: 10, opacity: 0 },'hash0')
        .from(".earth", { opacity: 0, yPercent: 50, rotate: '360deg'  })
        .to("#hash1", { backgroundColor: '#ffffff', color: '#878176' },'hash1')
        .to("#hash2", { backgroundColor: '#dbc5a4', color: '#ffffff' },'hash1')
        .to(".textContentArticle", { xPercent: -100 })
        .to(".earth", { opacity: 0, scale: 5 }, 'fade1')
        .to(".earth", { display: 'none' }, 'fade1')
        .from(".world", { opacity: 0, scale: 0 }, 'fade1')
        .to("#hash2", { backgroundColor: '#ffffff', color: '#878176' },'hash2')
        .to("#hash3", { backgroundColor: '#dbc5a4', color: '#ffffff' },'hash2')
        .from(".route", { opacity: 0, yPercent: -48 },'hash2')
        .to(".world", { opacity: 0 },'fade2')
        .to(".route", { opacity: 0 },'fade2')
        .to(".world", { display: 'none' },'fade2')
        .from(".mapApp", { opacity: 0, yPercent: 10 },'fade2')
        .from(".mapText", { opacity: 0, yPercent: 10 })
        .to(".textContentArticle", { xPercent: -200 },'hash3')
        .to(".mapApp", { xPercent: -70 },'hash3')
        .to(".mapText", { xPercent: 70 },'hash3')
        .to("#hash3", { backgroundColor: '#ffffff', color: '#878176' },'hash3')

    ScrollTrigger.create({
        animation: growStory,
        trigger: ".grow-story",
        start: "top top",
        end: "+=5000",
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