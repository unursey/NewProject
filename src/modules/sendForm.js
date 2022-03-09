const sendForm = ({ formId, someElem = [] }) => {
  formId.forEach(function (idForm) {
    const form = document.getElementById(idForm);
    const statusBlock = document.createElement("div");
    //const loadText = "Загрузка...";
    const errorText = "Ошибка...";
    const successText = "Спасибо! Наш менеджер с Вами свяжется!";
    const errText = "Попробуйте еще раз!";

    const sendData = (data) => {
      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    };

    const submitForm = () => {
      const formElements = form.querySelectorAll("input");
      const formData = new FormData(form);
      const formBody = {};

      //statusBlock.textContent = loadText;
      const load = function () {
        form.append(statusBlock);
        let skCircle = document.createElement("div");
        skCircle.className = "sk-circle-bounce";
        statusBlock.append(skCircle);
        for (let i = 1; i < 12; i++) {
          let skChild = document.createElement("div");
          skChild.className = "sk-child sk-circle-" + [i] + "";
          skCircle.append(skChild);
        }
      };
      //form.append(statusBlock);

      formData.forEach((val, key) => {
        formBody[key] = val;
      });

      someElem.forEach((elem) => {
        const element = document.getElementById(elem.id);
        if (elem.type === "block") {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === "input") {
          formBody[elem.id] = element.value;
        }
      });

      const validate = (list) => {
        let success = true;
        if (formBody["user_name"].length < 2) {
          success = false;
        }
        if (
          formBody["user_phone"].length < 5 ||
          formBody["user_phone"].length > 16
        ) {
          success = false;
        }
        if (formBody["user_email"].length == 0) {
          success = false;
        }
        // list.forEach((input) => {
        //  if (!input.classList.contains("success")) {
        //    success = false;
        //  }
        // });

        return success;
      };
      //console.log(formBody["user_name"]);

      if (validate(formElements)) {
        load();

        sendData(formBody)
          .then((data) => {
            statusBlock.textContent = successText;
            formElements.forEach((input) => {
              input.value = "";
            });
          })
          .catch((error) => {
            statusBlock.textContent = errorText;
          });
      } else {
        alert("Данные не валидны!");
        form.append(statusBlock);
        statusBlock.textContent = errText;
      }
    };
    try {
      if (!form) {
        throw new Error("Верните форму на место");
      }
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        submitForm();
      });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export default sendForm;
