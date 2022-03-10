import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import valid from "./modules/valid";
import tabs from "./modules/tabs";
import calc from "./modules/calc";
import addDots from "./modules/addDots";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";
import { swiper } from "./modules/swiper";
timer("15 march 2022");
menu();
addDots();
modal();
valid();
tabs();
slider();
calc(100);
swiper();
sendForm({
  formId: ["form1", "form2", "form3"],
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
