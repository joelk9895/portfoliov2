import SplitTextJS from "split-text-js";

var text;
function runSplit() {
  text = new SplitType("#about", { types: "lines" });
  text = new SplitType("#text", { types: "lines" });
  $(".line").append("<div class ='linemask'></div>");
}

runSplit();
window.addEventListener("load", function () {});
window.addEventListener("resize", function () {
  text.revert();
  window.location.reload();
  runSplit();
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
$(".line").each(function (index) {
  const triggerElement = $(this);
  const targetElement = $(this).find(".linemask");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 60%",
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
$(".word").each(function (index) {
  const targetElement = $(this).find(".char");

  const tl = gsap.timeline({});

  tl.from(
    targetElement,
    {
      opacity: 0,
      delay: 2,
      y: 85,
    },
    "<"
  );

  tl.to(
    targetElement,
    {
      opacity: 0,
      y: -85,
      duration: 2,
      stagger: 0.58,
    },
    "<1"
  );
});
