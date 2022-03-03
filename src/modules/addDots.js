const addDots = function () {
  const slides = document.querySelectorAll(".portfolio-item");
  const dots = document.querySelector(".portfolio-dots");

  slides.forEach(() => {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    dots.appendChild(dot);
  });
  [...document.querySelectorAll(".dot")][0].classList.toggle("dot-active");
};
export default addDots;
