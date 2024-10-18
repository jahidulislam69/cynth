
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   });
function mousemove(){
    var main = document.querySelector("body")
var crsr = document.querySelector(".mousecurs")

main.addEventListener("mousemove",function(dets) {
    gsap.to(crsr,{
        x:dets.clientX,
        y:dets.clientY,
        duration: .5
    })
});
}

function firstAnim(){

    var tl = gsap.timeline();

    tl.from("#nav",{
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: .15
    })
    tl.from("#heading h1",{
        y:50,
        opacity: 0,
        duration: .5,
        stagger: .15,

    })
    tl.from("#heading h5",{
        y:-20,
        opacity: 0,
        duration: .5,
        stagger: .15,
    })
    tl.from(".smallheadin h5",{
        x:30,
        opacity: 0,
        duration: .5,
        stagger: .15,
    })
    
    tl.from("#herofooter",{
        opacity: 0,
        y:20,
        duration:.5,
        stagger:.15
    })
}


gsap.from(".elem h1", {
    opacity: 0,
    x: -130,
    duration: .5,
    stagger: .15,
    scrollTrigger: {
        trigger: "#second",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "bottom 90%",


    }
})

gsap.from(".elem h5", {
    opacity: 0,
    x: 50,
    duration: .4,
    stagger: .15,
    scrollTrigger: {
        trigger: "#second",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "bottom 90%",


    }
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        scrub: 1,
        // markers: true
    }
})
tl2.from("#aboutme img",{
    x:-100,
    opacity: 0
})
tl2.from(".textabout, .textabout h5, .textabout p,.textabout a",{
    x: 60,
    opacity:0,
})
tl2.from(".aboutfoot",{
    y: 50,
    opacity: 0
})

tl2.from("#footer",{
    y: 50,
    opacity:0,
    duration: .5,
    stagger: .15
})




var main = document.querySelector("body")
var crsr = document.querySelector(".mousecurs")

main.addEventListener("mousemove",function(dets) {
    gsap.to(crsr,{
        x:dets.clientX,
        y:dets.clientY
    })
});


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    
    elem.addEventListener("mouseleave", function(dets){
        
         gsap.to(elem.querySelector("img"),{
             opacity: 0,
             ease: Power3,
 
         });
     });


    elem.addEventListener("mousemove", function(dets){
       var reff = elem.clientY - elem.getBoundingClientRect().top;
       diffrot = dets.clientX - rotate;
       rotate = dets.clientX;
       
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power1,
            top: reff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot * .8)

        });
    });
});


function wheelAnimation(targetElement){
    window.addEventListener("wheel", function(dets){
        if (dets.deltaY>0){
            gsap.to(targetElement,{
                transform : "translatex(-200%)",
                duration: 3,
                repeat: -1,
                ease: "none",
            })
      
        }
        else{
            gsap.to(targetElement,{
                transform : "translatex(0%)",
                duration: 3,
                repeat: -1,
                ease: "none"
            })
           
        }
    })
    
}


wheelAnimation(".marque");   



mousemove();
firstAnim();