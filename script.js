let tl1 = gsap.timeline();

tl1
  .to(".flow", { duration: 1, width: "100%" })
  .to(".flow1", {
    duration: 0.5,
    height: 0,
  })
  .to(".flow2", {
    duration: 0.5,
    height: 0,
  })
  .to(".flow3", {
    height: 0,
    duration: 0.5,
  })
  .to(".intro", { scale: 1 })
  .from(".container-intro", { scale: 0 });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-intro",
    pin: true, // pin the trigger element while active
    start: "bottom top", // when the top of the trigger hits the top of the viewport
    end: "0", // end after scrolling 500px beyond the start
    scrub: 2.3,
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
});

// add animations and labels to the timeline
tl2
  .addLabel("start")
  .from(".container-work", {
    scale: 0.4,
    autoAlpha: 0.2,
    rotate: 180,
    backgroundColor: "#ff4949",
  })
  .addLabel("color")
  .to(".container-work", {
    scale: 1,
    autoAlpha: 1,
    rotate: 0,
    backgroundColor: "#363636a8",
  });

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-work",
    pin: true, // pin the trigger element while active
    start: "bottom center", // when the top of the trigger hits the top of the viewport
    end: "0", // end after scrolling 500px beyond the start
    scrub: 2.3,
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
});
tl3
  .addLabel("start")
  .from(".container-skill", {
    // scale: 0.4,
    autoAlpha: 0.2,
    y: 1040,
    backgroundColor: "#ff4949",
  })
  .to(".container-skill", {
    // scale: 1,
    autoAlpha: 1,
    y: 0,
    backgroundColor: "#363636a8",
  });

// function showModal() {
//   document.getElementById("contact-popup").style.display = "flex";
//   document.getElementById("intro-section").style.filter = "blur(5px)";
// }
// function hideModal() {
//   document.getElementById("contact-popup").style.display = "none";
//   document.getElementById("intro-section").style.filter = "blur(0px)";
// }
