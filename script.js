function scrolltrigger() {
    gsap.registerPlugin(ScrollTrigger);



// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll



const locoScroll = new LocomotiveScroll({

    el: document.querySelector("#main"),

    smooth: true,

});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)

locoScroll.on("scroll", ScrollTrigger.update);



// // tell ScrollTrigger to use these proxy methods for the ".#main" element since Locomotive Scroll is hijacking things

// ScrollTrigger.scrollerProxy("#main", {

//     scrollTop(value) {

//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;

//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.

//     getBoundingClientRect() {

//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };

//     },

//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).

//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"

// });




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());



// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.

// ScrollTrigger.refresh();


}
scrolltrigger();

function cursorEffect() {
    let page1content = document.querySelector(".page1-content");
    let cursor = document.querySelector("#cursor");

    page1content.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y,
        });
    });

    page1content.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            scale: 1,
            opacity: 1,
        })
    })
    page1content.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            scale: 0,
            opacity: 0,
        })
    })
};
cursorEffect();

function page2animation() {
    gsap.from("#elem", {
        y: 200,
        stagger: 0.25,
        duration: 2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 32%",
            scrub: 2
        }
    });
};
page2animation();

function footer() { 
    document.addEventListener("DOMContentLoaded", function () {
    // Create the scroll animation
    gsap.to("#page5 h1", {
        scrollTrigger: {
            trigger: "#page5 h1", // Element to trigger the animation
            start: "top 80%", // Start when the top of h1 is 80% down the viewport
            end: "top 20%",   // End when the top of h1 reaches 20% of the viewport
            toggleActions: "play none none reverse", // Plays the animation and reverses when scrolling back
            markers: false, // Set to true for debugging
        },
        opacity: 1,            // Start fully transparent
        y: 10,                 // Start slightly below its final position
        duration: 1.2,         // Duration of the animation in seconds
        ease: "power3.out",    // Smooth easing function
    });
});
};
footer();

var tl = gsap.timeline();

tl.from("#loader h3",{
    x:20,
    opacity:0,
    duration:1,
    stagger:.3,
});

tl.to("#loader h3",{
    opacity:0,
    x:-10,
    stagger:.1,
    duration:1,
});

tl.to("#loader",{
    opacity:0,
    duration:1,
});
tl.to("#loader", {
    display:"none",
});

function playMusicOnFirstClick() {
    const audio = document.getElementById("background-music");
    audio.play(); // Start playing the audio

    // Remove the event listener after the first click to prevent replaying
    document.removeEventListener("click", playMusicOnFirstClick);
}

// Add a click event listener to the document to trigger audio playback on click
document.addEventListener("click", playMusicOnFirstClick);
