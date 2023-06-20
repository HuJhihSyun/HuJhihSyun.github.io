$(document).ready(function () {

    //vertical background
    for (i=0;i<40;i++){
        $('#vBoard').append(`<li class="verticalLine verticalLine${i+1}">`);
    }

    //header cover: web start motion
    const headerCover = gsap.timeline();
    headerCover.to(".progressValue", 1, { width: "100%" })
        .to(".headerCover", 0.5, { opacity: 0 })
        .to(".headerCover", 0.5, { height: 0 })

    // bannerArea
    var bannerArea = gsap.timeline();
    bannerArea
        .from("#font1", 0.2, { rotationZ: 20, delay:1 })
        .from("#font2", 0.2, { xPercent: 20 })
        .from("#font3", 0.2, { scale: 0.7 }, 'step1')
        .from("#font4", 0.2, { rotationZ: 90 })
        .from("#font5", 0.2, { yPercent: 20 })
        .from("#titleWarnBar", 0.2, { rotationZ: 5 })
        .staggerFrom(".staggerPaste", 0.5, {opacity:0, scale: 2,}, 0.3, 'step1')
        .from("#people1", 0.5, { opacity:0, xPercent: -50 }, 'step2')
        .from("#people2", 0.5, { opacity:0, xPercent: 50 }, 'step2')
        
    ScrollTrigger.create({
        animation: bannerArea,
        trigger: ".bannerArea",
        toggleActions: "play none none none",
    });

    // roleArea: mainRole animation
    const forwardNote = gsap.timeline();
    forwardNote
    .from(".envelop-photo1", {opacity:0, scale:2}, 'test')
    .from(".envelop-photo2", {opacity: 0, scale:2})
    .from(".forwardText", 2, {opacity:0, yPercent: -50}, 'test')
    
    ScrollTrigger.create({
        animation: forwardNote,
        trigger: ".forewordArea",
        start: "top 30%",
        end:"bottom 60%",
        toggleActions: "restart none restart none",
    });

    // growArea
    const growArea = TweenMax.staggerFrom(".growBar", 0.5, {opacity:0, yPercent:10,}, 0.5);
    ScrollTrigger.create({
        animation: growArea,
        trigger: ".growArea",
        start: "top 50%",
        end:"bottom 50%",
        toggleActions: "restart none restart none"
    });

    // introBar
    for(let i=1;i<=4;i++) {
        const introBar = gsap.timeline();
        introBar
        .from(`#introPic${i}`, 0.5, {opacity:0, scale: 2}, 'intro')
        .from(`#scope${i}`, 1, {opacity:0, x: i % 2 === 0 ? -200 : 200 }, 'intro')
        .from(`#introText${i}`, 1, {opacity:0, yPercent: 10})
        
        ScrollTrigger.create({
            animation: introBar,
            trigger: `#introBar${i}`,
            start: "top 70%",
            end:"bottom 30%",
            toggleActions: "restart none restart none"
        });
    }

    // advantageArea
    const cardGame = gsap.timeline();
    cardGame
    .from("#cardA", {xPercent:50,rotationZ: 5},'cardMove')
    .from("#cardB", {xPercent:-50,rotationZ: -5},'cardMove')
    
    ScrollTrigger.create({
        animation: cardGame,
        trigger: ".cardArea",
        start: "top 70%",
        end:"bottom 100%",
        toggleActions: "restart none restart none"
    });

    // tableArea footprint
    const tableFootprint = TweenMax.staggerFrom(".foot", 0.2, {opacity:0}, 0.5);
    ScrollTrigger.create({
        animation: tableFootprint,
        trigger: "#tableArea",
        start: "top bottom",
        end:"bottom bottom",
        toggleActions: "play none none none"
    });

    // tableArea
    const tableColumn = TweenMax.staggerFrom(".listArea", 0.5, {opacity:0, yPercent: 10}, 0.5);
    ScrollTrigger.create({
        animation: tableColumn,
        trigger: ".tableArea",
        start: "top bottom",
        end:"bottom 50%",
        toggleActions: "restart none restart none"
    });

    // qaArea footprint
    const qaFootprint = TweenMax.staggerFrom(".foot2", 0.2, {opacity:0}, 0.5);
    ScrollTrigger.create({
        animation: qaFootprint,
        trigger: ".tableArea",
        start: "top 50%",
        end:"bottom 50%",
        toggleActions: "play none none none"
    });

    // fileArea: liveDay & genNum
    var num2 = document.getElementById("genNum");
    var obj2 = { value: 0 };

    TweenLite.to(obj2, 1.5, {
        value: 600, ease: Power0.easeIn,
        roundProps: {
            value: 10
        },
        scrollTrigger: {
            trigger: ".fileArea",
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "play none none none",
        },
        onUpdate: function () {
            num2.innerHTML = obj2.value;
        }
    })

    var protectEquip = gsap.timeline();
    protectEquip
    .from(".productDetail", {opacity:0, xPercent:-10})
    .to(".picAfter", {opacity:1,yPercent:-10})
    .from(".backLight", {opacity: 0})
    .from(".backLight", {rotationZ: 90})
    
    ScrollTrigger.create({
        animation: protectEquip,
        trigger: ".productArea",
        start: "top 50%",
        end:"bottom 100%",
        toggleActions: "play none none none"
    });

    gsap.from("#movePuzzle", {
        scrollTrigger: {
            trigger: ".advantageArea",
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "play none none none"
        },
        xPercent: 50,
        yPercent: -50,
        rotationZ: -20
    });

});