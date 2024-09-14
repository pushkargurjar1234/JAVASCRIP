let tl=gsap.timeline();
tl.from("#page1 #circle",{
    scale:0,
    rotate:560,
    
    scrollTrigger:{
        trigger:"#page1 #circle",
        scroller:"body",
        markers:true,
        start:"top 40%",
        end:"top 10%",
        scrub:5,

    }
})
tl.from("#page2 #circle",{
    scale:0,
    duration:1,
    rotate:560,
})
tl.from("#page3 #circle",{

    scale:0,
    rotate:560,
})