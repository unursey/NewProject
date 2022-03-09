const valid = () => {
  const text = document.querySelectorAll(".calc-block input[type=text]");

  const formName = document.querySelectorAll(".form-name");
  const tel = document.querySelectorAll("input[type=tel]");
  const email = document.querySelectorAll("input[type=email]");
  const placeholder = document.getElementById("form2-message");
  const topName = document.getElementById("form2-name");

  text.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  const validName = function (param) {
    param.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я, ]/, "");
    });
  };

  const validText = function (param) {
    param.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(
        /[^а-яА-Я,\d,.,,,:,;,...,-,),(,!,?, ,"]/,
        ""
      );
    });
  };

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
      e.target.value = e.target.value.replace(/[^\d,(,),-,+]/, "");
    });
  });

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

  formName.forEach((elem) => {
    validName(elem);
    edit(elem);
  });
  validText(placeholder);
  validName(topName);
  edit(topName);
};

export default valid;
