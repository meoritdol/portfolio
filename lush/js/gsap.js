document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".section2 .best img", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section2",
      start: "top 80%",
      end: "top 20%",
    }
  });

  // Section 3 - 왼쪽에서 슬라이드 인 & 회전
  gsap.from(".section3 .items img", {
    x: -100,
    rotation: -15,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".section3",
      start: "top 80%",
      end: "top 20%",
    }
  });

  // Section 4 - 오른쪽에서 슬라이드 인 & 스케일 업
  gsap.from(".section4 .items img", {
    x: 100,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".section4",
      start: "top 80%",
      end: "top 20%",
    }
  });
});

