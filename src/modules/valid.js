const valid = () => {
  const text = document.querySelectorAll(".calc-block input[type=text]");

  text.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  // .form-name  type="tel" type="email"

  const formName = document.querySelectorAll(".form-name");
  const tel = document.querySelectorAll("input[type=tel]");
  const email = document.querySelectorAll("input[type=email]");
  const placeholder = document.getElementById("form2-message");
  const topName = document.getElementById("form2-name");

  formName.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я, ,-]/, "");
    });
  });

  placeholder.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я, ,-]/, "");
  });

  topName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я, ,-]/, "");
  });

  email.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^a-zA-Z,\d,@,-,_,.,!,~,*,']/,
        ""
      );
    });
  });

  tel.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d,(,),-]/, "");
    });
  });
};

export default valid;
