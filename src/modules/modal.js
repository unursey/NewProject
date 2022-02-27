const modal = () => {
  const modal = document.querySelector(".popup");
  const modale = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  let idInterval;
  let count = 0;
  const modaleAnimate = () => {
    count++;
    idInterval = requestAnimationFrame(modaleAnimate);
    modale.style.left = count * 2 + "%";

    if (parseFloat(modale.style.left) > 36) {
      cancelAnimationFrame(idInterval);
    }
  };
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let width = document.documentElement.clientWidth;
      modal.style.display = "block";
      if (width > 768) {
        modaleAnimate();
      } else {
        modale.style.left = "20%";
      }
    });
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    count = 0;
  });
};

export default modal;
