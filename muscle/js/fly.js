$(document).ready(function () {

    //vertical background
    for (i=0;i<40;i++){
        $('#vBoard').append(`<li class="verticalLine verticalLine${i+1}">`);
    }

    for (i=0;i<50;i++){
        $('.customCover').append(`<div class="customDot customDot${i+1}">`);
        $('.importantCover').append(`<div class="importantDot importantDot${i+1}">`);
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
        .staggerFrom(".staggerPaste", 0.5, {opacity:0, scale: 2}, 0.3, 'step1')
        .from(".chart", 0.2, { opacity:0, xPercent: 50 })
        .from("#people1", 0.5, { opacity:0, xPercent: -50 }, 'step2')
        .from("#people2", 0.5, { opacity:0, xPercent: 50 }, 'step2')
        .from("#bannerSubtitle", 0.2, { rotationZ: -5 }, 'step3')
        .from(".subtitleQuestion", 0.5, { opacity:0, scale: 2 }, 'step3')
        .staggerFrom(".bannerFoot", 0.5, {opacity:0}, 0.3, 'step1')
        
    ScrollTrigger.create({
        animation: bannerArea,
        trigger: ".bannerArea",
        toggleActions: "play none none none",
    });

    // forewordArea
    const quote = document.querySelectorAll('.quote');
    console.log('quote', quote);
    quote.forEach(item => {item.innerHTML = `<span class="char">${item.innerHTML.split("").join('</span><span class="char">')}</span>`})
    const forwardNote = gsap.timeline();
    forwardNote
    .from(".envelop-photo1", {opacity:0, scale:2}, 'test')
    .from(".envelop-photo2", {opacity: 0, scale:2})
    .from(".forwardText", 1.5, {opacity:0, yPercent: -50}, 'test')
    // .staggerFrom(".char", 0.05, { opacity: 0 }, 0.05, 'test')
    
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
        .from(`#introText${i}`, 1, {opacity:0, yPercent: 10, delay: 0.3}, 'intro')
        
        ScrollTrigger.create({
            animation: introBar,
            trigger: `#introBar${i}`,
            start: "top 70%",
            end:"bottom 30%",
            toggleActions: "restart none restart none"
        });
    }

    // importantArea
    const introBarA = gsap.timeline();
    introBarA
        .from("#introTextA", 0.5, { opacity:0, xPercent: -20 })
        .from("#introPhoto1", 0.5, { opacity:0, scale: 2 })
        .from("#introScope1", 0.5, { opacity:0, x: -200 })
        .from(".chartTable", 0.5, {opacity:0})
        .from(".paperMain", 0.5, {opacity:0})

    ScrollTrigger.create({
        animation: introBarA,
        trigger: '#introChart1',
        start: "top 70%",
        end: "bottom 50%",
        toggleActions: "restart none restart none"
    });

    // importantArea
    const num1 = document.getElementById("topStart");
    const obj1 = { value: 0 };
    const num2 = document.getElementById("topEnd");
    const obj2 = { value: 0 };
    const num3 = document.getElementById("mediumStart");
    const obj3 = { value: 0 };
    const num4 = document.getElementById("mediumEnd");
    const obj4 = { value: 0 };
    const num5 = document.getElementById("lowStart");
    const obj5 = { value: 0 };
    const num6 = document.getElementById("lowEnd");
    const obj6 = { value: 0 };

    const introBarB = gsap.timeline();
    introBarB
        .from("#introTextB", 0.5, { opacity:0, xPercent: -20 })
        .from("#introPhoto2", { opacity:0, scale: 2 }, 'effect2')
        .from("#introScope2", { opacity:0, x: -200 }, 'effect2')
        .from("#footTest", { yPercent: -100 }, 'statistic')
        .from(".ruler", { height: 0 }, 'statistic')
        .to(obj1, {
            value: 90, ease: Power0.easeIn,
            roundProps: {value: 1},
            onUpdate: () => {num1.innerHTML = obj1.value;}
        }, 'statistic')
        .to(obj2, {
            value: 150, ease: Power0.easeIn,
            roundProps: {value: 1},
            onUpdate: () => {num2.innerHTML = obj2.value;}
        }, 'statistic')
        .to(obj3, {
            value: 80, ease: Power0.easeIn,
            roundProps: {value: 1},
            onUpdate: () => {num3.innerHTML = obj3.value;}
        }, 'statistic')
        .to(obj4, {
            value: 89, ease: Power0.easeIn,
            roundProps: {value: 1},
            onUpdate: () => {num4.innerHTML = obj4.value;}
        }, 'statistic')
        .to(obj5, {
            value: 50, ease: Power0.easeIn,
            roundProps: {value: 1},
            onUpdate: () => {num5.innerHTML = obj5.value;}
        }, 'statistic')
        .to(obj6, {
            value: 79, ease: Power0.easeIn,
            roundProps: {value: 1},
            onUpdate: () => {num6.innerHTML = obj6.value;}
        }, 'statistic')

    ScrollTrigger.create({
        animation: introBarB,
        trigger: '#introChart2',
        start: "top 70%",
        end: "bottom 50%",
        toggleActions: "restart none restart none"
    });

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

});