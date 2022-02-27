const valid = () => {
  const text = document.querySelectorAll(".calc-block input[type=text]");

  text.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  const formName = document.querySelectorAll(".form-name");
  const tel = document.querySelectorAll("input[type=tel]");
  const email = document.querySelectorAll("input[type=email]");
  const placeholder = document.getElementById("form2-message");
  const topName = document.getElementById("form2-name");

  const validText = function (param) {
    param.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я, ,-]/, "");
    });
  };

  const edit = function (param) {
    param.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/[-]+/g, "-");
      e.target.value = e.target.value.replace(/[ ]+/g, " ");
      e.target.value = e.target.value.replace(/[^а-яА-Я, ,-]/g, "");
      e.target.value = e.target.value.replace(/^[ ,-]+/, "");
      e.target.value = e.target.value.replace(/[ ,-]+$/, "");
      e.target.value = e.target.value.replace(/^[а-я]/, (n) => n.toUpperCase());
    });
  };

  edit(placeholder);

  formName.forEach((elem) => {
    validText(elem);
    edit(elem);
  });
  validText(placeholder);
  validText(topName);
  edit(topName);
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
