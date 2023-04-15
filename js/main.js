const overlay = document.querySelector(".background-overlay");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  gsap.to(overlay, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.6,
    ease: "easeInOut",
  });
});
