// import { gsap } from "../node_modules/gsap/index.js";
// import { CustomEase } from "../node_modules/gsap/CustomEase.js";
// // import { snap } from "gsap";

// gsap.registerPlugin(CustomEase);

gsap.registerPlugin(CustomEase);

const customEase = CustomEase.create("custom", ".87,0,.13,1");
const counter = document.getElementById("counter");

// باقي الأنيميشن هنا...

// const customEase = CustomEase.create("custom", ".87,0,.13,1");
// const counter = document.getElementById("counter");

gsap.set(".video-container", {
  scale: 0,
  rotation: -20,
});

gsap.to(".hero", {
  clipPath: "polygon(0% 45% , 25% 45% , 25% 55% , 0% 55%)",
  duration: 1.5,
  ease: customEase,
  delay: 1,
});

gsap.to(".hero", {
  clipPath: "polygon(0% 45% , 100% 45% ,100% 55% , 0% 55%)",
  duration: 2,
  ease: customEase,
  delay: 3,

  onStart: () => {
    gsap.to(".progress-barr", {
      width: "100vw",
      duration: 2,
      ease: customEase,
    });

    gsap.to(counter, {
      innerHTML: 100,
      duration: 2,
      ease: customEase,
      snap: { innerHTML: 1 },
    });
  },
});

gsap.to(".hero", {
  clipPath: "polygon(0% 0% , 100% 0% ,100% 100% , 0% 100%)",
  duration: 1,
  ease: customEase,
  delay: 5,

  onStart: () => {
    gsap.to(".video-container", {
      scale: 1,
      rotation: 0,
      clipPath: "polygon(0% 0% , 100% 0% ,100% 100% , 0% 100%)",
      duration: 1.25,
      ease: customEase,
    });

    gsap.to(".progress-barr", {
      opacity: 0,
      duration: 0.3,
    });

    gsap.to(".logo", {
      left: "10%",
      transform: "traslateX(10%)",
      duration: 1.25,
      ease: customEase,

      onStart: () => {
        gsap.to(".char.anim-out h1", {
          y: "100%",
          duration: 1,
          stagger: -0.075,
          ease: customEase,
        });

        gsap.to(".char.anim-in h1", {
          x: "-1200%",
          duration: 1,
          ease: customEase,
          delay: 0.25,
        });
      },
    });
  },
});

gsap.to([".header span", ".coordinates span"], {
  y: "0%",
  duration: 1,
  stagger: 0.125,
  ease: "power3.out",
  delay: 5.75,
});
