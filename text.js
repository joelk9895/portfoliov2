import SplitTextJS from "split-text-js";

loadAssets(function () {
  // hide the loading screen once the assets have finished loading
  document.getElementById("loading").style.display = "none";
});

function loadAssets(callback) {
  var text;
  function runSplit() {
    text = new SplitType("#about", { types: "lines" });
    text = new SplitType("#text", { types: "lines" });
    $(".line").append("<div class ='linemask'></div>");
  }

  $(".line").each(function (index) {
    const triggerElement = $(this);
    const targetElement = $(this).find(".linemask");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 50%",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to(targetElement, {
      width: "0%",
      duration: 2,
      stagger: 0.58,
    });
  });

  runSplit();
  window.addEventListener("load", function () {
    $(".line").each(function (index) {
      const triggerElement = $(this);
      const targetElement = $(this).find(".linemask");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 50%",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(targetElement, {
        width: "0%",
        duration: 2,
        stagger: 0.58,
      });
    });
  });
  window.addEventListener("resize", function () {
    text.revert();
    runSplit();
    $(".line").each(function (index) {
      const triggerElement = $(this);
      const targetElement = $(this).find(".linemask");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 50%",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(targetElement, {
        width: "0%",
        duration: 2,
        stagger: 0.58,
      });
    });
  });
  const titles = gsap.utils.toArray(".marquee");
  const tl = gsap.timeline();
  titles.forEach((title) => {
    const splitText = new SplitTextJS(title);
    tl.from(
      splitText.chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.02,
      },
      "<"
    ).to(
      splitText.chars,
      {
        opacity: 0,
        y: -80,
        rotateX: 90,
      },
      "<1"
    );
  });
}
