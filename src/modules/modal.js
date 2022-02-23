const modal = () => {
  const modal = document.querySelector(".popup");
  const modale = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const width = document.documentElement.clientWidth;
  console.log(width);
  let idInterval;
  let count = 0;
  const modaleAnimate = () => {
    count++;
    idInterval = requestAnimationFrame(modaleAnimate);

    modale.style.left = count * 18 + "px";
    if (parseFloat(modale.style.left) > width * 0.38) {
      cancelAnimationFrame(idInterval);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (width > 768) {
        modaleAnimate();
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    count = 0;
  });
};

export default modal;
