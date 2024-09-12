let tl=gsap.timeline()
tl.from("h4",{
    y:-50,
    opacity:0,
    duration:1, 
    stagger:.5
})

tl.from(".mid h1",{
    x:-1300,
    duration:2,
    stagger:1,
    
})

tl.from("img",{
    x:100,
    rotate:45,
    duration:0.5,
    opacity:0,
})